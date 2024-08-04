import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import {
  FaProjectDiagram,
  FaAward,
  FaBalanceScale,
  FaUserClock,
  FaRegCheckCircle,
} from "react-icons/fa";
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

const About = () => {
  return (
    <>
      <section className="container mx-auto p-4">
        <div className="mb-10 w-full p-3 bg-secondary-foreground">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-white text-sm">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white text-sm" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white text-sm">
                  About Us
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">About Us</h1>
          <hr className="w-16 h-[2px] bg-secondary-foreground mb-4" />
          <div className="flex flex-col md:flex-row justify-center items-start w-full gap-4">
            <Image
              src="/images/map.png"
              alt="logo"
              width={500}
              height={300}
              className="md:w-1/2"
            />
            <p className="md:w-1/2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero sit amet nunc lacinia, vel ultricies purus
              sollicitudin. Nulla facilisi. Nullam nec mauris nec nunc lacinia
              bibendum. Mauris nec eros vel nunc fringilla ultrices. Donec
              consectetur, mauris nec ultricies convallis, justo turpis
              tincidunt libero, a luctus nisl mi vel felis. Nulla facilisi.
              Nullam nec mauris nec nunc lacinia bibendum. Mauris nec eros vel
              nunc fringilla ultrices. Donec consectetur, mauris nec ultricies
              convallis, justo turpis tincidunt libero, a luctus nisl mi vel
              felis. Nulla facilisi. Nullam nec mauris nec nunc lacinia
              bibendum. Mauris nec eros vel nunc fringilla ultrices. Donec
              consectetur, mauris nec ultricies convallis, justo turpis
              tincidunt libero, a luctus nisl mi vel felis. Nulla facilisi.
              Nullam nec mauris nec nunc lacinia bibendum. Mauris nec eros vel
              nunc fringilla ultrices.
            </p>
          </div>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis libero sit amet nunc lacinia, vel ultricies purus
            sollicitudin. Nulla facilisi. Nullam nec mauris nec nunc lacinia
            bibendum. Mauris nec eros vel nunc fringilla ultrices. Donec
            consectetur, mauris nec ultricies convallis, justo turpis tincidunt
            libero, a luctus nisl mi vel felis. Nulla facilisi. Nullam nec
            mauris nec nunc lacinia bibendum. Mauris nec eros vel nunc fringilla
            ultrices. Donec consectetur, mauris nec ultricies convallis, justo
            turpis tincidunt libero, a luctus nisl mi vel felis. Nulla facilisi.
            Nullam nec mauris nec nunc lacinia bibendum. Mauris nec eros vel
            nunc fringilla ultrices. Donec consectetur, mauris nec ultricies
            convallis, justo turpis tincidunt libero, a luctus nisl mi vel
            felis. Nulla facilisi. Nullam nec mauris nec nunc lacinia bibendum.
            Mauris nec eros vel nunc fringilla ultrices.
          </p>
        </div>
      </section>
      <section className="w-full bg-secondary-foreground my-8 px-5 py-5">
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={`rounded-none ${
                i === 3 || i === 6 ? "md:col-span-2" : ""
              }`}
            />
          ))}
        </BentoGrid>
      </section>
      <section className="container mx-auto md:pxs-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center justify-between px-10 py-5 gap-4">
          <FaProjectDiagram className="text-4xl text-secondary-foreground" />
          <div className="text-left w-full">
            <h2 className="text-3xl font-bold">732+</h2>
            <h3 className="text-lg">Successfull Projects</h3>
          </div>
        </div>
        <div className="flex items-center justify-between px-10 py-5 gap-4">
          <FaAward className="text-4xl text-secondary-foreground" />
          <div className="text-left w-full">
            <h2 className="text-3xl font-bold">12+</h2>
            <h3 className="text-lg">Awards Won</h3>
          </div>
        </div>
        <div className="flex items-center justify-between px-10 py-5 gap-4">
          <FaBalanceScale className="text-4xl text-secondary-foreground" />
          <div className="text-left w-full">
            <h2 className="text-3xl font-bold">100%</h2>
            <h3 className="text-lg">Satisfaction Rate</h3>
          </div>
        </div>
        <div className="flex items-center justify-between px-10 py-5 gap-4">
          <FaUserClock className="text-4xl text-secondary-foreground" />
          <div className="text-left w-full">
            <h2 className="text-3xl font-bold">24/7</h2>
            <h3 className="text-lg">Customer Support</h3>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 text-secondary mt-5">
        <div className="bg-secondary-foreground px-3 py-10 text-center flex flex-col items-center justify-start gap-2">
          <FaRegCheckCircle className="text-4xl text-secondary" />
          <h2 className="text-xl font-bold">Decades of Experience</h2>
          <p className="text-lg text-justify">
            We have decades pf experience in the industry across the Globe.
          </p>
        </div>
        <div className="bg-secondary-foreground/95 px-3 py-10 text-center flex flex-col items-center justify-start gap-2">
          <FaRegCheckCircle className="text-4xl text-secondary" />
          <h2 className="text-xl font-bold">Supplier in Region</h2>
          <p className="text-lg text-justify">
            We are ISO 9001-2015 certified and accredited with the Ministry of
            Micro, Small and Medium Enterprises, a branch of the Government of
            India.
          </p>
        </div>
        <div className="bg-secondary-foreground px-3 py-10 text-center flex flex-col items-center justify-start gap-2">
          <FaRegCheckCircle className="text-4xl text-secondary" />
          <h2 className="text-xl font-bold">Quality Assurance</h2>
          <p className="text-lg text-justify">
            We are committed to providing the highest quality products and
            services to our customers.
          </p>
        </div>
        <div className="bg-secondary-foreground/95 px-3 py-10 text-center flex flex-col items-center justify-start gap-2">
          <FaRegCheckCircle className="text-4xl text-secondary" />
          <h2 className="text-lg text-justify">Customer Satisfaction</h2>
          <p className="text-lg text-justify">
            Our customers are our top priority and we strive to provide them
            with the best service possible.
          </p>
        </div>
      </section>
      <section className="container mx-auto my-10 py-10 flex flex-col gap-10 w-full">
        <h1 className="text-5xl font-bold text-center">Our Partners</h1>
        <LogoCarousel items={carouselItems} />
      </section>
    </>
  );
};

const Skeleton = ({ imageUrl }: { imageUrl: string }) => (
  <div className="flex relative flex-1 w-full h-full min-h-[6rem] rounded-none">
    <Image
      src={imageUrl}
      alt="skeleton"
      width={500}
      height={300}
      className="rounded-none w-full h-full object-cover"
    />
  </div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton imageUrl="/hero/hero1.jpeg" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton imageUrl="/hero/hero2.jpg" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton imageUrl="/hero/hero3.webp" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton imageUrl="/hero/hero1.jpeg" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton imageUrl="/hero/hero3.webp" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];

export default About;
