import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SectionOne = () => {
  return (
    <section className="w-full min-h-[calc(100dvh-75px)] bg-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-8">
          <div className="flex justify-center items-center">
            <Image
              src="/images/ABOUT.png"
              width={500}
              height={1000}
              alt="Hero"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-4 md:pr-9">
            <h1 className="text-4xl font-bold text-secondary-foreground">
              Welcome to NEXT<span className="text-sm">.JS</span>
            </h1>
            <p className="text-md text-secondary-foreground text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              voluptatem accusantium rem, beatae distinctio eaque, quae
              dignissimos eveniet dolores voluptatibus ea sequi corrupti illum
              tenetur similique aut nemo accusamus necessitatibus quas suscipit
              recusandae. Voluptates facere quisquam obcaecati dolores. Dolore
              voluptatum dignissimos molestias fuga beatae laboriosam aliquid
              nihil ab assumenda fugiat.
              <br />
              <br />
              <strong>Lorem, ipsum.</strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              laboriosam odit in, excepturi aliquam fugit laborum? Aspernatur
              deserunt placeat ea. Molestiae earum beatae unde harum veniam
              atque delectus maiores velit doloribus ducimus id cum
              exercitationem perferendis, dolores, similique commodi incidunt!
              <br />
              <br />
              <strong>Lorem, ipsum.</strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              consequatur maxime dolore corrupti officiis magnam blanditiis
              eveniet commodi. Dolorem possimus iure, eius aliquam quisquam
              iusto dolore doloribus! Dolor quo quos in alias at nesciunt enim
              dolores fuga est iusto? Voluptate!
            </p>
            <Link href="/contact">
              <Button
                className="text-2xl p-5 md:text-4xl md:p-8 font-bold border-2 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary w-full md:w-max rounded-none"
                variant="outline"
              >
                Let&apos;s Connect
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
