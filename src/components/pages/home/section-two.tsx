import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SectionTwo = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto flex flex-col justify-center items-center md:px-20">
        <div className="pt-10 flex flex-col w-full md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-black">
            Our{" "}
            <span className="text-secondary-foreground text-4xl">
              Latest Projects
            </span>
          </h2>
          <hr className="w-16 h-1 md:w-[2px] md:h-16 bg-secondary-foreground" />
          <p className="text-justify py-10 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            soluta et in possimus aperiam aut a expedita.
          </p>
          <Link href="/services/1">
            <Button
              variant="outline"
              className="rounded-none border-2 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary mb-5 md:mb-0"
            >
              All Services
            </Button>
          </Link>
        </div>
        <div className="w-full max-h-1/2 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/services/1">
              <div className="bg-gray-100 border-2 border-secondary-foreground hover:scale-110">
                <Image
                  src="/hero/hero3.webp"
                  alt="Project"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover "
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-black">
                    Service Title 1
                  </h4>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eaque soluta et in possimus aperiam aut a expedita.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/services/2">
              <div className="bg-gray-100 border-2 border-secondary-foreground hover:scale-110">
                <Image
                  src="/hero/hero2.jpg"
                  alt="Project"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover "
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-black">
                    Service Title 2
                  </h4>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eaque soluta et in possimus aperiam aut a expedita.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/services/3">
              <div className="bg-gray-100 border-2 border-secondary-foreground hover:scale-110">
                <Image
                  src="/hero/hero1.jpeg"
                  alt="Project"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover "
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold text-black">
                    Service Title 3
                  </h4>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eaque soluta et in possimus aperiam aut a expedita.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
