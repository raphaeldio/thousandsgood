# Thousands Good Education Centre — Website

React 19 + TypeScript + Vite, Tailwind CSS v4, shadcn/ui (Radix), dan animasi dari React Bits.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil di folder dist/
```

## Struktur

| Lokasi | Isi |
|---|---|
| `src/data/site.ts` | **Semua konten**: program, prestasi, berita, nomor WA, alamat. Ubah teks di sini. |
| `src/pages/` | 7 halaman: Home, About, Programs, Achievements, News, Activities, Contact (+ NotFound) |
| `src/components/site/` | Komponen bersama: hero, section, kartu, tombol CTA, catatan draf |
| `src/components/layout/` | Navbar, Footer, tombol WhatsApp melayang |
| `src/components/brand/` | Logo vektor (SVG) dan ikon media sosial |
| `src/components/ui/` | Komponen shadcn/ui |
| `src/components/*.tsx` | Komponen React Bits: Aurora, SplitText, RotatingText, CountUp, SpotlightCard, ScrollVelocity, Magnet, ShinyText, GradientText, AnimatedContent |
| `src/index.css` | Palet warna dari logo (`--brand-blue`, `--brand-red`, dll.) |

## Sebelum go-live

1. Ubah `SHOW_DRAFT_NOTES` menjadi `false` di `src/data/site.ts` untuk menyembunyikan semua kotak "Catatan draf".
2. Ganti placeholder `[Foto ...]`, `[usia / kelas]`, jam operasional, email, dan testimoni dengan data asli.
3. Logo di `src/components/brand/Logo.tsx` adalah rekreasi vektor. Ganti dengan file logo asli (SVG) bila tersedia.
4. Hosting: Netlify (`public/_redirects` sudah ada) atau Vercel (`vercel.json` sudah ada), agar URL seperti `/program` tidak 404.

## Catatan

- `src/components/Aurora.tsx` sedikit dimodifikasi: `loseContext()` di cleanup dihapus karena membuat canvas kosong di mode StrictMode.
- Aurora otomatis dimatikan bila perangkat tidak mendukung WebGL berbasis GPU atau pengguna memilih *reduced motion*.
