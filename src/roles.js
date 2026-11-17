// Data role diambil dari game-werewolf.js (versi WhatsApp), teks disesuaikan untuk web
export const CAT = {
  "base": "⭐ Role Dasar",
  "special": "✨ Role Khusus",
  "protect": "🛡️ Perlindungan",
  "info": "🔍 Informasi",
  "manip": "🎭 Manipulasi",
  "killer": "🗡️ Pembunuh",
  "survive": "♻️ Kebangkitan & Bertahan Hidup"
}
export const ROLES = {
  "werewolf": {
    "emoji": "🐺",
    "name": "Werewolf",
    "team": "wolf",
    "cat": "base",
    "aliases": [
      "werewolf",
      "ww",
      "serigala"
    ],
    "desc": "Tim Werewolf. Tiap malam kamu & rekan werewolf memilih 1 korban lewat tab Aksi.\n⚠️ Semua werewolf yang hidup harus memilih orang yang sama. Kalau pilihannya beda-beda, malam itu tidak ada yang mati.\nJumlah werewolf: 2 (6-9 pemain) atau 3 (10-15 pemain).\nMenang jika jumlah tim serigala ≥ pemain lain yang masih hidup."
  },
  "seer": {
    "emoji": "🔮",
    "name": "Seer",
    "team": "village",
    "cat": "base",
    "aliases": [
      "seer",
      "peramal"
    ],
    "desc": "Tim Warga. Tiap malam pilih 1 pemain lewat tab Aksi. Menjelang pagi kamu diberi tahu apakah dia werewolf atau bukan.\nGunakan infonya dengan bijak, jangan sampai ketahuan werewolf."
  },
  "guard": {
    "emoji": "🛡️",
    "name": "Guard (Doctor)",
    "team": "village",
    "cat": "base",
    "aliases": [
      "guard",
      "pengawal",
      "penjaga",
      "doctor",
      "dokter"
    ],
    "desc": "Tim Warga. Tiap malam lindungi 1 pemain (boleh dirimu sendiri) lewat tab Aksi. Role ini juga berfungsi sebagai Doctor.\nKalau pemain yang kamu lindungi diserang malam itu, dia selamat.\nTidak boleh melindungi orang yang sama 2 malam berturut-turut."
  },
  "witch": {
    "emoji": "🧪",
    "name": "Penyihir (Witch)",
    "team": "village",
    "cat": "base",
    "aliases": [
      "witch",
      "penyihir"
    ],
    "desc": "Tim Warga. Punya 2 ramuan yang masing-masing hanya bisa dipakai 1x seumur game:\n💚 Ramuan Penyembuh — menyelamatkan korban serangan werewolf malam itu (atau pemain yang akan mati karena racun/penyakit malam itu).\n☠️ Ramuan Racun — membunuh 1 pemain siapa saja (warga maupun werewolf).\nDi akhir malam kamu diberi tahu siapa yang terancam mati, lalu memilih lewat tab Aksi. Tidak memilih = tidak memakai ramuan."
  },
  "villager": {
    "emoji": "👨‍🌾",
    "name": "Warga",
    "team": "village",
    "cat": "base",
    "aliases": [
      "warga",
      "villager"
    ],
    "desc": "Tim Warga. Tidak punya kemampuan khusus, senjatamu cuma diskusi dan voting.\nCari tahu siapa werewolf dari tingkah laku pemain, lalu gantung mereka saat voting siang."
  },
  "cupid": {
    "emoji": "💘",
    "name": "Cupid",
    "team": "village",
    "cat": "special",
    "ext": true,
    "aliases": [
      "cupid"
    ],
    "desc": "Tim Warga. Di malam pertama kamu memilih 2 pemain lewat tab Aksi untuk dijadikan Pasangan (Lovers).\n• Boleh siapa saja: warga maupun werewolf, boleh juga dirimu sendiri.\n• Kamu tidak otomatis menjadi pasangan.\n💔 Jika salah satu pasangan mati, pasangannya ikut mati.\n💞 Kalau yang tersisa tinggal kedua pasangan itu, mereka menang bersama."
  },
  "hipnotis": {
    "emoji": "🌀",
    "name": "Hipnotis (Recruiter)",
    "team": "hyp",
    "cat": "special",
    "ext": true,
    "aliases": [
      "hipnotis",
      "hypnotis",
      "recruiter"
    ],
    "desc": "Tim Hipnotis (sendiri). Kamu bisa merekrut 1 pemain acak (hoki-hokian) sekali seumur game, kapan saja lewat tab Aksi.\n• Yang direkrut bisa dari kubu warga maupun werewolf. Dia tetap memegang role-nya, tapi kini berpihak padamu.\n• Sebelum berhasil merekrut, kamu belum bisa membunuh.\n• Setelah merekrut, tiap malam kamu bisa membunuh 1 pemain.\nMenang jika hanya tim Hipnotis (kamu & pengikutmu) yang tersisa."
  },
  "joker": {
    "emoji": "🃏",
    "name": "Joker",
    "team": "neutral",
    "cat": "special",
    "ext": true,
    "aliases": [
      "joker"
    ],
    "desc": "Tim Netral. Kamu menang jika berhasil membuat dirimu sendiri digantung lewat voting siang.\nBertingkahlah mencurigakan, tapi jangan terlalu jelas. Setelah menang, game tetap lanjut untuk pemain lain."
  },
  "swapster": {
    "emoji": "🔄",
    "name": "Swapster",
    "team": "village",
    "cat": "special",
    "ext": true,
    "aliases": [
      "swapster",
      "swap"
    ],
    "desc": "Tim Warga. Maksimal 2x seumur game, pilih 2 pemain lewat tab Aksi. Malam itu semua aksi yang menuju pemain pertama akan tertukar ke pemain kedua, dan sebaliknya.\nContoh: serangan werewolf ke A jadi mengenai B, perlindungan Guard untuk B jadi menutupi A."
  },
  "bodyguard": {
    "emoji": "💂",
    "name": "Bodyguard",
    "team": "village",
    "cat": "protect",
    "ext": true,
    "aliases": [
      "bodyguard",
      "pengawalpribadi"
    ],
    "desc": "Tim Warga. Tiap malam pilih 1 pemain (bukan dirimu) untuk dijaga lewat tab Aksi.\nJika dia diserang (werewolf / pembunuhan langsung), kamu yang mati menggantikannya dan dia selamat.\nKalau dia juga dilindungi Guard, serangan tertahan dan kamu tidak mati."
  },
  "detective": {
    "emoji": "🕵️",
    "name": "Detective",
    "team": "village",
    "cat": "info",
    "ext": true,
    "aliases": [
      "detective",
      "detektif"
    ],
    "desc": "Tim Warga. Tiap malam pilih 2 pemain (dua pilihan) lewat PM. Menjelang pagi kamu tahu apakah mereka satu kubu atau beda kubu.\nKubu: Werewolf, Warga, Netral, Hipnotis, atau Pembakar. Hasil bisa dikacaukan Framer / Illusionist."
  },
  "spy": {
    "emoji": "👁️",
    "name": "Spy",
    "team": "village",
    "cat": "info",
    "ext": true,
    "aliases": [
      "spy",
      "mata-mata",
      "matamata"
    ],
    "desc": "Tim Warga. Tiap malam pilih 1 pemain lewat tab Aksi. Menjelang pagi kamu tahu siapa saja yang dia kunjungi (jadikan target aksi) malam itu.\nBerguna untuk membongkar Werewolf yang menyerang atau role yang beraksi diam-diam."
  },
  "illusionist": {
    "emoji": "🎭",
    "name": "Illusionist",
    "team": "wolf",
    "cat": "info",
    "ext": true,
    "aliases": [
      "illusionist",
      "ilusionis"
    ],
    "desc": "Tim Werewolf (pendukung, tidak ikut memilih korban). Tiap malam pilih 1 pemain lewat tab Aksi.\nHasil pemeriksaan Seer/Detective terhadapnya malam itu dibalik: serigala tampak bukan serigala, warga tampak serigala."
  },
  "puppeteer": {
    "emoji": "🪆",
    "name": "Puppeteer",
    "team": "wolf",
    "cat": "manip",
    "ext": true,
    "aliases": [
      "puppeteer",
      "dalang"
    ],
    "desc": "Tim Werewolf (pendukung). Tiap malam pilih 2 pemain (dua pilihan): pemain pertama adalah boneka, pemain kedua adalah arah baru.\nKalau si boneka punya aksi malam dengan 1 target, aksinya dibelokkan ke pemain kedua."
  },
  "silencer": {
    "emoji": "🤐",
    "name": "Silencer",
    "team": "wolf",
    "cat": "manip",
    "ext": true,
    "aliases": [
      "silencer",
      "pembungkam"
    ],
    "desc": "Tim Werewolf (pendukung). Tiap malam pilih 1 pemain lewat tab Aksi. Besoknya dia dibungkam: tidak boleh bicara di grup.\nChat-nya dikunci selama siang."
  },
  "blackmailer": {
    "emoji": "📩",
    "name": "Blackmailer",
    "team": "wolf",
    "cat": "manip",
    "ext": true,
    "aliases": [
      "blackmailer",
      "pemeras"
    ],
    "desc": "Tim Werewolf (pendukung). Tiap malam pilih 1 pemain lewat tab Aksi. Besoknya dia tidak bisa ikut voting siang."
  },
  "framer": {
    "emoji": "🖼️",
    "name": "Framer",
    "team": "wolf",
    "cat": "manip",
    "ext": true,
    "aliases": [
      "framer",
      "penjebak"
    ],
    "desc": "Tim Werewolf (pendukung). Tiap malam pilih 1 pemain lewat tab Aksi. Jika Seer/Detective memeriksanya malam itu, dia tampak seperti Werewolf."
  },
  "trickster": {
    "emoji": "🎲",
    "name": "Trickster",
    "team": "wolf",
    "cat": "manip",
    "ext": true,
    "aliases": [
      "trickster",
      "penipu"
    ],
    "desc": "Tim Werewolf (pendukung). Maksimal 2x seumur game, pilih 1 pemain lewat tab Aksi. Pada voting siang berikutnya, suaranya dialihkan ke pemain acak."
  },
  "thief": {
    "emoji": "🥷",
    "name": "Thief",
    "team": "village",
    "cat": "manip",
    "ext": true,
    "aliases": [
      "thief",
      "pencuri"
    ],
    "desc": "Tim Warga. Sekali seumur game, pilih 1 pemain lewat tab Aksi. Kamu mencuri role-nya, dan dia menjadi Warga biasa.\nKamu ikut tim dari role yang kamu curi (kalau mencuri Werewolf, kamu jadi serigala)."
  },
  "poisoner": {
    "emoji": "☠️",
    "name": "Poisoner",
    "team": "wolf",
    "cat": "killer",
    "ext": true,
    "aliases": [
      "poisoner",
      "peracun"
    ],
    "desc": "Tim Werewolf (pendukung). Maksimal 2x seumur game, pilih 1 pemain lewat tab Aksi. Korban mati pada malam berikutnya.\nRacun bisa disembuhkan Ramuan Penyembuh milik Penyihir."
  },
  "arsonist": {
    "emoji": "🔥",
    "name": "Arsonist",
    "team": "solo",
    "cat": "killer",
    "ext": true,
    "aliases": [
      "arsonist",
      "pembakar"
    ],
    "desc": "Tim Solo. Tiap malam lewat tab Aksi, pilih salah satu: siram bensin ke 1 pemain, atau bakar semua pemain yang sudah tersiram.\nYang terbakar langsung mati (tidak bisa dihentikan Guard). Menang jika kamu pemain terakhir yang hidup."
  },
  "hunter": {
    "emoji": "🏹",
    "name": "Hunter",
    "team": "village",
    "cat": "killer",
    "ext": true,
    "aliases": [
      "hunter",
      "pemburu"
    ],
    "desc": "Tim Warga. Ketika kamu mati (diserang malam atau digantung), kamu diberi tab Aksi untuk menembak 1 pemain (waktu 25 detik).\nTembak yang kamu curigai sebagai werewolf!"
  },
  "avenger": {
    "emoji": "⚔️",
    "name": "Avenger",
    "team": "village",
    "cat": "killer",
    "ext": true,
    "aliases": [
      "avenger",
      "pembalas"
    ],
    "desc": "Tim Warga. Kalau kamu digantung lewat voting, kamu diberi tab Aksi untuk memilih 1 pemain yang tadi memilihmu agar ikut mati (waktu 25 detik).\nKalau tidak ada pemilihmu yang tersisa, kamu boleh memilih siapa saja."
  },
  "plague": {
    "emoji": "🦠",
    "name": "Plague Doctor",
    "team": "village",
    "cat": "killer",
    "ext": true,
    "aliases": [
      "plague",
      "plaguedoctor",
      "dokterwabah"
    ],
    "desc": "Tim Warga. Sekali seumur game, pilih 1 pemain lewat tab Aksi untuk ditulari penyakit. Korban mati 2 malam kemudian.\nPenyakit bisa disembuhkan Ramuan Penyembuh Penyihir."
  },
  "necromancer": {
    "emoji": "⚰️",
    "name": "Necromancer",
    "team": "village",
    "cat": "survive",
    "ext": true,
    "aliases": [
      "necromancer",
      "necro"
    ],
    "desc": "Tim Warga. Sekali seumur game, mulai malam ke-2, pilih 1 pemain mati lewat tab Aksi untuk dihidupkan kembali saat pagi.\nSyarat: dia harus mati di malam hari (bukan digantung) dan bukan mati karena cinta."
  },
  "phantom": {
    "emoji": "👻",
    "name": "Phantom",
    "team": "village",
    "cat": "survive",
    "ext": true,
    "aliases": [
      "phantom",
      "hantu"
    ],
    "desc": "Tim Warga. Setelah kamu mati, rohmu masih bisa 1x menghantui: pilih 1 pemain hidup lewat tab Aksi, kemampuan malamnya diblokir malam itu."
  },
  "amnesiac": {
    "emoji": "🧠",
    "name": "Amnesiac",
    "team": "village",
    "cat": "survive",
    "ext": true,
    "aliases": [
      "amnesiac",
      "amnesia"
    ],
    "desc": "Tim Warga (sementara). Sekali seumur game, pilih 1 pemain yang sudah mati lewat tab Aksi. Kamu mendapatkan role-nya dan ikut timnya."
  },
  "survivor": {
    "emoji": "🍀",
    "name": "Survivor",
    "team": "neutral",
    "cat": "survive",
    "ext": true,
    "aliases": [
      "survivor",
      "penyintas"
    ],
    "desc": "Tim Netral. Tidak punya skill. Kamu menang jika masih hidup saat game berakhir, tim mana pun yang menang."
  },
  "gambler": {
    "emoji": "🎰",
    "name": "Gambler",
    "team": "village",
    "cat": "survive",
    "ext": true,
    "aliases": [
      "gambler",
      "penjudi"
    ],
    "desc": "Tim Warga. Sekali seumur game, pilih 1 pemain lalu tebak role-nya (dua tab Aksi).\n✅ Tebakan benar: pemain itu mati.\n❌ Tebakan salah: kamu yang mati."
  },
  "executioner": {
    "emoji": "🎯",
    "name": "Executioner",
    "team": "neutral",
    "cat": "survive",
    "ext": true,
    "aliases": [
      "executioner",
      "algojo"
    ],
    "desc": "Tim Netral. Kamu punya target rahasia (dikirim lewat PM). Kamu menang jika target itu digantung lewat voting.\nKalau targetmu mati dengan cara lain, kamu berubah menjadi Warga biasa."
  },
  "mayor": {
    "emoji": "🎖️",
    "name": "Mayor",
    "team": "village",
    "cat": "survive",
    "ext": true,
    "aliases": [
      "mayor",
      "walikota"
    ],
    "desc": "Tim Warga. Suaramu saat voting siang bernilai 2x. Kalau kamu juga terpilih jadi Kepala Desa, suaramu bernilai 3x.\nIdentitasmu rahasia, jadi gunakan pengaruhmu dengan cerdas."
  }
}
export const TEAM_NAME = {
  "wolf": "🐺 Werewolf",
  "village": "🏘️ Warga",
  "neutral": "⚖️ Netral",
  "solo": "🔥 Solo",
  "hyp": "🌀 Hipnotis"
}
