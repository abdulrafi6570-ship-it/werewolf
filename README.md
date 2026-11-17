# 🐺 Werewolf Pixel (Node.js + Express + Socket.IO + Firebase)

## Jalankan
```bash
npm install
npm start          # buka http://localhost:3000
```
Tanpa Firebase pun jalan (data disimpan di `data/db.json`, hanya untuk uji coba). Untuk produksi pakai Firebase.

## Cara membuat & memakai Firebase (Firestore)
1. Buka https://console.firebase.google.com → **Add project** → beri nama → matikan Google Analytics → **Create**.
2. Menu kiri **Build → Firestore Database → Create database**.
   - Pilih lokasi `asia-southeast2 (Jakarta)`.
   - Pilih **Production mode** (aman: semua akses dari browser diblokir, hanya server kita yang boleh lewat Admin SDK).
3. Klik ikon ⚙️ **Project settings → Service accounts → Generate new private key** → file JSON terunduh.
4. Ganti namanya jadi `serviceAccountKey.json`, taruh di folder utama proyek (sejajar `server.js`).
   ⚠️ Jangan di-upload ke GitHub / dibagikan (sudah ada di `.gitignore`).
5. `npm start` → di console muncul `[DB] Firebase Firestore aktif`. Selesai, tidak perlu buat tabel manual:
   collection `users`, `usernames`, dan `games` dibuat otomatis.
6. Di hosting (Render/Railway/VPS) simpan isi JSON itu sebagai file rahasia, atau set env `FIREBASE_KEY=/path/ke/file.json`.

Data di Firestore:
- `users/{uid}`: username, hash token, foto (JPEG kecil base64), statistik (games, wins, wolfGames, wolfWins, survived)
- `usernames/{lower}`: penjaga supaya username unik
- `games/{id}`: hasil game + seluruh log chat (untuk replay), `uids` = daftar pemain

> Firebase Hosting / Vercel tidak bisa menjalankan Socket.IO. Hosting server Node ini di Render, Railway, Fly.io, atau VPS.

## Alur akun
Pertama masuk: isi username → server membuat akun + token acak yang disimpan di browser (`localStorage`). Selanjutnya otomatis masuk. Username tidak bisa diganti. Kalau data browser dihapus, akun di perangkat itu hilang aksesnya.

## Struktur
- `src/roles.js` — 31 role + deskripsi (diambil dari file WhatsApp)
- `src/game.js` — engine: pembagian role, kepala desa, skill malam (semua role), penyihir, pagi, voting, Hunter/Avenger, cek menang, chat per channel, replay
- `src/db.js` — Firebase / file lokal
- `server.js` — Express + Socket.IO (lobby, room, auth, profil, leaderboard, riwayat)
- `public/` — UI pixel (HTML/CSS/JS biasa, animasi pakai CSS keyframes `steps()` supaya patah-patah ala pixel)
- `public/cards/` — 31 kartu role (webp). Nama file = kunci role (mis. `werewolf.webp`, `villager.webp`)
- `npm run sim` — simulasi bot main 7 game penuh untuk tes engine

## Pengaturan waktu
Ada di `CFG` di `src/game.js` (kepala desa 45s, siang 90s, voting 45s, malam 60s).

## Animasi & kartu
- Pembagian role: kartu terbalik (flip) + kilau, lalu tampil role-mu. Tap "SIAP!" untuk menutup.
- Tombol 🃏 Kartu di bar atas (atau tap kartu di tab Aksi) = lihat kartu role lagi kapan saja.
- Mati: kartumu dirobek jadi dua dengan animasi; di tab Pemain, kartu pemain mati tampil sobek.
- Bar atas selalu menampilkan fase + sisa waktu + bar progres; tiap ganti fase muncul banner (Malam / Pagi / Diskusi / Voting) dengan hitung mundur.
