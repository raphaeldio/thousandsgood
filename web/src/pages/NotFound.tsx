import { LogoBadge } from "@/components/brand/Logo"
import { LinkButton } from "@/components/site/Cta"

export default function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-4 py-20 text-center">
      <div>
        <LogoBadge className="mx-auto mb-6 size-40" />
        <h1 className="text-4xl font-extrabold">Halaman tidak ditemukan</h1>
        <p className="mt-2 text-muted-foreground">Sepertinya tembakan kali ini meleset dari sasaran.</p>
        <div className="mt-6 flex justify-center">
          <LinkButton to="/" variant="blue">Kembali ke Beranda</LinkButton>
        </div>
      </div>
    </div>
  )
}
