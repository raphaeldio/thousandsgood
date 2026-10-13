import { useState } from "react"
import { Check, Clock, Copy, FileText, Mail, MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SocialIcon, WhatsAppIcon } from "@/components/brand/SocialIcon"
import { LinkButton, WaButton } from "@/components/site/Cta"
import { PageHero } from "@/components/site/PageHero"
import { DraftNote, Reveal, Section, SectionHeading } from "@/components/site/Section"
import { CONTACT, SOCIALS, waLink } from "@/data/site"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapsQuery)}`

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable: ignore */
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Be the next champion!"
        lead="Kunjungi centre kami atau hubungi tim lewat WhatsApp. Kami siap membantu memilih program yang tepat."
      >
        <WaButton variant="white" text="Halo Thousands Good, saya ingin mendaftar.">Daftar via WhatsApp</WaButton>
        <LinkButton to={CONTACT.form} variant="outline-light">
          <FileText /> Isi Formulir Pendaftaran
        </LinkButton>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Hubungi Tim Kami" title="Kami senang mendengar dari Anda" />
            <div className="rounded-2xl border p-6">
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-red-50 text-brand-red"><MapPin /></span>
                <div className="flex-1">
                  <p className="font-bold text-brand-navy">Alamat</p>
                  <p className="text-muted-foreground">{CONTACT.address}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" onClick={copyAddress} className="rounded-full">
                      {copied ? <Check className="text-brand-green" /> : <Copy />} {copied ? "Tersalin" : "Salin alamat"}
                    </Button>
                    <Button asChild variant="outline" size="sm" className="rounded-full">
                      <a href={mapsUrl} target="_blank" rel="noopener"><Navigation /> Petunjuk arah</a>
                    </Button>
                  </div>
                </div>
              </div>
              <Separator className="my-5" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <Clock className="mt-0.5 size-5 text-brand-blue-dark" />
                  <div><p className="font-bold text-brand-navy">Jam Operasional</p><p className="text-sm text-muted-foreground">{CONTACT.hours}</p></div>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 size-5 text-brand-blue-dark" />
                  <div><p className="font-bold text-brand-navy">Email</p><p className="text-sm text-muted-foreground">{CONTACT.email}</p></div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {CONTACT.phones.map((p) => (
                <a
                  key={p.key}
                  href={waLink(p.key, "Halo Thousands Good, saya ingin bertanya.")}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center gap-3 rounded-2xl border p-4 transition hover:-translate-y-0.5 hover:border-[#25d366] hover:shadow-md"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-green-50 text-[#1da851] transition group-hover:bg-[#25d366] group-hover:text-white">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold text-muted-foreground">{p.label}</span>
                    <span className="block font-bold text-brand-navy">{p.display}</span>
                  </span>
                </a>
              ))}
            </div>
            <DraftNote>
              Isi jam operasional dan email. Situs lama memakai 4 nomor WhatsApp berbeda di beberapa halaman, sedangkan halaman Kontak
              hanya mencantumkan 2. Di draf ini semuanya dikumpulkan di sini beserta fungsinya.
            </DraftNote>
          </Reveal>

          <Reveal delay={0.15} className="min-h-[420px]">
            <iframe
              title="Lokasi Thousands Good Education Centre"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full rounded-2xl border"
            />
            <DraftNote>
              Ganti peta ini dengan embed dari profil Google Business Thousands Good (Bagikan, lalu Sematkan peta) supaya pin tepat dan
              ulasan ikut tampil.
            </DraftNote>
          </Reveal>
        </div>
      </Section>

      <Section tone="sky">
        <SectionHeading center eyebrow="Ikuti Kami" title="Lihat keseharian kami" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {SOCIALS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener"
                className="group flex flex-col items-center rounded-2xl border bg-white p-6 text-center transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-md"
              >
                <span className="mb-3 grid size-14 place-items-center rounded-2xl bg-brand-sky text-brand-blue-dark transition group-hover:bg-brand-blue-dark group-hover:text-white">
                  <SocialIcon name={s.name} className="size-6" />
                </span>
                <span className="font-bold text-brand-navy">{s.name}</span>
                <span className="text-sm text-muted-foreground">{s.handle}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
