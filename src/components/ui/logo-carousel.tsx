"use client";

import { FC } from "react";
import Image from "next/image";

interface Props {
  items: any[];
  animate?: boolean;
  shadows?: boolean;
}

const LogoCarousel: FC<Props> = ({
  items,
  animate = true,
  shadows = false,
}) => {
  return (
    <div
      className="flex overflow-hidden max-w-[99dvw]"
      style={{
        maskImage: `${
          shadows &&
          "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)"
        }`,
      }}
    >
      {/* If your text don't fit entirely on your screen, try increasing the length of the array below. */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={`flex shrink-0 ${animate && "animate-logo-carousel"}`}
        >
          {items.map(({ logo, classes }) => (
            <Image
              key={logo}
              src={`/logos/${logo}`}
              alt={logo}
              width={100}
              height={100}
              className={`ml-10 ${classes}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default LogoCarousel;
