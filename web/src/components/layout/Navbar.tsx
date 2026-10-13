import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Wordmark } from "@/components/brand/Logo"
import { WhatsAppIcon } from "@/components/brand/SocialIcon"
import { NAV, waLink } from "@/data/site"
import { cn } from "@/lib/utils"

const REGISTER_TEXT = "Halo Thousands Good, saya ingin mendaftar / konsultasi program."

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "border-b bg-white/85 shadow-sm backdrop-blur-lg" : "bg-white"
      )}
    >
      <div className={cn("mx-auto flex max-w-7xl items-center justify-between px-4 transition-all sm:px-6", scrolled ? "h-16" : "h-20")}>
        <Link to="/" aria-label="Thousands Good Education Centre, beranda">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu utama">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:text-brand-blue-dark",
                  isActive ? "text-brand-blue-dark" : "text-brand-navy/80",
                  "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-brand-red after:transition-transform",
                  isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild className="ml-3 h-10 rounded-full bg-brand-red px-5 font-bold text-white hover:bg-brand-red/90">
            <a href={waLink("admission1", REGISTER_TEXT)} target="_blank" rel="noopener">
              <WhatsAppIcon /> Daftar Sekarang
            </a>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-lg" className="lg:hidden" aria-label="Buka menu">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm">
            <SheetHeader>
              <SheetTitle><Wordmark /></SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Menu utama">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-xl px-4 py-3 text-base font-semibold",
                      isActive ? "bg-brand-sky text-brand-blue-dark" : "text-brand-navy hover:bg-muted"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button asChild className="mt-4 h-12 rounded-full bg-brand-red text-base font-bold text-white hover:bg-brand-red/90">
                <a href={waLink("admission1", REGISTER_TEXT)} target="_blank" rel="noopener">
                  <WhatsAppIcon /> Daftar Sekarang
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
