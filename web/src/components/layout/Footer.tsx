import { Link } from "react-router-dom"
import { MapPin, Phone } from "lucide-react"
import { Wordmark } from "@/components/brand/Logo"
import { SocialIcon } from "@/components/brand/SocialIcon"
import { CONTACT, NAV, PROGRAMS, SOCIALS, WA } from "@/data/site"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-sky-100/80">
      {/* Logo-coloured stripe */}
      <div className="flex h-1.5">
        <span className="flex-[3] bg-brand-blue" />
        <span className="flex-1 bg-brand-red" />
        <span className="flex-1 bg-brand-yellow" />
        <span className="flex-1 bg-brand-green" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Wordmark light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Kursus Komputer, English, Robotics & Skill Up di Lubuk Pakam sejak 2011. <i>Leading Your Future.</i>
          </p>
          <div className="mt-5 flex gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener"
                aria-label={s.name}
                className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-brand-blue"
              >
                <SocialIcon name={s.name} className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Jelajahi</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Program</h4>
          <ul className="space-y-2 text-sm">
            {PROGRAMS.map((p) => (
              <li key={p.id}><Link to={`/program?tab=${p.id}`} className="hover:text-white">{p.name}</Link></li>
            ))}
            <li><Link to="/program#sertifikasi" className="hover:text-white">Sertifikasi</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Kunjungi Kami</h4>
          <p className="flex gap-3 text-sm leading-relaxed"><MapPin className="mt-0.5 size-4 shrink-0 text-brand-red" />{CONTACT.address}</p>
          <p className="mt-3 flex gap-3 text-sm">
            <Phone className="mt-0.5 size-4 shrink-0 text-brand-red" />
            <span>
              <a href={`https://wa.me/${WA.admission1}`} className="hover:text-white">0812-6555-7977</a>
              <br />
              <a href={`https://wa.me/${WA.admission2}`} className="hover:text-white">0852-7065-8777</a>
            </span>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-4 py-5 text-xs sm:px-6">
          <span>© {new Date().getFullYear()} Thousands Good Education Centre. All rights reserved.</span>
          <span>Educare · Beyond Education, Beyond Limits</span>
        </div>
      </div>
    </footer>
  )
}
