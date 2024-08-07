"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Drawer from "@/components/ui/drawer";
import { FaBars } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileNav = () => {
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  return (
    <>
      <Button
        className="md:hidden p-2 text-foreground"
        variant="outline"
        onClick={() => setIsDrawerActive(true)}
      >
        <FaBars className="w-6 h-6" />
      </Button>
      <Drawer open={isDrawerActive} setOpen={setIsDrawerActive} anchor="right">
        <div className="w-screen md:w-[500px] h-full bg-white space-y-6 flex flex-col text-black">
          <ul>
            <Link href="/">
              <li className="cursor-pointer border-b border-b-zinc-300 p-4 hover:bg-zinc-200">
                Home
              </li>
            </Link>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="cursor-pointer border-b border-b-zinc-300 px-4 text-md font-normal">
                  About Us
                </AccordionTrigger>
                <AccordionContent className="p-0">
                  <ul>
                    <Link href="/about">
                      <li className="cursor-pointer border-b border-b-zinc-300 p-4 hover:bg-zinc-200 pl-10">
                        About the Company
                      </li>
                    </Link>
                    <Link href="/founder">
                      <li className="cursor-pointer border-b border-b-zinc-300 p-4 hover:bg-zinc-200 pl-10">
                        Meet Our Founder
                      </li>
                    </Link>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="cursor-pointer border-b border-b-zinc-300 px-4 text-md font-normal">
                  Our Services
                </AccordionTrigger>
                <AccordionContent className="p-0">
                  <ul>
                    <Link href="/services/1">
                      <li className="cursor-pointer border-b border-b-zinc-300 p-4 hover:bg-zinc-200 pl-10">
                        Service 1
                      </li>
                    </Link>
                    <Link href="/services/2">
                      <li className="cursor-pointer border-b border-b-zinc-300 p-4 hover:bg-zinc-200 pl-10">
                        Service 2
                      </li>
                    </Link>
                    <Link href="/services/3">
                      <li className="cursor-pointer border-b border-b-zinc-300 p-4 hover:bg-zinc-200 pl-10">
                        Service 3
                      </li>
                    </Link>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link href="/contact">
              <li className="cursor-pointer border-b border-b-zinc-300 p-4 hover:bg-zinc-200">
                Contact Us
              </li>
            </Link>
          </ul>
          <Link href="/contact" className="px-6">
            <Button
              variant="outline"
              className="text-md md:text-xl w-full border-2"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default MobileNav;
