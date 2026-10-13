import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import Magnet from "@/components/Magnet"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/brand/SocialIcon"
import { waLink, type WaKey } from "@/data/site"
import { cn } from "@/lib/utils"

type Variant = "red" | "white" | "outline-light" | "blue" | "outline"

const VARIANTS: Record<Variant, string> = {
  red: "bg-brand-red text-white shadow-lg shadow-brand-red/30 hover:bg-brand-red/90",
  white: "bg-white text-brand-blue-dark hover:bg-sky-50",
  "outline-light": "border-2 border-white/70 bg-transparent text-white hover:bg-white/10",
  blue: "bg-brand-blue-dark text-white hover:bg-brand-blue-dark/90",
  outline: "border-2 border-brand-blue-dark bg-transparent text-brand-blue-dark hover:bg-brand-sky",
}

const BASE = "h-12 rounded-full px-6 text-base font-bold"

/** WhatsApp button with a prefilled message, pulled slightly toward the cursor (React Bits Magnet). */
export function WaButton({ to = "admission1", text, variant = "red", children }: { to?: WaKey; text: string; variant?: Variant; children: ReactNode }) {
  return (
    <Magnet padding={40} magnetStrength={4}>
      <Button asChild className={cn(BASE, VARIANTS[variant])}>
        <a href={waLink(to, text)} target="_blank" rel="noopener">
          <WhatsAppIcon /> {children}
        </a>
      </Button>
    </Magnet>
  )
}

export function LinkButton({ to, variant = "outline", children }: { to: string; variant?: Variant; children: ReactNode }) {
  const external = to.startsWith("http")
  return (
    <Button asChild className={cn(BASE, VARIANTS[variant])}>
      {external ? (
        <a href={to} target="_blank" rel="noopener">{children}</a>
      ) : (
        <Link to={to}>{children}</Link>
      )}
    </Button>
  )
}
