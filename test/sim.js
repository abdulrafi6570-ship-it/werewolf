// Simulasi headless: bot memainkan beberapa game penuh untuk menguji engine (tanpa browser / socket)
import * as G from '../src/game.js'
import * as DB from '../src/db.js'

const events = []
G.initIO({ to: (r) => ({ emit: (ev, d) => events.push([r, ev]) }) })
const N = [6, 8, 10, 12, 15, 15, 12]
let fails = 0
for (const n of N) {
  const users = []
  for (let i = 0; i < n; i++) users.push(await DB.createUser('bot' + Math.random().toString(36).slice(2, 8), 'h' + Math.random()))
  const room = G.createRoom(users[0], true)
  for (const u of users.slice(1)) G.addPlayer(room, u)
  await G.startGame(room)
  const t0 = Date.now()
  while (!room.dead && Date.now() - t0 < 60000) {
    for (const q of [...G.polls.values()]) {
      const r = G.rooms[q.chat]; if (!r) continue
      const targets = q.to === q.chat ? r.players.filter((p) => p.alive) : [G.getP(r, q.to)]
      for (const p of targets) if (p && Math.random() < 0.7) await G.vote(p.jid, q.id, q.options[Math.floor(Math.random() * q.options.length)].value)
    }
    for (const p of room.players) if (Math.random() < 0.1) G.chatSend(room, p, 'main', 'halo'), G.chatSend(room, p, 'wolf', 'ssst')
    await new Promise((r) => setTimeout(r, 15))
  }
  const roles = room.players.map((p) => p.role0).join(',')
  console.log(room.dead ? 'SELESAI' : 'TIMEOUT!', `n=${n} malam=${room.night} log=${room.log.length}`, roles.slice(0, 90))
  if (!room.dead) { fails++; G.halt(room) }
}
console.log(fails ? 'ADA GAGAL' : 'SEMUA GAME SELESAI TANPA ERROR')
const hist = await DB.leaderboard('rajin'); console.log('leaderboard rajin:', hist.length, 'pemain')
process.exit(fails ? 1 : 0)
