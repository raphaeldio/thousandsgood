import { SiInstagram as Instagram } from "react-icons/si"
import { LogoBadge } from "@/components/brand/Logo"
import GradientText from "@/components/GradientText"
import { WaButton } from "@/components/site/Cta"
import { CtaBand } from "@/components/site/CtaBand"
import { PageHero } from "@/components/site/PageHero"
import { DraftNote, GlowCard, IconBubble, Reveal, Section, SectionHeading } from "@/components/site/Section"
import { PILLARS, TIMELINE } from "@/data/site"

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Bukan sekadar mengajar. Kami membentuk."
        lead="Thousands Good berawal dari sebuah kursus komputer kecil yang didirikan sepasang suami-istri dengan satu visi: pendidikan non-formal yang berkualitas untuk anak-anak di Deli Serdang."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Filosofi Educare" title="Melatih, membimbing, membentuk" />
            <Reveal>
              <p className="text-lg text-muted-foreground">
                <i>Educare</i> adalah akar kata Latin dari <i>education</i>, artinya melatih, membimbing, membentuk, dan merawat. Itulah
                cara kami memandang pendidikan.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Kami tidak berhenti pada materi pelajaran. Kami melatih <b className="text-brand-navy">kekuatan mental</b>,{" "}
                <b className="text-brand-navy">mindset</b>, dan <b className="text-brand-navy">daya saing</b>, supaya setiap anak siap
                bersaing di sekolah, lomba, hingga panggung internasional.
              </p>
              <DraftNote>
                Tambahkan nama dan foto pendiri serta visi-misi resmi. Orang tua lebih percaya pada lembaga yang wajah pengelolanya jelas.
              </DraftNote>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="relative mx-auto grid aspect-square max-w-md place-items-center rounded-full bg-brand-sky">
              <LogoBadge className="size-4/5" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="sky">
        <SectionHeading eyebrow="Perjalanan Kami" title="15 tahun, satu langkah di depan" />
        <ol className="relative mx-auto max-w-3xl">
          <span className="absolute top-0 bottom-0 left-4 w-0.5 bg-brand-blue/30 md:left-1/2" />
          {TIMELINE.map((t, i) => (
            <li key={t.year + t.title} className="relative mb-8 pl-12 md:w-1/2 md:pl-0 md:odd:pr-12 md:odd:text-right md:even:ml-auto md:even:pl-12">
              <span
                className={`absolute top-5 left-[9px] size-4 rounded-full border-4 border-white ring-2 md:left-auto ${
                  i % 2 === 0 ? "md:-right-2" : "md:-left-2"
                } ${i === TIMELINE.length - 1 ? "bg-brand-red ring-brand-red" : "bg-brand-blue ring-brand-blue"}`}
              />
              <Reveal delay={0.05}>
                <div className="rounded-2xl border bg-white p-5 shadow-sm">
                  <span className="text-sm font-extrabold text-brand-red">{t.year}</span>
                  <h3 className="text-lg font-bold">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <DraftNote>
          Cabang kedua (2023) belum tercantum di halaman Kontak. Tambahkan alamatnya, atau hapus poin ini bila cabang sudah tidak
          beroperasi. Cek juga tahun native speaker: Beranda lama menulis 2025, Tentang Kami menulis 2024.
        </DraftNote>
      </Section>

      <Section>
        <div className="mb-12 max-w-2xl">
          <Reveal>
            <GradientText
              colors={["#1170b8", "#1e96e0", "#e5322d", "#1e96e0", "#1170b8"]}
              animationSpeed={6}
              className="text-4xl font-extrabold sm:text-5xl"
            >
              The Eduverse Alliance
            </GradientText>
            <p className="mt-2 text-xl font-semibold text-brand-navy">Beyond Education, Beyond Limits</p>
            <p className="mt-4 text-lg text-muted-foreground">
              Dibentuk pada 7 Maret 2026, The Eduverse Alliance menyatukan empat pilar dalam satu ekosistem. Program pertamanya,{" "}
              <b className="text-brand-navy">Next Level Collaboration</b>, mempertemukan pengusaha, profesional, pendidik, dan inovator.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <a href={`https://www.instagram.com/${p.ig}`} target="_blank" rel="noopener" className="block h-full">
                <GlowCard>
                  <IconBubble tone={i % 2 ? "red" : "blue"}><p.icon /></IconBubble>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-red">Pilar {i + 1}</p>
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-sm font-semibold text-brand-blue-dark">{p.subtitle}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-dark">
                    <Instagram className="size-4" /> @{p.ig}
                  </span>
                </GlowCard>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title="Ingin berkolaborasi?" text="Tim kami siap membantu, baik untuk orang tua, sekolah, maupun calon partner.">
        <WaButton variant="white" text="Halo, saya ingin mendiskusikan kebutuhan belajar anak saya.">Diskusi Kebutuhan</WaButton>
        <WaButton variant="outline-light" to="partner" text="Halo, saya tertarik menjadi partner The Eduverse Alliance.">Jadi Partner</WaButton>
      </CtaBand>
    </>
  )
}
