import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { ArrowRight, Award, GraduationCap, Medal, Quote, Trophy } from "lucide-react"
import CountUp from "@/components/CountUp"
import RotatingText from "@/components/RotatingText"
import ScrollVelocity from "@/components/ScrollVelocity"
import ShinyText from "@/components/ShinyText"
import SplitText from "@/components/SplitText"
import { LogoBadge } from "@/components/brand/Logo"
import { Badge } from "@/components/ui/badge"
import { LinkButton, WaButton } from "@/components/site/Cta"
import { CtaBand } from "@/components/site/CtaBand"
import { BrandAurora } from "@/components/site/PageHero"
import { Container, DraftNote, GlowCard, IconBubble, Reveal, Section, SectionHeading } from "@/components/site/Section"
import { CHAMPIONS, INTERNATIONAL, MARQUEE, PROGRAMS, STATS, TIMELINE, USP } from "@/data/site"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />
      <Programs />
      <GoInternational />
      <Champions />
      <Pioneer />
      <Testimonials />
      <CtaBand title="Siap jadi juara berikutnya?" text="Konsultasikan kebutuhan anak Anda. Gratis, langsung lewat WhatsApp.">
        <WaButton variant="white" text="Halo Thousands Good, saya ingin konsultasi program untuk anak saya.">Chat Admission</WaButton>
        <LinkButton to="/kontak" variant="outline-light">Kunjungi Centre</LinkButton>
      </CtaBand>
    </>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue-dark to-brand-blue pb-36 text-white">
      <BrandAurora />
      <Container className="grid items-center gap-12 pt-16 sm:pt-24 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="min-w-0">
          <Badge className="mb-6 h-auto max-w-full shrink gap-2 rounded-full text-left whitespace-normal border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
            <Trophy className="size-4 text-brand-yellow" />
            <ShinyText text="Kursus dengan prestasi terbanyak di Deli Serdang" color="#e0f2fe" shineColor="#ffffff" speed={3} />
          </Badge>
          <SplitText
            text="Juara tidak dilahirkan, mereka dibentuk."
            tag="h1"
            splitType="words"
            delay={70}
            duration={0.9}
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
            className="pb-2 text-4xl leading-[1.1] font-extrabold text-white sm:text-6xl lg:text-7xl"
          />
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-sky-100 sm:text-xl">
            <span>Kursus</span>
            <RotatingText
              texts={["AI & Coding", "English & IELTS", "Robotics", "Public Speaking"]}
              mainClassName="overflow-hidden rounded-lg bg-brand-red px-3 py-1 font-bold text-white"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2400}
            />
            <span>di Lubuk Pakam sejak 2011.</span>
          </div>
          <p className="mt-4 max-w-xl text-sky-100/90">
            Kami membentuk mental, mindset, dan daya saing anak, bukan sekadar mengajar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WaButton text="Halo Thousands Good, saya ingin mendaftar. Anak saya kelas ..., tertarik program ...">Daftar Sekarang</WaButton>
            <LinkButton to="/program" variant="outline-light">
              Lihat Semua Program <ArrowRight />
            </LinkButton>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative mx-auto hidden lg:block"
        >
          <div className="absolute inset-6 rounded-full bg-white/30 blur-3xl" />
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <LogoBadge className="relative size-80 drop-shadow-2xl" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

function Stats() {
  return (
    <Container className="relative z-10 -mt-24">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="h-full rounded-2xl border bg-white p-5 shadow-xl shadow-brand-navy/5 sm:p-6">
              <div className="text-4xl font-extrabold text-brand-blue-dark sm:text-5xl">
                <CountUp to={s.value} duration={2} />
                <span className="text-brand-red">{s.suffix}</span>
              </div>
              <p className="mt-2 font-semibold text-brand-navy">{s.label}</p>
              <p className="text-sm text-muted-foreground">{s.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-3 text-right text-xs text-muted-foreground">Data per 31 Agustus 2026</p>
      <DraftNote>
        Samakan angka prestasi di semua halaman. Situs lama menulis "113" (Beranda), "50+ hingga 2025" dan "ratusan"
        (Prestasi). Pilih satu angka yang bisa dibuktikan.
      </DraftNote>
    </Container>
  )
}

function Marquee() {
  return (
    <div className="my-10 border-y bg-brand-sky/50 py-5 text-brand-blue-dark">
      <ScrollVelocity
        texts={[
          <span key="a" className="flex items-center">
            {MARQUEE.map((m) => (
              <span key={m} className="flex items-center px-6 text-2xl font-extrabold sm:text-3xl">
                {m}
                <span className="ml-12 inline-block size-3 rounded-full bg-brand-red" />
              </span>
            ))}
          </span>,
        ]}
        velocity={40}
        numCopies={4}
      />
    </div>
  )
}

function Programs() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Program Unggulan"
        title="Empat jalur untuk menyiapkan anak menghadapi masa depan"
        lead="Dari AI Creator hingga IELTS, setiap program dirancang dengan kurikulum terstruktur dan target prestasi yang jelas."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROGRAMS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08} className="h-full">
            <Link to={`/program?tab=${p.id}`} className="group block h-full">
              <GlowCard>
                <IconBubble><p.icon /></IconBubble>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.items.slice(0, 4).map((x) => x.name).join(", ")}.</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-blue-dark">
                  Selengkapnya <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </GlowCard>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {USP.map((u, i) => (
          <Reveal key={u.title} delay={i * 0.06}>
            <div className="flex items-start gap-3 rounded-2xl bg-brand-sky/60 p-4">
              <u.icon className="mt-0.5 size-5 shrink-0 text-brand-red" />
              <div>
                <p className="text-sm font-bold text-brand-navy">{u.title}</p>
                <p className="text-xs text-muted-foreground">{u.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function GoInternational() {
  return (
    <Section tone="blue">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            light
            eyebrow="Go International"
            title="IELTS Test Centre resmi pertama di Lubuk Pakam"
            lead="Tes, persiapan, sampai konsultasi studi ke luar negeri, semuanya di satu tempat tanpa perlu ke Medan."
          />
          <WaButton variant="white" to="konsultasi" text="Halo, saya ingin konsultasi IELTS / studi ke luar negeri.">
            Konsultasi IELTS Gratis
          </WaButton>
          <DraftNote>Tambahkan logo/tautan verifikasi dari IDP atau British Council sebagai bukti status Test Centre resmi.</DraftNote>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {INTERNATIONAL.slice(0, 4).map((it, i) => (
            <Reveal key={it.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15">
                <it.icon className="mb-3 size-7 text-white" />
                <h3 className="font-bold text-white">{it.name}</h3>
                <p className="mt-1 text-sm text-sky-100">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Champions() {
  return (
    <Section>
      <SectionHeading eyebrow="Hall of Champions" title="Prestasi terbaru siswa kami" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CHAMPIONS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.07} className="h-full">
            <GlowCard>
              <div className="mb-5 grid aspect-[4/3] place-items-center rounded-xl bg-gradient-to-br from-brand-sky to-white text-sm font-semibold text-brand-blue-dark/60">
                [Foto {c.name.split(" ")[0]}]
              </div>
              <div className="flex items-center gap-2">
                {c.kind === "gold" ? <Medal className="size-5 text-brand-yellow" /> : <GraduationCap className="size-5 text-brand-blue" />}
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red">{c.kind === "gold" ? "Juara" : "Beasiswa"}</span>
              </div>
              <h3 className="mt-2 text-lg font-bold">{c.title}</h3>
              <p className="font-semibold text-brand-blue-dark">{c.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.meta}</p>
            </GlowCard>
          </Reveal>
        ))}
        <Reveal delay={0.35} className="h-full">
          <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-brand-red p-8 text-center text-white">
            <Award className="mb-3 size-12" />
            <h3 className="text-2xl font-extrabold text-white">Dan masih banyak lagi</h3>
            <p className="mt-2 text-red-50">Olimpiade sains, storytelling, spelling bee, desain, coding, dan film.</p>
            <LinkButton to="/prestasi" variant="white">Lihat Semua Prestasi</LinkButton>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

function Pioneer() {
  const items = TIMELINE.filter((t) => ["2011", "2015", "2018", "2022", "2025", "2026"].includes(t.year))
  return (
    <Section tone="sky">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Pelopor & Inovator"
            title="Selalu selangkah lebih dulu"
            lead="Banyak hal yang kini dianggap standar sudah kami mulai bertahun-tahun lalu."
          />
          <LinkButton to="/tentang">Kenali Kami <ArrowRight /></LinkButton>
        </div>
        <ol className="relative space-y-6 border-l-2 border-brand-blue/30 pl-8">
          {items.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute top-1.5 -left-[41px] size-4 rounded-full border-4 border-white bg-brand-red ring-2 ring-brand-red" />
                <span className="text-sm font-extrabold text-brand-blue-dark">{t.year}</span>
                <h3 className="text-lg font-bold">{t.title}</h3>
                <p className="text-muted-foreground">{t.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}

function Testimonials() {
  return (
    <Section>
      <SectionHeading center eyebrow="Testimoni" title="Kata orang tua hebat" />
      <DraftNote>
        Testimoni asli saat ini hanya berupa gambar di Instagram. Salin 3 kutipan terbaik sebagai teks di sini (dengan izin orang
        tua) agar terbaca Google.
      </DraftNote>
      <div className="grid gap-5 md:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <Reveal key={n} delay={n * 0.08} className="h-full">
            <GlowCard>
              <Quote className="mb-4 size-8 text-brand-red" />
              <p className="text-brand-navy">[Kutipan testimoni orang tua #{n}]</p>
              <p className="mt-5 font-bold text-brand-blue-dark">[Nama orang tua]</p>
              <p className="text-sm text-muted-foreground">Orang tua siswa program [nama program]</p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center">
        <a href="https://www.instagram.com/thousands_good" target="_blank" rel="noopener" className="font-semibold text-brand-blue-dark hover:underline">
          Lihat semua testimoni di Instagram
        </a>
      </p>
    </Section>
  )
}
