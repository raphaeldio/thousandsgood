import type { ReactNode } from "react"
import Aurora from "@/components/Aurora"
import SplitText from "@/components/SplitText"
import { LogoMark } from "@/components/brand/Logo"
import { Container, Eyebrow } from "@/components/site/Section"

let webglSupport: boolean | undefined

function canUseAurora() {
  if (webglSupport === undefined) {
    try {
      // Software-rendered WebGL (no GPU) is treated as unsupported: it is slow and can render blank.
      const opts = { failIfMajorPerformanceCaveat: true }
      const canvas = document.createElement("canvas")
      const gl = (canvas.getContext("webgl2", opts) || canvas.getContext("webgl", opts)) as WebGLRenderingContext | null
      webglSupport = !!gl && !gl.isContextLost()
      gl?.getExtension("WEBGL_lose_context")?.loseContext()
    } catch {
      webglSupport = false
    }
  }
  return webglSupport && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Aurora tuned for the brand: blue-only light (red mixed into blue reads as purple), kept dim so
 * white text stays readable. Red stays as the accent on buttons and labels instead.
 * Skipped without WebGL or with reduced motion; the section's blue gradient shows instead.
 */
export function BrandAurora() {
  if (!canUseAurora()) return null
  return (
    <div className="absolute inset-0 -z-10 opacity-60" aria-hidden="true">
      <Aurora colorStops={["#1e96e0", "#38bdf8", "#1170b8"]} amplitude={1} blend={0.55} speed={0.6} height={0.35} brightness={0.75} glow={0.45} />
    </div>
  )
}

/** Blue hero band with an animated aurora, used at the top of every inner page. */
export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue-dark to-brand-blue text-white">
      <BrandAurora />
      <LogoMark className="absolute -right-16 -bottom-20 -z-10 size-72 opacity-10 sm:size-96" />
      <Container className="py-20 sm:py-28">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <SplitText
          text={title}
          tag="h1"
          splitType="words"
          delay={60}
          duration={0.8}
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
          className="max-w-3xl text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
        />
        <p className="mt-5 max-w-2xl text-lg text-sky-100">{lead}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  )
}
