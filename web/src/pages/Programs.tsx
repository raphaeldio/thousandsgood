import { useSearchParams } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { Building2, CalendarDays, Layers, Users } from "lucide-react"
import { SiInstagram as Instagram } from "react-icons/si"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LinkButton, WaButton } from "@/components/site/Cta"
import { CtaBand } from "@/components/site/CtaBand"
import { PageHero } from "@/components/site/PageHero"
import { DraftNote, GlowCard, IconBubble, Reveal, Section, SectionHeading } from "@/components/site/Section"
import { CERTIFICATIONS, INTERNATIONAL, PROGRAMS, type Program } from "@/data/site"

export default function Programs() {
  const [params, setParams] = useSearchParams()
  const active = PROGRAMS.find((p) => p.id === params.get("tab")) ?? PROGRAMS[0]

  return (
    <>
      <PageHero
        eyebrow="Program"
        title="Pilih jalur juara anak Anda"
        lead="Empat program inti, kelas go-international, dan sertifikasi resmi, didukung 30+ partner dan kolaborator."
      />

      <Section>
        <DraftNote>
          Situs lama belum mencantumkan usia/kelas peserta, jadwal, durasi, level, dan kisaran biaya. Info ini paling sering ditanyakan
          orang tua. Lengkapi bagian "Untuk", "Jadwal", dan "Level", atau minimal tulis "mulai dari Rp ...".
        </DraftNote>

        <Tabs value={active.id} onValueChange={(v) => setParams({ tab: v }, { replace: true, preventScrollReset: true })}>
          <TabsList className="mb-10 h-auto group-data-horizontal/tabs:h-auto w-full flex-wrap justify-start gap-2 rounded-2xl bg-brand-sky/70 p-2">
            {PROGRAMS.map((p) => (
              <TabsTrigger
                key={p.id}
                value={p.id}
                className="h-11 flex-1 gap-2 rounded-xl px-4 text-sm font-bold data-[state=active]:bg-brand-blue-dark data-[state=active]:text-white sm:text-base"
              >
                <p.icon className="size-5" /> {p.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProgramPanel program={active} />
          </motion.div>
        </AnimatePresence>
      </Section>

      <Section tone="blue">
        <SectionHeading light eyebrow="Go International" title="Program internasional" lead="Tes IELTS resmi, persiapan, dan pendampingan studi ke luar negeri." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTERNATIONAL.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                <it.icon className="mb-3 size-8 text-white" />
                <h3 className="text-lg font-bold text-white">{it.name}</h3>
                <p className="mt-1 text-sm text-sky-100">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="sertifikasi">
        <SectionHeading eyebrow="Sertifikasi" title="Untuk siswa, guru, dan profesional" lead="Tersedia juga untuk sekolah dan perusahaan." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06} className="h-full">
              <GlowCard>
                <Badge className="mb-3 rounded-full bg-red-50 font-bold text-brand-red">{c.body}</Badge>
                <h3 className="text-lg font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              </GlowCard>
            </Reveal>
          ))}
          <Reveal delay={0.3} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-brand-sky p-6">
              <div>
                <IconBubble><Building2 /></IconBubble>
                <h3 className="text-lg font-bold">Untuk sekolah & perusahaan</h3>
                <p className="mt-2 text-sm text-muted-foreground">Sertifikasi kolektif untuk guru atau karyawan.</p>
              </div>
              <div className="mt-5">
                <WaButton to="admission2" variant="blue" text="Halo, saya ingin info sertifikasi untuk sekolah/perusahaan kami.">
                  Hubungi Tim
                </WaButton>
              </div>
            </div>
          </Reveal>
        </div>
        <DraftNote>
          Pastikan status lembaga untuk sertifikasi BNSP (LSP mitra/TUK) dan Cambridge (Authorised/Preparation Centre), lalu cantumkan
          logo resminya.
        </DraftNote>
      </Section>

      <CtaBand title="Bingung pilih program?" text="Ceritakan usia dan minat anak, kami bantu rekomendasikan.">
        <WaButton variant="white" to="konsultasi" text="Halo, saya ingin konsultasi memilih program. Anak saya usia ..., minat ...">
          Konsultasi Gratis
        </WaButton>
      </CtaBand>
    </>
  )
}

function ProgramPanel({ program }: { program: Program }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <IconBubble tone="red"><program.icon /></IconBubble>
        <h2 className="text-3xl font-extrabold sm:text-4xl">{program.tagline}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{program.description}</p>
        <dl className="mt-6 grid gap-2 text-sm">
          {[
            { icon: Users, label: "Untuk", value: "[usia / kelas]" },
            { icon: CalendarDays, label: "Jadwal", value: "[hari / jam]" },
            { icon: Layers, label: "Level", value: "[Basic – Advanced]" },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3 rounded-xl bg-muted px-4 py-2.5">
              <row.icon className="size-4 text-brand-blue-dark" />
              <dt className="w-16 font-semibold text-brand-navy">{row.label}</dt>
              <dd className="text-muted-foreground">{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <WaButton text={`Halo, saya ingin info program ${program.name}.`}>Tanya Program</WaButton>
          <LinkButton to={program.instagram}>
            <Instagram /> Lihat Karya Siswa
          </LinkButton>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {program.items.map((it) => (
          <GlowCard key={it.name} className="p-5">
            <it.icon className="mb-3 size-7 text-brand-blue" />
            <h3 className="font-bold">{it.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.text}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  )
}
