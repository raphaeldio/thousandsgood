import { lazy, Suspense, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { TooltipProvider } from "@/components/ui/tooltip"
import { LogoMark } from "@/components/brand/Logo"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { WhatsAppFab } from "@/components/layout/WhatsAppFab"
import { NAV } from "@/data/site"

const Home = lazy(() => import("@/pages/Home"))
const About = lazy(() => import("@/pages/About"))
const Programs = lazy(() => import("@/pages/Programs"))
const Achievements = lazy(() => import("@/pages/Achievements"))
const News = lazy(() => import("@/pages/News"))
const Activities = lazy(() => import("@/pages/Activities"))
const Contact = lazy(() => import("@/pages/Contact"))
const NotFound = lazy(() => import("@/pages/NotFound"))

/** Scroll to top on page change, or to the #hash target when one is given. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 300)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  useEffect(() => {
    const page = NAV.find((n) => n.to === pathname)
    document.title = page && page.to !== "/"
      ? `${page.label} | Thousands Good Education Centre`
      : "Thousands Good Education Centre | Kursus Komputer, English & Robotics Lubuk Pakam"
  }, [pathname])
  return null
}

function PageLoader() {
  return (
    <div className="grid min-h-[70vh] place-items-center">
      <LogoMark className="size-14 animate-spin [animation-duration:1.5s]" />
    </div>
  )
}

export default function App() {
  return (
    <TooltipProvider>
      <ScrollManager />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/program" element={<Programs />} />
            <Route path="/prestasi" element={<Achievements />} />
            <Route path="/berita" element={<News />} />
            <Route path="/kegiatan" element={<Activities />} />
            <Route path="/kontak" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFab />
    </TooltipProvider>
  )
}
