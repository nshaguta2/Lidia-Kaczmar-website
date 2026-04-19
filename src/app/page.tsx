import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950">
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <About />
      <Contact />
    </main>
  );
}
