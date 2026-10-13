import { useEffect, useMemo, useState } from "react"
import { CalendarClock, Crown, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LinkButton } from "@/components/site/Cta"
import { CtaBand } from "@/components/site/CtaBand"
import { PageHero } from "@/components/site/PageHero"
import { DraftNote, GlowCard, Reveal, Section, SectionHeading } from "@/components/site/Section"
import { ENTRY_CHAMPIONS, FINALISTS, FINALS } from "@/data/site"
import { cn } from "@/lib/utils"

function useNow(intervalMs = 1000) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])
  return now
}

function Countdown({ target }: { target: string }) {
  const now = useNow()
  const diff = new Date(target).getTime() - now
  if (diff <= 0) return <p className="font-bold text-brand-red">Sedang / sudah berlangsung</p>
  const parts = [
    { v: Math.floor(diff / 86_400_000), l: "hari" },
    { v: Math.floor((diff / 3_600_000) % 24), l: "jam" },
    { v: Math.floor((diff / 60_000) % 60), l: "menit" },
    { v: Math.floor((diff / 1000) % 60), l: "detik" },
  ]
  return (
    <div className="grid grid-cols-4 gap-2" aria-live="off">
      {parts.map((p) => (
        <div key={p.l} className="rounded-xl bg-brand-blue-dark py-2 text-center text-white">
          <span className="block text-2xl font-extrabold tabular-nums">{String(p.v).padStart(2, "0")}</span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-sky-100">{p.l}</span>
        </div>
      ))}
    </div>
  )
}

type Competition = keyof typeof FINALISTS
const COMPETITIONS = Object.keys(FINALISTS) as Competition[]

export default function News() {
  const [competition, setCompetition] = useState<Competition>(COMPETITIONS[0])
  const [query, setQuery] = useState("")

  const names = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = FINALISTS[competition].map((name, i) => ({ name, no: i + 1, match: !q || name.toLowerCase().includes(q) }))
    // Matches first so a parent sees their child's name without scrolling
    return q ? [...list.filter((n) => n.match), ...list.filter((n) => !n.match)] : list
  }, [competition, query])
  const matches = names.filter((n) => n.match).length

  return (
    <>
      <PageHero
        eyebrow="Berita · Oktober 2026"
        title="Yay! You're going to the final."
        lead="Selamat kepada siswa yang lolos babak eliminasi kompetisi internal Juli–September 2026: English Got Talent, Digital Innovator Championship, English Cambridge Olympiad, English Spelling Bee, dan English Snake Words."
      />

      <Section>
        <SectionHeading eyebrow="Jadwal Final" title="Hitung mundur menuju final" />
        <div className="grid gap-5 md:grid-cols-3">
          {FINALS.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.08} className="h-full">
              <GlowCard>
                <Badge className="mb-3 rounded-full bg-red-50 font-bold text-brand-red">{f.level}</Badge>
                <h3 className="text-xl font-bold">{f.name}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-brand-blue-dark">
                  <CalendarClock className="size-4" /> {f.label}
                </p>
                <p className="mb-5 text-sm text-muted-foreground">{f.time}</p>
                <Countdown target={f.date} />
              </GlowCard>
            </Reveal>
          ))}
        </div>
        <DraftNote>
          Sebaiknya satu pengumuman menjadi satu artikel tersendiri supaya arsip berita tidak hilang saat diperbarui. Untuk daftar nama
          anak di bawah umur, pastikan sudah ada izin orang tua, atau tampilkan nama depan dan inisial saja.
        </DraftNote>
      </Section>

      <Section tone="sky">
        <SectionHeading eyebrow="Entry Level" title="Juara Spelling Bee & Snake Words" />
        <div className="grid gap-6 md:grid-cols-2">
          {ENTRY_CHAMPIONS.map((c) => (
            <Reveal key={c.name}>
              <div className="rounded-2xl border bg-white p-6">
                <h3 className="text-xl font-bold">{c.name}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{c.level}</p>
                {/* Podium: 2nd, 1st, 3rd */}
                <div className="grid grid-cols-3 items-end gap-2 text-center">
                  {[1, 0, 2].map((idx) => {
                    const p = c.podium[idx]
                    const heights = ["h-32", "h-24", "h-16"]
                    const colors = ["bg-brand-red", "bg-brand-blue", "bg-brand-blue/60"]
                    return (
                      <div key={p.name}>
                        {idx === 0 && <Crown className="mx-auto mb-1 size-6 text-brand-yellow" />}
                        <p className="text-xs font-bold leading-tight text-brand-navy sm:text-sm">{p.name}</p>
                        <p className="mb-2 text-xs text-muted-foreground">{p.score} poin</p>
                        <div className={cn("grid place-items-center rounded-t-xl text-2xl font-extrabold text-white", heights[idx], colors[idx])}>
                          {idx + 1}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Daftar Finalis" title="Cari nama finalis" />
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Tabs value={competition} onValueChange={(v) => setCompetition(v as Competition)}>
            <TabsList className="h-auto group-data-horizontal/tabs:h-auto flex-wrap gap-1.5 rounded-2xl bg-brand-sky/70 p-1.5">
              {COMPETITIONS.map((c) => (
                <TabsTrigger key={c} value={c} className="h-10 rounded-xl px-4 font-bold data-[state=active]:bg-brand-blue-dark data-[state=active]:text-white">
                  {c} <span className="ml-1 text-xs opacity-70">{FINALISTS[c].length}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <div className="relative w-full lg:w-80">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ketik nama anak Anda..." className="h-11 rounded-xl pl-10" aria-label="Cari nama finalis" />
          </div>
        </div>
        {query && (
          <p className="mb-4 text-sm font-semibold text-brand-blue-dark">
            {matches > 0 ? `${matches} nama ditemukan. Selamat!` : "Nama tidak ditemukan di daftar ini. Coba kompetisi lainnya."}
          </p>
        )}
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {names.map((n) => (
            <li
              key={n.name}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-4 py-2.5 text-sm transition-all duration-300",
                n.match ? "bg-white" : "scale-95 opacity-25",
                query && n.match && "border-brand-blue bg-brand-sky font-bold"
              )}
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-sky text-xs font-bold text-brand-blue-dark">{n.no}</span>
              <span className="text-brand-navy">{n.name}</span>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand title="See you at the final!" text="Para finalis, persiapkan penampilan terbaik kalian.">
        <LinkButton to="/prestasi" variant="white">Lihat Prestasi</LinkButton>
        <LinkButton to="/kegiatan" variant="outline-light">Kegiatan Lainnya</LinkButton>
      </CtaBand>
    </>
  )
}
