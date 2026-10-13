import { LinkButton, WaButton } from "@/components/site/Cta"
import { CtaBand } from "@/components/site/CtaBand"
import { PageHero } from "@/components/site/PageHero"
import { DraftNote, GlowCard, IconBubble, Reveal, Section, SectionHeading } from "@/components/site/Section"
import { ACTIVITIES, FACILITIES } from "@/data/site"

export default function Activities() {
  return (
    <>
      <PageHero
        eyebrow="Beyond Class"
        title="Belajar tidak berhenti di dalam kelas"
        lead="Kegiatan inspiratif yang membangun karakter dan daya saing, di fasilitas yang mengutamakan kenyamanan dan keamanan anak."
      />

      <Section>
        <SectionHeading eyebrow="Inspiring Activities" title="Kegiatan inspiratif" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((a, i) => (
            <Reveal key={a.name} delay={(i % 3) * 0.08} className="h-full">
              <GlowCard className="p-0">
                <div className="relative grid aspect-[16/9] place-items-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-brand-blue-dark to-brand-blue">
                  <a.icon className="size-14 text-white/90" strokeWidth={1.5} />
                  <span className="absolute right-3 bottom-2 text-xs text-white/60">[ganti dengan foto]</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{a.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sky">
        <SectionHeading eyebrow="First Class Facilities" title="Kenyamanan & keamanan anak adalah prioritas" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.name} delay={(i % 4) * 0.06} className="h-full">
              <div className="h-full rounded-2xl border bg-white p-5 transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-md">
                <IconBubble tone={i % 3 === 2 ? "red" : "blue"}><f.icon /></IconBubble>
                <h3 className="font-bold">{f.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <DraftNote>Bila tersedia, tawarkan "trial class gratis". Ajakan ini biasanya lebih efektif daripada langsung "Daftar".</DraftNote>
      </Section>

      <CtaBand title="Ingin melihat langsung?" text="Jadwalkan kunjungan dan trial class di centre kami.">
        <WaButton variant="white" text="Halo, saya ingin menjadwalkan kunjungan / trial class.">Jadwalkan Kunjungan</WaButton>
        <LinkButton to="/program" variant="outline-light">Lihat Program</LinkButton>
      </CtaBand>
    </>
  )
}
