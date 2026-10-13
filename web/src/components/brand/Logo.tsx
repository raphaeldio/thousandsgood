import { useId } from "react"
import { cn } from "@/lib/utils"

/** Target rings only — used in the navbar and as a decorative mark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("size-10", className)} aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="var(--brand-blue)" />
      <circle cx="50" cy="50" r="38" fill="#fff" />
      <circle cx="50" cy="50" r="29" fill="var(--brand-blue)" />
      <circle cx="50" cy="50" r="20" fill="#fff" />
      <circle cx="50" cy="50" r="15" fill="var(--brand-red)" />
    </svg>
  )
}

// Letter colours of "EDUCATION CENTRE" in the original logo
const BOTTOM_WORD: [string, string][] = [
  ["E", "var(--brand-red)"], ["D", "var(--brand-red)"], ["U", "var(--brand-red)"],
  ["C", "var(--brand-yellow)"], ["A", "var(--brand-yellow)"],
  ["T", "var(--brand-green)"], ["I", "var(--brand-green)"], ["O", "var(--brand-green)"], ["N", "var(--brand-green)"],
  [" ", "transparent"],
  ["C", "var(--brand-yellow)"], ["E", "var(--brand-yellow)"], ["N", "var(--brand-green)"],
  ["T", "var(--brand-blue)"], ["R", "var(--brand-blue)"], ["E", "var(--brand-blue)"],
]

/**
 * Vector recreation of the Thousands Good badge logo.
 * Replace with the original SVG/PNG file when available.
 */
export function LogoBadge({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "")
  return (
    <svg viewBox="0 0 240 240" className={cn("size-40", className)} role="img" aria-label="Logo Thousands Good Education Centre">
      <defs>
        <path id={`top-${id}`} d="M 32,120 A 88,88 0 0 1 208,120" />
        <path id={`bottom-${id}`} d="M 22,120 A 98,98 0 0 0 218,120" />
      </defs>
      <circle cx="120" cy="120" r="118" fill="#fff" />
      <circle cx="120" cy="120" r="74" fill="var(--brand-blue)" />
      <circle cx="120" cy="120" r="59" fill="#fff" />
      <circle cx="120" cy="120" r="45" fill="var(--brand-blue)" />
      <circle cx="120" cy="120" r="31" fill="#fff" />
      <circle cx="120" cy="120" r="25" fill="var(--brand-red)" />
      <text fontFamily="Arial Black, Plus Jakarta Sans Variable, sans-serif" fontWeight="900" fontSize="22" fill="#111" letterSpacing="1">
        <textPath href={`#top-${id}`} startOffset="50%" textAnchor="middle">THOUSANDS GOOD</textPath>
      </text>
      <text fontFamily="Arial Black, Plus Jakarta Sans Variable, sans-serif" fontWeight="900" fontSize="19" letterSpacing="0.5" stroke="#111" strokeWidth="0.6" paintOrder="stroke">
        <textPath href={`#bottom-${id}`} startOffset="50%" textAnchor="middle">
          {BOTTOM_WORD.map(([ch, color], i) => (
            <tspan key={i} fill={color}>{ch}</tspan>
          ))}
        </textPath>
      </text>
      <text x="13" y="128" fontSize="22" fontWeight="900" fill="#111" textAnchor="middle">*</text>
      <text x="227" y="128" fontSize="22" fontWeight="900" fill="#111" textAnchor="middle">*</text>
    </svg>
  )
}

export function Wordmark({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="leading-tight">
        <span className={cn("block font-extrabold tracking-tight", light ? "text-white" : "text-brand-navy")}>
          Thousands Good
        </span>
        <span className="block text-[0.65rem] font-bold tracking-[0.18em]">
          <span className="text-brand-red">EDU</span>
          <span className="text-brand-yellow">CA</span>
          <span className="text-brand-green">TION </span>
          <span className={light ? "text-sky-200" : "text-brand-blue"}>CENTRE</span>
        </span>
      </span>
    </span>
  )
}
