import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
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
      <TopBar />
      <Navbar />
      <main>
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
