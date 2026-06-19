import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/sections/hero"
import { Platforms } from "@/components/sections/platforms"
import { Stats } from "@/components/sections/stats"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { WhoIHelp } from "@/components/sections/who-i-help"
import { Process } from "@/components/sections/process"
import { Trust } from "@/components/sections/trust"
import { Faq } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Platforms />
        <Stats />
        <About />
        <Services />
        <WhoIHelp />
        <Process />
        <Trust />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
