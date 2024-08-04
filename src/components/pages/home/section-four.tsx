import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoCarousel from "@/components/ui/logo-carousel";

const carouselItems = [
  { logo: "bharat-electronics.jpg", classes: "bg-transparent" },
  { logo: "bhel.jpg", classes: "bg-transparent" },
  { logo: "camfil.jpg", classes: "bg-transparent" },
  { logo: "ge-power.webp", classes: "bg-transparent" },
  { logo: "indian-railway.jpg", classes: "bg-transparent" },
  { logo: "national_thermal_power.jpg", classes: "bg-transparent" },
  { logo: "the-leela-palace.webp", classes: "bg-transparent" },
  { logo: "ultratech-cement.jpg", classes: "bg-transparent" },
];

const SectionFour = () => {
  return (
    <section className="w-full min-h-[70dvh] flex flex-col items-center justify-between pt-8">
      <div className="container h-full mx-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold md:px-16 max-w-2xl">
          Get Started Today
        </h1>
        <hr className="w-24 h-1 bg-secondary-foreground mb-5" />
        <div className="flex flex-col items-center justify-center max-w-2xl mb-24">
          <p className="text-md md:text-2xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut
            nulla pariatur officia consequat aute amet exercitation.
          </p>
          <Link href="/contact">
            <Button className="mt-4 border-2 border-secondary-foreground bg-secondary-foreground hover:bg-secondary hover:text-secondary-foreground rounded-none">
              Contact Us
            </Button>
          </Link>
        </div>
        <LogoCarousel items={carouselItems} />
      </div>
    </section>
  );
};

export default SectionFour;
