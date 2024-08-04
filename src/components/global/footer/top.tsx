import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Top = () => {
  return (
    <div className="w-full bg-secondary-foreground text-secondary flex flex-col md:flex-row justify-evenly items-center gap-4 py-10 md:p-4">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Have a Question?</h2>
        <Link href="tel:">+91 9191919191</Link>
      </div>
      <hr className="w-16 h-[2px] md:h-16 md:w-[2px] bg-secondary" />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Need Support? Drop us an Email</h2>
        <Link href="mailto:">emailone@next.com</Link>
        <Link href="mailto:">emailtwo@next.com</Link>
      </div>
      <hr className="w-16 h-[2px] md:h-16 md:w-[2px] bg-secondary" />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">Want to Connect?</h2>
        <Link href="/contact">
          <Button className="rounded-none border-2 border-secondary bg-secondary text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary mt-2">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Top;
