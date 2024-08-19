import SectionOne from "@/components/pages/home/section-one";
import SectionTwo from "@/components/pages/home/section-two";
import SectionThree from "@/components/pages/home/section-three";
import SectionFour from "@/components/pages/home/section-four";
import Testimonials from "@/components/pages/home/testimonials";
import Hero from "@/components/pages/home/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="h-[70dvh]">
        <Hero />
      </section>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Testimonials />
      <SectionFour />
    </main>
  );
}
