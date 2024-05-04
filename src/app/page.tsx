import Choice from "@/components/Choice";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Marketing from "@/components/Marketing";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Marketing />
      <Features />
      <Stats />
      <Services />
      <Testimonial />
      <Choice />
    </div>
  );
}
