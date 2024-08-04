import Image from "next/image";

const SectionThree = () => {
  return (
    <section className="w-full bg-secondary-foreground my-12">
      <div className="container mx-auto relative lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 space-y-8">
          <div className="w-full py-[25px] text-secondary flex flex-col justify-evenly items-start">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold">Get What You Need</h2>
              <hr className="w-16 h-[2px]" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              consequatur maxime dolore corrupti officiis magnam blanditiis
              eveniet commodi. Dolorem possimus iure, eius aliquam quisquam
              iusto dolore doloribus! Dolor quo quos in alias at nesciunt enim
              dolores fuga est iusto? Voluptate!
            </p>
            <hr className="w-56 h-[2px] mt-8" />
            <div className="flex justify-evenly items-center gap-4 mt-10">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">A Full Services</h3>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  sed sit repellendus asperiores, pariatur nulla nostrum
                  adipisci ratione ipsam laudantium?
                </p>
              </div>
              <hr className="w-[2px] h-16 bg-secondary" />
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">A Full Services</h3>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  sed sit repellendus asperiores, pariatur nulla nostrum
                  adipisci ratione ipsam laudantium?
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/hero/hero1.jpeg"
              width={500}
              height={1000}
              alt="Hero"
              className="hidden lg:block object-cover w-[400px] h-[500px] md:absolute top-[-25px] right-10 lg:right-16 xl:right-36"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
