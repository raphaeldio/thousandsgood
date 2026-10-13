import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { WhatsAppIcon } from "@/components/brand/SocialIcon"
import { waLink } from "@/data/site"

export function WhatsAppFab() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={waLink("admission1", "Halo Thousands Good, saya ingin bertanya tentang program.")}
          target="_blank"
          rel="noopener"
          aria-label="Chat WhatsApp"
          className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-green-600/30 transition hover:scale-110 sm:right-6 sm:bottom-6"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30" />
          <WhatsAppIcon className="relative size-7" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left">Chat dengan Admission</TooltipContent>
    </Tooltip>
  )
}
