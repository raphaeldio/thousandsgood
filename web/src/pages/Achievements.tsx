import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Award, Clapperboard, GraduationCap, Medal, Play, Star, Trophy } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import CountUp from "@/components/CountUp"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LinkButton, WaButton } from "@/components/site/Cta"
import { CtaBand } from "@/components/site/CtaBand"
import { PageHero } from "@/components/site/PageHero"
import { DraftNote, Reveal, Section, SectionHeading } from "@/components/site/Section"
import { ACHIEVEMENTS, INTERNAL_COMPETITIONS, type Rank } from "@/data/site"
import { cn } from "@/lib/utils"

const RANK_STYLE: Record<Rank, { icon: LucideIcon; className: string }> = {
  gold: { icon: Trophy, className: "bg-amber-50 text-amber-700 border-amber-200" },
  silver: { icon: Medal, className: "bg-slate-100 text-slate-600 border-slate-200" },
  bronze: { icon: Medal, className: "bg-orange-50 text-orange-700 border-orange-200" },
  medals: { icon: Award, className: "bg-brand-sky text-brand-blue-dark border-sky-200" },
  scholarship: { icon: GraduationCap, className: "bg-brand-sky text-brand-blue-dark border-sky-200" },
  honor: { icon: Star, className: "bg-muted text-muted-foreground border-border" },
  nominee: { icon: Clapperboard, className: "bg-red-50 text-brand-red border-red-200" },
}

const YEARS = Object.keys(ACHIEVEMENTS).sort((a, b) => Number(b) - Number(a))
const ALL = "semua"

export default function Achievements() {
  const [year, setYear] = useState(ALL)

  const rows = useMemo(
    () => (year === ALL ? YEARS.flatMap((y) => ACHIEVEMENTS[y].map((a) => ({ ...a, year: y }))) : ACHIEVEMENTS[year].map((a) => ({ ...a, year }))),
    [year]
  )
  const total = YEARS.reduce((n, y) => n + ACHIEVEMENTS[y].length, 0)
  const firsts = YEARS.reduce((n, y) => n + ACHIEVEMENTS[y].filter((a) => a.rank === "gold").length, 0)

  return (
    <>
      <PageHero
        eyebrow="Prestasi"
        title="Buah dari kerja keras"
        lead="Dari nominasi film tahun 2015 hingga juara AI Hackathon 2026, inilah perjalanan prestasi siswa kami di bidang AI, coding, desain, English, sains, dan public speaking."
      >
        <LinkButton to="https://www.youtube.com/watch?v=s8tAlu_Izzg" variant="white">
          <Play /> Tonton Video Prestasi
        </LinkButton>
        <LinkButton to="https://www.instagram.com/champions_thousandsgood" variant="outline-light">
          @champions_thousandsgood
        </LinkButton>
      </PageHero>

      <Section>
        <div className="mb-12 grid grid-cols-3 gap-3 sm:gap-5">
          {[
            { n: total, label: "Prestasi eksternal tercatat" },
            { n: firsts, label: "Juara 1 / Gold" },
            { n: INTERNAL_COMPETITIONS.length - 1, label: "Kompetisi internal" },
          ].map((s) => (
            <Reveal key={s.label}>
              <div className="rounded-2xl bg-brand-sky/70 p-4 text-center sm:p-6">
                <CountUp to={s.n} className="text-3xl font-extrabold text-brand-blue-dark sm:text-5xl" />
                <p className="mt-1 text-xs font-semibold text-brand-navy sm:text-sm">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionHeading eyebrow="Prestasi Eksternal" title="Kompetisi luar" />
        <DraftNote>
          Beberapa data perlu dicek: (1) "Olimpiade Siswa KANHP 2025" bertanggal Juni 2024. (2) English Storytelling USU tercatat di
          tahun 2021 tetapi bertanggal 24 Februari 2023. (3) Halaman lama tidak mencantumkan nama siswa; tambahkan nama (dengan izin
          orang tua) agar lebih kredibel.
        </DraftNote>

        <Tabs value={year} onValueChange={setYear}>
          <TabsList className="mb-6 h-auto group-data-horizontal/tabs:h-auto flex-wrap justify-start gap-1.5 rounded-2xl bg-brand-sky/70 p-1.5">
            {[ALL, ...YEARS].map((y) => (
              <TabsTrigger
                key={y}
                value={y}
                className="h-9 rounded-xl px-4 font-bold capitalize data-[state=active]:bg-brand-blue-dark data-[state=active]:text-white"
              >
                {y}
                <span className="ml-1.5 text-xs opacity-70">{y === ALL ? total : ACHIEVEMENTS[y].length}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="overflow-hidden rounded-2xl border bg-white">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/60 hover:bg-muted/60">
                <TableHead className="w-28 font-bold text-brand-navy">Tanggal</TableHead>
                <TableHead className="font-bold text-brand-navy">Peringkat</TableHead>
                <TableHead className="font-bold text-brand-navy">Kompetisi</TableHead>
                <TableHead className="hidden font-bold text-brand-navy md:table-cell">Penyelenggara</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence initial={false} mode="popLayout">
                {rows.map((a, i) => {
                  const style = RANK_STYLE[a.rank]
                  return (
                    <motion.tr
                      key={`${a.year}-${a.event}-${a.date}`}
                      layout
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0, transition: { delay: Math.min(i * 0.02, 0.4) } }}
                      exit={{ opacity: 0 }}
                      className="border-b transition-colors last:border-0 hover:bg-brand-sky/40"
                    >
                      <TableCell className="align-top text-muted-foreground">
                        {a.date}
                        {year === ALL && <span className="block text-xs font-bold text-brand-blue-dark">{a.year}</span>}
                      </TableCell>
                      <TableCell className="align-top">
                        <Badge variant="outline" className={cn("gap-1 rounded-full font-bold", style.className)}>
                          <style.icon className="size-3.5" /> {a.rankLabel}
                        </Badge>
                      </TableCell>
                      <TableCell className="align-top font-semibold whitespace-normal text-brand-navy">
                        {a.event}
                        <span className="block text-xs font-normal text-muted-foreground md:hidden">{a.organizer}</span>
                      </TableCell>
                      <TableCell className="hidden align-top whitespace-normal text-muted-foreground md:table-cell">{a.organizer}</TableCell>
                    </motion.tr>
                  )
                })}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>
      </Section>

      <Section tone="sky">
        <SectionHeading
          eyebrow="Kompetisi Internal"
          title="Arena latihan para juara, gratis untuk siswa"
          lead="Sejak 2011 kami rutin mengadakan kompetisi internal untuk menumbuhkan daya saing."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {INTERNAL_COMPETITIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.03}>
              <div
                className={cn(
                  "h-full rounded-2xl border p-4 transition hover:-translate-y-1 hover:shadow-md",
                  c.upcoming ? "border-brand-red bg-brand-red text-white" : "bg-white"
                )}
              >
                <span className={cn("text-xs font-extrabold", c.upcoming ? "text-red-100" : "text-brand-red")}>
                  {c.upcoming ? `Segera · ${c.year}` : c.year}
                </span>
                <p className={cn("mt-1 font-bold", c.upcoming ? "text-white" : "text-brand-navy")}>{c.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <DraftNote>Tahun Game Expo tidak konsisten: daftar internal menulis 2025, sedangkan Beranda dan Kegiatan menulis 2026.</DraftNote>
      </Section>

      <CtaBand title="Anak Anda berikutnya di daftar ini" text="Kami siapkan pembinaan lomba sejak dini.">
        <WaButton variant="white" text="Halo, saya ingin anak saya ikut pembinaan lomba.">Daftar Sekarang</WaButton>
        <LinkButton to="/kegiatan" variant="outline-light">Lihat Kegiatan</LinkButton>
      </CtaBand>
    </>
  )
}
