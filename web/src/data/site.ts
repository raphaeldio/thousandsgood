// All site content lives here so it can be updated without touching layout code.
// Sourced from sites.google.com/view/thousandsgood (October 2026).

import type { LucideIcon } from "lucide-react"
import {
  Award,
  BadgeCheck,
  Bot,
  BookOpen,
  Brain,
  Camera,
  ClipboardList,
  Code2,
  Cpu,
  Film,
  Gamepad2,
  Globe,
  GraduationCap,
  Handshake,
  Headphones,
  Laptop,
  Lightbulb,
  Megaphone,
  MessagesSquare,
  Mic,
  Monitor,
  Palette,
  PartyPopper,
  Plane,
  Presentation,
  School,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Swords,
  Trophy,
  Tv,
  Users,
  Wifi,
  Workflow,
} from "lucide-react"

/** Set to false before going live to hide every "Catatan draf" box. */
export const SHOW_DRAFT_NOTES = true

export const WA = {
  admission1: "6281265557977",
  admission2: "6285270658777",
  konsultasi: "6285296677298",
  partner: "6282360991507",
} as const

export type WaKey = keyof typeof WA

export function waLink(key: WaKey, text: string) {
  return `https://wa.me/${WA[key]}?text=${encodeURIComponent(text)}`
}

export const CONTACT = {
  address:
    "Jl. Bakaran Batu No. 278 (Simpang Jl. Perbatasan), Lubuk Pakam, Deli Serdang, Sumatera Utara 20511",
  mapsQuery: "Jl. Bakaran Batu No. 278, Lubuk Pakam",
  hours: "[Senin–Sabtu, 09.00–20.00 WIB]",
  email: "[info@thousandsgood.id]",
  form: "https://docs.google.com/forms/d/e/1FAIpQLSejM0Cgs2NNep4meb9GiF8GhmKr91ZRnvQAxOseeLT9sYpnIw/viewform",
  phones: [
    { key: "admission1", label: "Admission 1", display: "0812-6555-7977" },
    { key: "admission2", label: "Admission 2", display: "0852-7065-8777" },
    { key: "konsultasi", label: "Konsultasi Program & Study Abroad", display: "0852-9667-7298" },
    { key: "partner", label: "Kemitraan / Partner", display: "0823-6099-1507" },
  ] satisfies { key: WaKey; label: string; display: string }[],
}

export const SOCIALS = [
  { name: "Instagram", handle: "@thousands_good", url: "https://www.instagram.com/thousands_good" },
  { name: "TikTok", handle: "@thousandsgood", url: "https://www.tiktok.com/@thousandsgood" },
  { name: "YouTube", handle: "@thousandsgood", url: "https://www.youtube.com/@thousandsgood" },
  { name: "Facebook", handle: "thousandsgoodstore", url: "https://web.facebook.com/thousandsgoodstore" },
] as const

export const NAV = [
  { to: "/", label: "Beranda" },
  { to: "/tentang", label: "Tentang Kami" },
  { to: "/program", label: "Program" },
  { to: "/prestasi", label: "Prestasi" },
  { to: "/berita", label: "Berita" },
  { to: "/kegiatan", label: "Kegiatan" },
  { to: "/kontak", label: "Kontak" },
]

export const STATS = [
  { value: 15, suffix: "", label: "Tahun berpengalaman", note: "sejak 2011" },
  { value: 113, suffix: "+", label: "Prestasi siswa", note: "hingga internasional" },
  { value: 100, suffix: "%", label: "Guru lulusan S-1", note: "sebagian S-2 & BNSP" },
  { value: 30, suffix: "+", label: "Partner & kolaborator", note: "resmi" },
]

export const USP: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: GraduationCap, title: "Guru 100% S-1", text: "Sebagian S-2 dan bersertifikat BNSP." },
  { icon: BadgeCheck, title: "IELTS Test Centre resmi", text: "Pertama di Lubuk Pakam." },
  { icon: Globe, title: "Native speaker", text: "British native speaker untuk kelas conversation." },
  { icon: Monitor, title: "Smart Classroom", text: "Smart TV, CCTV, full AC, WiFi fiber." },
  { icon: Users, title: "Parents' Meeting", text: "Progres anak dipantau bersama orang tua." },
]

export type Program = {
  id: "computer" | "english" | "robotics" | "skillup"
  icon: LucideIcon
  name: string
  tagline: string
  description: string
  instagram: string
  items: { icon: LucideIcon; name: string; text: string }[]
}

export const PROGRAMS: Program[] = [
  {
    id: "computer",
    icon: Laptop,
    name: "Computer & AI",
    tagline: "Dari pengguna menjadi pencipta teknologi",
    description: "Anak belajar membuat karya nyata: aplikasi, game, website, konten, hingga AI.",
    instagram: "https://www.instagram.com/computer_thousandsgood",
    items: [
      { icon: Brain, name: "AI Creator", text: "Program AI Creator pertama di Deli Serdang." },
      { icon: Code2, name: "Coding", text: "Logika dan dasar pemrograman." },
      { icon: Gamepad2, name: "3D Game Development", text: "Membuat game 2D dan 3D." },
      { icon: Globe, name: "Web Design & Development", text: "Mendesain dan membangun website." },
      { icon: Film, name: "Motiongraphy", text: "Animasi dan motion graphic." },
      { icon: Palette, name: "Design & Social Media", text: "Desain grafis dan konten." },
      { icon: Megaphone, name: "Digital Marketing", text: "Strategi pemasaran digital." },
      { icon: Workflow, name: "Office Automation", text: "Office dan kolaborasi." },
      { icon: ClipboardList, name: "Google Workspace", text: "Docs, Sheets, Slides." },
    ],
  },
  {
    id: "english",
    icon: BookOpen,
    name: "English & IELTS",
    tagline: "Percaya diri berbahasa Inggris, siap go-international",
    description: "Kurikulum Cambridge, laboratorium bahasa, master teacher, dan native speaker asal Inggris.",
    instagram: "https://www.instagram.com/english_thousandsgood",
    items: [
      { icon: BookOpen, name: "General English", text: "Grammar, vocabulary, reading, dan writing." },
      { icon: MessagesSquare, name: "Conversation Class", text: "100% praktik bersama master teacher." },
      { icon: Globe, name: "Native Speaker", text: "Conversation dengan British native speaker." },
      { icon: GraduationCap, name: "IELTS Preparation", text: "Persiapan studi atau kerja ke luar negeri." },
    ],
  },
  {
    id: "robotics",
    icon: Bot,
    name: "Robotics",
    tagline: "Belajar STEAM lewat robot",
    description: "Merakit, memprogram, dan menguji robot sambil belajar sains, teknologi, dan matematika.",
    instagram: "https://www.instagram.com/robotic_thousandsgood",
    items: [
      { icon: Lightbulb, name: "STEAM Education", text: "Sains, teknologi, seni, dan matematika terpadu." },
      { icon: Bot, name: "LEGO Robotics", text: "Ideal untuk usia dini." },
      { icon: Cpu, name: "Micro:Bit & Arduino", text: "Elektronika dan pemrograman perangkat." },
      { icon: Sparkles, name: "Virtual (VR) Robotics", text: "Simulasi robot secara virtual." },
    ],
  },
  {
    id: "skillup",
    icon: Mic,
    name: "Skill Up",
    tagline: "Berani bicara, siap memimpin",
    description: "Soft skill yang menentukan keberhasilan di sekolah dan dunia kerja.",
    instagram: "https://www.instagram.com/skill_up__thousandsgood",
    items: [
      { icon: Mic, name: "Certified Public Speaking", text: "Pelatihan public speaking bersertifikat." },
      { icon: Users, name: "Leadership Training", text: "Pelatihan kepemimpinan." },
      { icon: MessagesSquare, name: "Communication Skill", text: "Komunikasi efektif." },
    ],
  },
]

export const INTERNATIONAL: { icon: LucideIcon; name: string; text: string }[] = [
  { icon: BadgeCheck, name: "IELTS Test Centre", text: "Test Centre resmi pertama dan satu-satunya di Lubuk Pakam." },
  { icon: BookOpen, name: "IELTS Preparation Class", text: "Persiapan studi atau kerja ke luar negeri." },
  { icon: Globe, name: "Conversation with Native Speaker", text: "Praktik langsung dengan British native speaker." },
  { icon: MessagesSquare, name: "Conversation Class", text: "Kelas full praktik bersama master teacher." },
  { icon: Plane, name: "Study Abroad Consultation", text: "Konsultasi studi/kerja ke luar negeri bersama partner." },
  { icon: GraduationCap, name: "Scholarship Information", text: "Seminar dan workshop tips lolos beasiswa luar negeri." },
]

export const CERTIFICATIONS: { body: string; name: string; text: string }[] = [
  { body: "Cambridge", name: "Student Certification", text: "Ujian dan sertifikasi berstandar Cambridge, Young Learners hingga C2 Proficiency." },
  { body: "Cambridge", name: "Teacher Certification (TKT)", text: "Teaching Knowledge Test untuk guru bahasa Inggris." },
  { body: "BNSP", name: "Sertifikasi Komputer", text: "Content Creator, Administrator, Graphic Designer, dengan gelar non-akademik." },
  { body: "BNSP", name: "Sertifikasi Public Speaking", text: "Public Speaking Coach, Professional Communicator, dengan gelar non-akademik." },
  { body: "Profesional", name: "Education Innovator", text: "Untuk pendidik yang ingin membangun portofolio profesional." },
]

export const CHAMPIONS = [
  { name: "Raphael Tarigan", title: "Juara 1 AI Hackathon 2026", meta: "Institut Teknologi Del · 21–22 Agustus 2026", kind: "gold" },
  { name: "Vincent Caravrisco", title: "Juara 1 Olimpiade Informatika POSMA VII", meta: "SMAN 1 Lubuk Pakam & Disdik Sumut · 1 Februari 2025", kind: "gold" },
  { name: "Joggi Theopilus Purba", title: "Gold Medal & Favorite Poster, NEC 4", meta: "Universitas Nahdlatul Wathan Mataram · Oktober 2025", kind: "gold" },
  { name: "Sabrina Putri Giok Siregar", title: "Beasiswa Nasional BINUS University", meta: "2025", kind: "scholarship" },
  { name: "Ribka Verbina Br Aritonang", title: "Beasiswa Internasional, Taiwan", meta: "National Dong Hwa University · 2025", kind: "scholarship" },
] as const

export type Rank = "gold" | "silver" | "bronze" | "medals" | "scholarship" | "honor" | "nominee"

export type Achievement = { date: string; rank: Rank; rankLabel: string; event: string; organizer: string }

export const ACHIEVEMENTS: Record<string, Achievement[]> = {
  "2026": [
    { date: "27 Agu", rank: "silver", rankLabel: "Juara 2", event: "SCOLA English Level 2 2026", organizer: "International Science Olympiad Contest" },
    { date: "21–22 Agu", rank: "gold", rankLabel: "Juara 1", event: "AI Hackathon 2026", organizer: "Institut Teknologi Del, Sumut" },
    { date: "13 Mei", rank: "bronze", rankLabel: "Juara 3", event: "DB FEST 2026", organizer: "Perguruan Dharma Bakti Lubuk Pakam" },
    { date: "19 Apr", rank: "silver", rankLabel: "Juara 2", event: "Deli Serdang Science Olympiad 2026", organizer: "Dinas Pendidikan Deli Serdang" },
    { date: "23 Feb–10 Mar", rank: "gold", rankLabel: "Juara 1", event: "Creative Video Competition SPMB", organizer: "SMP Dharma Bakti Lubuk Pakam" },
    { date: "27 Feb–1 Mar", rank: "medals", rankLabel: "Emas, Perak, Perunggu", event: "Indonesia Academic Olympiad (IAO) 2026", organizer: "CV. Divya Cahaya Prestasi" },
    { date: "13 Feb", rank: "silver", rankLabel: "Juara 2", event: "Fire Horse CNY Storytelling Competition", organizer: "SD Dharma Bakti Lubuk Pakam" },
    { date: "29 Jan", rank: "gold", rankLabel: "Juara 1", event: "Colorful Bazaar Festival & Competition 2026", organizer: "SMK Nusantara Lubuk Pakam" },
  ],
  "2025": [
    { date: "28 Okt", rank: "bronze", rankLabel: "Juara 3", event: "Creative Video Competition, Sumpah Pemuda", organizer: "SMA Dharma Bakti Lubuk Pakam" },
    { date: "11–13 Okt", rank: "gold", rankLabel: "Gold + 3 kategori", event: "Nusantara Event Competition (NEC) 4", organizer: "Universitas Nahdlatul Wathan Mataram" },
    { date: "15 Mei", rank: "scholarship", rankLabel: "Beasiswa", event: "International Scholarship", organizer: "National Dong Hwa University, Taiwan" },
    { date: "12 Mei", rank: "scholarship", rankLabel: "Beasiswa", event: "National Computer Scholarship", organizer: "BINUS University" },
    { date: "25–27 Apr", rank: "medals", rankLabel: "Emas, Perak, Perunggu", event: "Ajang Sains & Matematika Indonesia (ASMI) 2025", organizer: "CV. Divya Cahaya Prestasi" },
    { date: "27 Apr", rank: "gold", rankLabel: "Finalis Gold", event: "Mentari English Competition (MES) 2025", organizer: "PT Mentari Competition Indonesia" },
    { date: "13 Apr", rank: "bronze", rankLabel: "Juara 3", event: "Pesta Sains Nasional (PSN) 2025", organizer: "POSI" },
    { date: "21–23 Mar", rank: "medals", rankLabel: "Emas, Perak, Perunggu", event: "Smart Science & Social Challenge (SSSC) 2025", organizer: "CV. Divya Cahaya Prestasi" },
    { date: "9 Mar", rank: "bronze", rankLabel: "Juara 3", event: "Kompetisi Sains Nasional (KSN) 2025", organizer: "POSI" },
    { date: "23 Feb", rank: "gold", rankLabel: "Juara 1", event: "Olimpiade Sains Siswa Nasional 3 (OSSN 3)", organizer: "CV. Divya Cahaya Prestasi" },
    { date: "18 Feb", rank: "silver", rankLabel: "Juara 2", event: "Olimpiade Sains Delta Indonesia 3.0 (OSDI 3)", organizer: "CV. Divya Cahaya Prestasi" },
    { date: "1 Feb", rank: "gold", rankLabel: "Juara 1", event: "Olimpiade Informatika POSMA VII 2025", organizer: "SMAN 1 Lubuk Pakam & Disdik Sumut" },
  ],
  "2024": [
    { date: "3 Des", rank: "bronze", rankLabel: "Best Finalist", event: "Poster Competition FTIK 2025", organizer: "Universitas Satya Terra Bhinneka Medan" },
    { date: "31 Agu", rank: "honor", rankLabel: "Top 10", event: "Merdeka Science Olympiad 2024", organizer: "POSI" },
    { date: "21–23 Jun", rank: "medals", rankLabel: "Emas, Perak, Perunggu", event: "Olimpiade Siswa KANHP", organizer: "CV. Divya Cahaya Prestasi" },
    { date: "22 Apr", rank: "bronze", rankLabel: "Juara 3", event: "FLS2N 2024", organizer: "Dinas Pendidikan Deli Serdang" },
    { date: "5–7 Apr", rank: "gold", rankLabel: "Juara 1", event: "Smart Science & Social Challenge (SSSC) 2024", organizer: "CV. Divya Cahaya Prestasi" },
    { date: "12 Mar", rank: "honor", rankLabel: "Harapan 3", event: "MTU Championship", organizer: "Universitas Mahkota Tricom Unggul Medan" },
    { date: "12 Mar", rank: "bronze", rankLabel: "Juara 3", event: "Olimpiade TIME MultiSMART (OPTIMUS) 2024", organizer: "STMIK TIME & MultiSMART Medan" },
    { date: "17 Feb", rank: "silver", rankLabel: "Juara 2", event: "POSMA VI 2024", organizer: "SMAN 1 Lubuk Pakam" },
  ],
  "2023": [
    { date: "28–31 Agu", rank: "gold", rankLabel: "Juara 1", event: "Kompetisi Sains Merdeka Indonesia (KSMI) 2023", organizer: "CV. Divya Cahaya Prestasi" },
    { date: "24 Feb", rank: "honor", rankLabel: "Harapan 3", event: "MTU Expo 2023", organizer: "Universitas Mahkota Tricom Unggul Medan" },
    { date: "13–14 Feb", rank: "silver", rankLabel: "Juara 2", event: "Gebyar Olahraga, Sains & Seni (GOSS) 2023", organizer: "Methodist El-Shadday Perbaungan" },
  ],
  "2021": [
    { date: "[cek tanggal]", rank: "silver", rankLabel: "Juara 2", event: "English Storytelling (tingkat provinsi)", organizer: "Universitas Sumatera Utara" },
  ],
  "2015": [
    { date: "2015", rank: "nominee", rankLabel: "Nominasi", event: "SCTV ISFF 2015, film Mythonia Saga Chapter 1", organizer: "Karya 100+ siswa: ditulis, diperankan, dan diedit sendiri" },
  ],
}

export const INTERNAL_COMPETITIONS = [
  { year: "2011", name: "Rapid Typing" },
  { year: "2012", name: "Graphic Design" },
  { year: "2014", name: "Product Selling" },
  { year: "2015", name: "Visual Effect & Filmmaker" },
  { year: "2016", name: "English Performance" },
  { year: "2017", name: "Clans' War" },
  { year: "2021", name: "English Got Talent" },
  { year: "2021", name: "Android Coding" },
  { year: "2023", name: "3D Design" },
  { year: "2024", name: "2D & 3D Game Creator" },
  { year: "2025", name: "Game Expo & Competition" },
  { year: "2026", name: "Digital Innovator Championship" },
  { year: "2027", name: "SIMLab Design Challenge", upcoming: true },
]

export const TIMELINE = [
  { year: "2011", title: "Guru 100% lulusan S-1", text: "Standar yang kami terapkan sejak hari pertama." },
  { year: "2015", title: "Smart Classroom", text: "Pembelajaran berbasis teknologi pintar, tidak hanya papan tulis dan proyektor." },
  { year: "2015–2017", title: "Trilogi film Mythonia Saga", text: "Film aksi-fantasi karya 100+ siswa. Chapter 1 masuk nominasi SCTV ISFF 2015." },
  { year: "2018", title: "Kelas online", text: "Belajar tetap jalan dari mana saja." },
  { year: "2021", title: "Awal rentetan prestasi", text: "Dimulai dari juara English storytelling tingkat provinsi." },
  { year: "2022", title: "Parents' Meeting", text: "Pertemuan rutin guru, orang tua, dan siswa." },
  { year: "2023", title: "Cabang kedua", text: "Membuka cabang di luar kota." },
  { year: "2024", title: "Native speaker, guru S-2 & BNSP", text: "Kualitas pengajar terus ditingkatkan." },
  { year: "2025", title: "IELTS Test Centre resmi", text: "Yang pertama di Lubuk Pakam." },
  { year: "2026", title: "The Eduverse Alliance", text: "Ekosistem pendidikan berbasis 4 Pilar Pendidikan Berkualitas." },
]

export const PILLARS: { icon: LucideIcon; name: string; subtitle: string; text: string; ig: string }[] = [
  { icon: Presentation, name: "Great Educators", subtitle: "Earth's Mightiest Educators", text: "Tim pendidik 100% S-1, sebagian S-2 dan bersertifikasi nasional.", ig: "the_eduvengers" },
  { icon: Users, name: "Great Parents", subtitle: "The First Heroes at Home", text: "Komunitas orang tua yang terlibat aktif dalam perkembangan anak.", ig: "super_parents101" },
  { icon: Handshake, name: "Great Partners", subtitle: "United to Multiply Impact", text: "30+ pengusaha, profesional, dan inovator dari industri dan pendidikan.", ig: "the__collaborators" },
  { icon: Trophy, name: "Great Students", subtitle: "The Future Leaders", text: "Komunitas juara dengan ratusan prestasi.", ig: "champions_thousandsgood" },
]

export const ACTIVITIES: { icon: LucideIcon; name: string; text: string }[] = [
  { icon: Users, name: "Parents' Meeting", text: "Pertemuan Teacher–Parent–Student untuk membahas perkembangan anak, rutin sejak 2022." },
  { icon: Tv, name: "Smart Learning", text: "Teknologi berpadu dengan kurikulum berstandar internasional." },
  { icon: Trophy, name: "Competition Preparation", text: "Pembinaan intensif untuk siswa yang mengikuti kompetisi luar." },
  { icon: Lightbulb, name: "Workshop", text: "Beragam workshop bersama 30+ partner dan kolaborator." },
  { icon: School, name: "School Collaboration", text: "Ekstrakurikuler dan pelatihan bersama sekolah mitra." },
  { icon: Gamepad2, name: "Education & Game Expo", text: "Pameran karya siswa. Event terbesar: Game Expo 2026, yang pertama di Sumatera Utara." },
  { icon: PartyPopper, name: "Bazaar & Games", text: "Permainan kreatif dan populer di berbagai bazaar." },
  { icon: Handshake, name: "Assemble Night", text: "Malam kolaborasi pengusaha, pendidik, dan inovator." },
  { icon: Swords, name: "Kompetisi Internal", text: "Rutin dan gratis untuk menumbuhkan semangat bersaing." },
  { icon: Award, name: "Awarding Event", text: "Apresiasi untuk siswa yang menuntaskan kompetisi dan tantangan." },
]

export const FACILITIES: { icon: LucideIcon; name: string; text: string }[] = [
  { icon: Tv, name: "Smart Classroom", text: "Smart TV dan Smart Learning Ecosystem di setiap kelas, sejak 2015." },
  { icon: Headphones, name: "Lab Bahasa", text: "Mendukung latihan listening di kelas English." },
  { icon: BookOpen, name: "Kurikulum Cambridge", text: "Teruji, lengkap dengan sumber belajar." },
  { icon: Swords, name: "Clans' War", text: "Gamifikasi antar-klan yang membuat siswa aktif berinteraksi." },
  { icon: Camera, name: "CCTV", text: "2 kamera CCTV di setiap kelas." },
  { icon: Wifi, name: "WiFi Fiber Optic", text: "Internet cepat untuk belajar." },
  { icon: Snowflake, name: "Full AC", text: "Setiap ruang belajar ber-AC." },
  { icon: ShieldCheck, name: "Aman & nyaman", text: "Kenyamanan dan keamanan anak adalah prioritas." },
]

export const FINALS = [
  { name: "English Cambridge Olympiad", level: "Secondary Level", date: "2026-10-19T15:30:00+07:00", label: "Senin–Selasa, 19–20 Oktober 2026", time: "15.30 & 18.00 WIB" },
  { name: "English Got Talent 2026", level: "Olympian Level", date: "2026-10-31T09:00:00+07:00", label: "Sabtu, 31 Oktober 2026", time: "Waktu menyusul" },
  { name: "Digital Innovator Championship", level: "Creator Level", date: "2026-11-02T09:00:00+07:00", label: "Pitching 2–6 November 2026", time: "Waktu menyusul" },
]

export const FINALISTS = {
  "Digital Innovator Championship": [
    "Rianto Dionaldo Sitorus", "Richie Naldo", "Calix Humberto", "Balqis Shakira", "Jastyn Aliando Siallagan",
    "Florence", "Edward Senjaya", "Sharena Abigyel Pakpahan", "Jacksen Hartanto", "Marvel Sutanto",
    "Jeremi Nicholaz Sihombing", "Gita Elisya Naiborhu", "Boaz Barpli Siregar", "Edelyn Senjaya", "Vincent Valeryan Cok",
    "Ryan Kievarro", "Jayden Livio", "Kinsey Yikinawa", "Claire Christabelle Jovellyn", "Gracyella Yumica Cen",
    "Clarissa Valencia Ernestine", "Caroline", "William Salim", "Fredo Feroz", "Rycia Ezvica",
    "Ribka Nathania Limbong", "Angeline Chen", "M. Ardan Fadilla", "Doares Gultom", "Novita Koresh Sinaga",
    "Rehan Alfareza", "Claire Chen", "Eretria Ellesedil Zhou", "Graciel Henlin", "Rafa Hutomo Sari",
  ],
  "English Got Talent 2026": [
    "Clarissa Emeline", "Yosafat Fedro Jansen Tambun", "Jennifer Tan", "Febyola Sihaloho", "Ardel Diovana Tarigan",
    "Aurumy Yikinawa", "Samuel Panjaitan", "Maria Louse Limbong", "Regina Sean Sitanggang", "Azkia Noya",
    "Gracyella Yumica Cen", "Defanya Zhafirah Kurniadi", "Fredo Feroz", "M. Ardan Fadilla", "Jovan",
    "Jelita Epiyanti Br. Situmeang", "Marsya Amora Saragih", "Valencia Wu", "Puanito Parorezeki Panjaitan", "Jeremi Nicholaz Sihombing",
    "Semar Syahputra", "Jein Ernest Yoserva Purba", "Eretria Ellesedil Zhou", "Silvia Tasmira Napitupulu", "Boris Everest",
    "Vishera Everest", "Stewart Alvaro", "Michelle Yemima Br. Ritonga", "Roris Angelica Parasian Sitompul", "Michelyn Maharani Simanjuntak",
    "Christina Berkarya Br. Simbolon", "Steve Alvaro", "Eskana Jouito Parhusip", "Sharena Abigyel Pakpahan", "Jason Thedesco",
    "Crystal Emilia Darby",
  ],
}

export const ENTRY_CHAMPIONS = [
  {
    name: "English Spelling Bee",
    level: "Entry Level",
    podium: [
      { name: "Eryuxion Ellesedil Zhou", score: 90 },
      { name: "Jahara Nadhifa", score: 80 },
      { name: "Timothy E. Simatupang", score: 60 },
    ],
  },
  {
    name: "English Snake Words",
    level: "Entry Level",
    podium: [
      { name: "Zhafira Aulia Syahfani", score: 190 },
      { name: "Aisyafiah Nabila", score: 160 },
      { name: "Muhammad Rasya Alfarizi", score: 150 },
    ],
  },
]

export const MARQUEE = [
  "AI Creator", "Coding", "IELTS", "Robotics", "Public Speaking", "Game Development",
  "Cambridge", "Native Speaker", "Arduino", "Digital Marketing", "BNSP", "Study Abroad",
]
