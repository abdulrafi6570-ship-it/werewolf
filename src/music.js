// Pencarian lagu lewat API Nexadev (spotifyplay). Server yang memanggil API-nya,
// jadi browser tidak kena masalah CORS dan URL yang dipakai pemain hanya hasil dari API.
const API = 'https://api.nexadev.my.id/api/spotifyplay'

const AUDIO_KEYS = ['audio', 'audioUrl', 'audio_url', 'download', 'downloadUrl', 'download_url', 'dl', 'mp3', 'stream', 'streamUrl', 'preview', 'preview_url', 'previewUrl', 'url', 'link']
const TITLE_KEYS = ['title', 'name', 'judul', 'track', 'trackName']
const ARTIST_KEYS = ['artist', 'artists', 'author', 'singer', 'channel']
const COVER_KEYS = ['thumbnail', 'thumb', 'cover', 'image', 'img', 'album_art', 'albumArt', 'poster']

const isHttp = (s) => typeof s === 'string' && /^https?:\/\//i.test(s)
const isSpotifyPage = (s) => /^https?:\/\/open\.spotify\.com\//i.test(s)
const isImage = (s) => /\.(jpe?g|png|webp|gif|svg)(\?|#|$)/i.test(s)

function str(v) {
  if (typeof v === 'string') return v
  if (Array.isArray(v)) return v.map(str).filter(Boolean).join(', ')
  if (v && typeof v === 'object') return str(v.name ?? v.title ?? '')
  return ''
}
function first(o, keys, test = () => true) {
  for (const k of keys) {
    const v = o[k]
    if (typeof v === 'string' && test(v)) return v
  }
  return ''
}
function candidate(o) {
  const url = first(o, AUDIO_KEYS, (v) => isHttp(v) && !isSpotifyPage(v) && !isImage(v))
  if (!url) return null
  let cover = first(o, COVER_KEYS, isHttp)
  if (!cover && o.album && typeof o.album === 'object') cover = first(o.album, COVER_KEYS, isHttp) || (Array.isArray(o.album.images) ? o.album.images[0]?.url || '' : '')
  const title = TITLE_KEYS.map((k) => str(o[k])).find(Boolean) || 'Tanpa judul'
  const artist = ARTIST_KEYS.map((k) => str(o[k])).find(Boolean) || ''
  return { title: title.slice(0, 120), artist: artist.slice(0, 120), cover: isHttp(cover) ? cover : '', url }
}
// jelajahi JSON apa pun bentuknya dan kumpulkan objek yang punya URL audio
export function extractTracks(data) {
  const out = []
  const seen = new Set()
  const walk = (n, depth) => {
    if (out.length >= 5 || depth > 6 || !n || typeof n !== 'object') return
    if (Array.isArray(n)) return n.forEach((x) => walk(x, depth + 1))
    const c = candidate(n)
    if (c && !seen.has(c.url)) { seen.add(c.url); out.push(c) }
    // lanjut ke dalam, supaya lagu di balik wrapper (result/data/…) tetap ketemu
    for (const v of Object.values(n)) if (v && typeof v === 'object') walk(v, depth + 1)
  }
  walk(data, 0)
  return out
}

export async function searchTracks(q) {
  q = String(q || '').trim().slice(0, 100)
  if (!q) throw new Error('Tulis judul lagunya dulu')
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), 15000)
  try {
    const res = await fetch(`${API}?q=${encodeURIComponent(q)}`, { signal: ctrl.signal })
    if (!res.ok) throw new Error(`API lagu error (${res.status})`)
    const data = await res.json()
    const tracks = extractTracks(data)
    if (!tracks.length) {
      console.warn('[music] respons API tidak berisi URL audio:', JSON.stringify(data).slice(0, 600))
      throw new Error('Lagu tidak ditemukan')
    }
    return tracks
  } catch (e) {
    if (e.name === 'AbortError') throw new Error('API lagu terlalu lama merespons')
    if (e instanceof SyntaxError) throw new Error('Respons API lagu tidak valid')
    throw e
  } finally { clearTimeout(t) }
}
