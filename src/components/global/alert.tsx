"use client";

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import React from "react";
import Link from "next/link";

const Alert = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col justify-center items-center max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-destructive  text-2xl font-semibold">
            Disclaimer
          </DialogTitle>
          <DialogDescription className="text-justify text-sm text-muted-foreground">
            The Images, Logos and Content used in this website are used as a
            reference for the template and are not owned by me.
            <br />
            All the rights are reserved by the respective owners.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-between items-end ">
          <div className="text-destructive">
            For any Queries Contact Me Here.
            <Link href="mailto:parth.singh1023@gmail.com" target="_blank">
              <Button variant="outline" className="font-bold text-black">
                Contact Me
              </Button>
            </Link>
          </div>
          <DialogClose>
            <Button variant="outline" className="font-bold">
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Alert;
