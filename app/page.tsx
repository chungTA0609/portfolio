import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <FloatingElements />
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
