import type { ReactNode } from "react"
import { LogoMark } from "@/components/brand/Logo"
import { Container, Reveal } from "@/components/site/Section"

export function CtaBand({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-r from-brand-blue-dark to-brand-blue px-8 py-12 text-white sm:px-12">
            <LogoMark className="absolute -top-10 -right-10 -z-10 size-56 opacity-15" />
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-white">{title}</h2>
                <p className="mt-2 text-sky-100">{text}</p>
              </div>
              <div className="flex flex-wrap gap-3">{children}</div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
