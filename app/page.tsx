import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { CakesSection } from "@/components/cakes-section"
import { MenuSection } from "@/components/menu-section"
import { BookingSection } from "@/components/booking-section"
import { VisitSection } from "@/components/visit-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CakesSection />
      <MenuSection />
      <BookingSection />
      <VisitSection />
      <Footer />
    </main>
  )
}
