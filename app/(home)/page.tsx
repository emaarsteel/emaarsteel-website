import Header from "@/components/Header";
import Hero from "@/app/(home)/_components/Hero";
import About from "@/app/(home)/_components/About";
import Chairman from "@/app/(home)/_components/Chairman";
import Pillars from "@/app/(home)/_components/Pillars";
import Sectors from "@/app/(home)/_components/Sectors";
import SteelTypes from "@/app/(home)/_components/SteelTypes";
import News from "@/app/(home)/_components/News";
import Partners from "@/app/(home)/_components/Partners";
import Contact from "@/app/(home)/_components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Chairman />
        <Pillars />
        <Sectors />
        <SteelTypes />
        <News />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
