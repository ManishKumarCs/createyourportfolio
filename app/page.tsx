import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FreeServices } from "@/components/free-services"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <FreeServices />
        <PortfolioShowcase />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
