import type { ReactNode } from "react"
import { NotebookPen } from "lucide-react"
import AnimatedContent from "@/components/AnimatedContent"
import SpotlightCard from "@/components/SpotlightCard"
import { SHOW_DRAFT_NOTES } from "@/data/site"
import { cn } from "@/lib/utils"

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6", className)}>{children}</div>
}

export function Section({
  id,
  tone = "white",
  className,
  children,
}: {
  id?: string
  tone?: "white" | "sky" | "blue"
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 sm:py-24",
        tone === "sky" && "bg-brand-sky/60",
        tone === "blue" && "bg-gradient-to-br from-brand-blue-dark via-brand-blue-dark to-brand-blue text-white",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  )
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={cn(
        // flex (not inline-flex) so the label always sits on its own line above the heading
        "mb-3 flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]",
        light ? "text-sky-100" : "text-brand-blue-dark"
      )}
    >
      <span className="size-2 rounded-full bg-brand-red" />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
  light = false,
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  center?: boolean
  light?: boolean
}) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl", center && "mx-auto text-center")}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={cn("text-3xl font-extrabold sm:text-4xl", light && "text-white")}>{title}</h2>
      {lead && <p className={cn("mt-4 text-lg", light ? "text-sky-100" : "text-muted-foreground")}>{lead}</p>}
    </Reveal>
  )
}

/** Fade + slide in when scrolled into view (React Bits AnimatedContent). */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <AnimatedContent distance={40} duration={0.8} ease="power3.out" initialOpacity={0} delay={delay} threshold={0.15} className={className}>
      {children}
    </AnimatedContent>
  )
}

/** White card with a blue spotlight that follows the cursor (React Bits SpotlightCard). */
export function GlowCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <SpotlightCard
      theme="light"
      spotlightColor="rgba(30, 150, 224, 0.35)"
      className={cn("h-full rounded-2xl border border-border p-6 transition-transform duration-300 hover:-translate-y-1", className)}
    >
      {children}
    </SpotlightCard>
  )
}

export function IconBubble({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "red" }) {
  return (
    <span
      className={cn(
        "mb-4 grid size-12 place-items-center rounded-xl [&_svg]:size-6",
        tone === "blue" ? "bg-brand-sky text-brand-blue-dark" : "bg-red-50 text-brand-red"
      )}
    >
      {children}
    </span>
  )
}

export function DraftNote({ children }: { children: ReactNode }) {
  if (!SHOW_DRAFT_NOTES) return null
  return (
    <div className="my-6 flex gap-3 rounded-xl border-2 border-dashed border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
      <NotebookPen className="mt-0.5 size-4 shrink-0" />
      <p>
        <b>Catatan draf: </b>
        {children}
      </p>
    </div>
  )
}
