"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  return (
    <Carousel
      className="w-full p-0"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="p-0">
        <CarouselItem className="h-[70dvh] p-0">
          <Card className="h-full rounded-none p-0 border-none">
            <CardContent className="relative h-full p-0">
              <Image
                src="/hero/hero1.jpeg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
              />
              <div className="p-24 absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  Welcome to Next Company
                </h1>
                <p className="text-white text-sm md:text-2xl">
                  We provide the best services for your business
                </p>
                <Button
                  className="mt-4 bg-transparent text-white hover:text-black px-3 rounded-none"
                  variant="outline"
                >
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="h-[70dvh] p-0">
          <Card className="h-full rounded-none p-0 border-none">
            <CardContent className="relative h-full p-0">
              <Image
                src="/hero/hero2.jpg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
              />
              <div className="p-24 absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  Welcome to Next Company
                </h1>
                <p className="text-white text-sm md:text-2xl">
                  We provide the best services for your business
                </p>
                <Button
                  className="mt-4 bg-transparent text-white hover:text-black px-3 rounded-none"
                  variant="outline"
                >
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="h-[70dvh] p-0">
          <Card className="h-full rounded-none p-0 border-none">
            <CardContent className="relative h-full p-0">
              <Image
                src="/hero/hero3.webp"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
              />
              <div className="p-24 absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  Welcome to Next Company
                </h1>
                <p className="text-white text-sm md:text-2xl">
                  We provide the best services for your business
                </p>
                <Button
                  className="mt-4 bg-transparent text-white hover:text-black px-3 rounded-none"
                  variant="outline"
                >
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-8" />
      <CarouselNext className="right-8" />
    </Carousel>
  );
};

export default Hero;
