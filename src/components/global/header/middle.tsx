"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./mobileNav";
import { Button } from "@/components/ui/button";

const Middle = () => {
  const [header, setHeader] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 100 && window.innerWidth < 768) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      className={`bg-white ${
        header ? "fixed top-0 z-50 shadow-md w-full" : ""
      }`}
    >
      <div className="flex justify-between items-center py-4 container mx-auto">
        <Link href="/">
          <Image src="/next.svg" alt="Next Company" width={150} height={100} />
        </Link>
        <MobileNav />
        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <Button
              variant="outline"
              className="text-md md:text-xl border-2 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary rounded-none"
            >
              Connect With Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Middle;
