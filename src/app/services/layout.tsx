import Link from "next/link";
import { FaPlus as PlusIcon } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function NewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-[70dvh] flex flex-col md:flex-row justify-between">
        <div className="md:flex-1">{children}</div>
        <aside className="md:w-64 bg-secondary-foreground text-secondary">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="border-l-4 border-primary pl-2">Services</span>
            </h2>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/services/1" className="flex items-center">
                  <PlusIcon className="mr-2" />
                  <span>Service 1</span>
                </Link>
              </li>
              <li>
                <Link href="/services/2" className="flex items-center">
                  <PlusIcon className="mr-2" />
                  <span>Service 2</span>
                </Link>
              </li>
              <li>
                <Link href="/services/3" className="flex items-center">
                  <PlusIcon className="mr-2" />
                  <span>Service 3</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="container mx-auto p-6 border-t-2 border-secondary-foreground flex justify-center items-center">
        <div className="max-w-5xl flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-5xl font-bold md:px-16 max-w-2xl">
            Work with US
          </h2>
          <p className="text-md md:text-xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut
            nulla pariatur officia consequat aute amet exercitation.
          </p>
          <Link href="contact">
            <Button className="mt-4 border-2 border-secondary-foreground bg-secondary-foreground hover:bg-secondary hover:text-secondary-foreground rounded-none">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
