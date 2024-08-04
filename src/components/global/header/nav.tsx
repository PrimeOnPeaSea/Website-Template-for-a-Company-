"use client";

import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Nav = () => {
  const [header, setHeader] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 100) {
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
      className={`z-40 w-full hidden md:flex bg-secondary-foreground text-secondary py-2 ${
        header ? "fixed top-0" : ""
      }`}
    >
      <div className="container mx-auto">
        <NavigationMenu className="flex justify-between items-center">
          <NavigationMenuList className="space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="text-lg p-2 hover:bg-secondary hover:text-secondary-foreground"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <hr className="w-[1px] h-6 bg-secondary" />
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg p-2 bg-secondary-foreground hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground rounded-none">
                Our Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[350px] gap-3 p-4 md:grid-cols-2">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/services/1"
                      className="block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-semibold"
                    >
                      Services 1
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/services/2"
                      className="block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-semibold"
                    >
                      Services 2
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/services/3"
                      className="block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-semibold"
                    >
                      Services 3
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <hr className="w-[1px] h-6 bg-secondary" />
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="text-lg p-2 hover:bg-secondary hover:text-secondary-foreground"
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>

            <hr className="w-[1px] h-6 bg-secondary" />
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/career"
                className="text-lg p-2 hover:bg-secondary hover:text-secondary-foreground"
              >
                Career
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Nav;
