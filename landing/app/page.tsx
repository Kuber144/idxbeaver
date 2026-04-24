import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductShowcase } from "@/components/product-showcase"
import { Features } from "@/components/features"
import { QueryLanguage } from "@/components/query-language"
import { Shortcuts } from "@/components/shortcuts"
import { Install } from "@/components/install"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductShowcase />
      <Features />
      <QueryLanguage />
      <Shortcuts />
      <Install />
      <Footer />
    </main>
  )
}
