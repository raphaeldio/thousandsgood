import { SiFacebook, SiInstagram, SiTiktok, SiWhatsapp, SiYoutube } from "react-icons/si"
import type { IconType } from "react-icons"

const ICONS: Record<string, IconType> = {
  Instagram: SiInstagram,
  TikTok: SiTiktok,
  YouTube: SiYoutube,
  Facebook: SiFacebook,
  WhatsApp: SiWhatsapp,
}

export function SocialIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? SiInstagram
  return <Icon className={className} aria-hidden="true" />
}

export { SiWhatsapp as WhatsAppIcon }
