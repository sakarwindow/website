import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Intro from "@/components/sections/Intro";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Features from "@/components/sections/Features";
import Finishes from "@/components/sections/Finishes";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <ProductShowcase />
      <Features />
      <Finishes />
      <Process />
      <CTA />
    </>
  );
}
