# Analisis Situs Thousands Good Education Centre

Sumber: https://sites.google.com/view/thousandsgood (7 halaman, dibaca 13 Oktober 2026)

## Ringkasan

Kontennya **kaya dan meyakinkan**: ada timeline 15 tahun, puluhan prestasi lengkap dengan tanggal dan penyelenggara, fasilitas, serta program yang beragam. Masalah utamanya ada di tiga hal:

1. **Konsistensi data.** Angka dan tahun berbeda antar halaman.
2. **Informasi praktis yang hilang.** Tidak ada usia peserta, jadwal, biaya, jam buka, email, peta, maupun alamat cabang kedua.
3. **Platform.** Google Sites membatasi SEO, kecepatan, dan profesionalitas (tanpa domain sendiri).

## Analisis per halaman

| Halaman | Isi utama | Kekuatan | Masalah |
|---|---|---|---|
| **Home** | Statistik, highlight juara, 13 poin "pelopor", testimoni (gambar), program, CTA WhatsApp | CTA jelas, bukti sosial kuat | Testimoni hanya gambar dan tautan IG; teks berhuruf kapital; angka prestasi "113" berbeda dari halaman lain |
| **About Us** | Kisah pendiri (pasangan suami-istri), filosofi *Educare*, timeline 2011–2026, The Eduverse Alliance dan 4 pilar | Filosofi dan timeline bagus | Nama dan foto pendiri tidak ada; visi-misi samar; cabang 2023 tidak muncul di Kontak |
| **Programs** | 4 program inti (±25 sub-program), 11 program internasional/sertifikasi, 4 nomor WA | Pilihan sangat lengkap | **Tidak ada usia, jadwal, durasi, level, atau biaya**; kartu program inti tanpa deskripsi; 4 nomor WA membingungkan |
| **Achievements** | 13 kompetisi internal (2011–2027), ±33 prestasi eksternal 2015–2026, video YouTube | Data detail dan bisa diverifikasi | Nama siswa tidak dicantumkan; tahun salah tempat (lihat di bawah); klaim "50+", "113", dan "ratusan" saling bertentangan |
| **News** | Pengumuman finalis 3 kompetisi internal, juara Spelling Bee dan Snake Words | Aktif dan aktual (final 19 Okt – 6 Nov 2026) | Satu halaman ditimpa setiap kali ada berita, jadi tidak ada arsip; 71 nama lengkap anak dipublikasikan (perlu izin orang tua) |
| **Beyond Class** | 11 kegiatan, 8 fasilitas | Fasilitas konkret (2 CCTV per kelas, AC, fiber) | Deskripsi sangat singkat; tidak ada ajakan kunjungan atau trial class |
| **Contact Us** | Alamat, 2 nomor admission, Google Form | Alamat lengkap | Judul "Find us on map" **tanpa peta**; tidak ada jam buka dan email; cabang kedua tidak dicantumkan |

## Inkonsistensi yang perlu diputuskan pemilik

1. **Jumlah prestasi:** "113" (Home), "50+ hingga 2025" dan "ratusan" (Achievements), "ratusan sejak 2021" (Home bagian English).
2. **Game Expo:** 2025 (daftar internal) vs 2026 (Home, Beyond Class).
3. **Native speaker:** 2024 (About) vs 2025 (Home).
4. **"Olimpiade Siswa KANHP 2025"** bertanggal 21–23 Juni 2024.
5. **English Storytelling USU:** dicatat di tahun 2021, tetapi tanggalnya 24 Februari 2023.
6. **"Poster Competition FTIK 2025"** bertanggal 3 Desember 2024 (mungkin benar karena nama event; perlu dicek).
7. **Cabang kedua (2023)** disebut di About, tetapi tidak ada di Contact.
8. **Nama lembaga:** "Thousands Good Education Centre" vs "Thousands Good Educare". Pilih satu nama utama.
9. **Klaim "pertama/satu-satunya/#1"** belum disertai bukti (IELTS Test Centre, Game Expo Sumut, AI Creator, Mythonia Saga).

Catatan: "15 tahun" **konsisten** dengan tahun 2011 (About), jadi tidak perlu diubah.

## Masalah teknis dan SEO

- Domain `sites.google.com/view/...` sebaiknya diganti domain sendiri (mis. `thousandsgood.id`).
- Meta description, schema `EducationalOrganization`, dan Open Graph tidak bisa diatur dengan bebas.
- Testimoni dan sebagian judul berupa gambar, sehingga tidak terindeks dan tidak aksesibel.
- Belum ada Google Business Profile atau peta yang terhubung, padahal ini penting untuk pencarian lokal seperti "kursus bahasa Inggris Lubuk Pakam".
- Header berupa banyak gambar besar, sehingga lambat dimuat di HP dengan koneksi lambat.

## Yang dikerjakan di draf (folder ini)

Situs statis 7 halaman: HTML, CSS, dan JS tanpa build tool, bisa di-hosting gratis di Netlify, Vercel, GitHub Pages, atau Cloudflare Pages.

| File | Pengganti halaman lama | Perbaikan utama |
|---|---|---|
| `index.html` | Home | Hero dan proposisi nilai, statistik, 4 program, blok IELTS, 6 juara, timeline ringkas, slot testimoni teks, schema.org |
| `tentang.html` | About Us | Filosofi Educare, timeline lengkap, 4 pilar Eduverse dengan tautan IG |
| `program.html` | Programs | Navigasi per program, slot usia/jadwal/level, deskripsi tiap sub-program, sertifikasi untuk sekolah |
| `prestasi.html` | Achievements | Tabel prestasi per tahun dengan filter, kompetisi internal |
| `berita.html` | News | Kartu jadwal final, daftar finalis dalam kolom |
| `kegiatan.html` | Beyond Class | Kartu kegiatan dan fasilitas, ajakan kunjungan/trial |
| `kontak.html` | Contact Us | Peta Google Maps, semua nomor WA beserta fungsinya, slot jam buka dan email |

Fitur umum:

- Header dan footer dikelola di satu file (`assets/js/main.js`).
- Tombol WhatsApp melayang dengan pesan yang sudah terisi otomatis.
- Responsif untuk HP.

**Kotak kuning bertanda "CATATAN DRAF"** menandai data yang harus dilengkapi atau diputuskan. **Hapus semua kotak itu sebelum situs dipublikasikan.** Gambar masih berupa placeholder `[Foto ...]`. Ganti dengan foto asli berukuran kecil (format WebP, lebar ≤ 1200px).

## Langkah berikutnya yang disarankan

1. Putuskan 9 inkonsistensi di atas.
2. Lengkapi usia, jadwal, dan biaya per program, serta jam buka, email, dan alamat cabang 2.
3. Kumpulkan foto asli dan 3–5 testimoni teks (dengan izin).
4. Beli domain, hosting statis, lalu hubungkan Google Search Console dan Google Business Profile.
5. Opsional: tambahkan halaman per artikel berita, atau pindah ke CMS ringan bila admin non-teknis perlu sering memperbarui.
