import React from "react";
import Image from "next/image";
import {
  FaBriefcase as BriefcaseIcon,
  FaCalendarWeek as CalendarDaysIcon,
  FaRocket as RocketIcon,
} from "react-icons/fa";

const Founder = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-10">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-4 md:grid-cols-2 md:gap-16">
            <div>
              <Image
                src="/founder.jpeg"
                width={550}
                height={550}
                alt="Founder"
                className="rounded-lg mx-auto aspect-square overflow-hidden object-cover sm:w-full"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Meet John Doe, Founder of Next Inc.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  John Doe is the visionary behind Next Inc., a leading provider
                  of innovative web solutions. With over 15 years of experience
                  in the industry, John has dedicated her career to empowering
                  businesses to thrive online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-10 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  John&apos;s Journey
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From humble beginnings to industry leader, John&apos;s
                  entrepreneurial spirit and unwavering dedication have
                  propelled Next Inc. to new heights.
                </p>
              </div>
              <div className="mt-8 grid gap-6">
                <div className="grid grid-cols-[48px_1fr] items-start gap-4">
                  <div className="rounded-full bg-secondary-foreground p-2 text-primary-foreground flex items-center justify-center">
                    <CalendarDaysIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">2008</h3>
                    <p className="text-muted-foreground">
                      John founded Next Inc. with a vision to revolutionize the
                      web development industry.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[48px_1fr] items-start gap-4">
                  <div className="rounded-full bg-secondary-foreground p-2 text-primary-foreground flex items-center justify-center">
                    <BriefcaseIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">2010 - 2015</h3>
                    <p className="text-muted-foreground">
                      John led the development of Next&apos;s flagship product,
                      establishing the company as a trusted partner for
                      businesses of all sizes.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[48px_1fr] items-start gap-4">
                  <div className="rounded-full bg-secondary-foreground p-2 text-primary-foreground flex items-center justify-center">
                    <RocketIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">2016 - Present</h3>
                    <p className="text-muted-foreground">
                      Under John&apos;s leadership, Next Inc. has continued to
                      innovate and expand, becoming a global leader in web
                      development solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  John&apos;s Vision
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  John&apos;s passion for technology and her unwavering
                  commitment to empowering businesses have been the driving
                  force behind Next Inc.&apos;s success.
                </p>
              </div>
              <blockquote className="rounded-lg bg-background p-6 text-lg font-semibold leading-snug text-foreground shadow-sm">
                &quot;Our mission at Next Inc. is to provide businesses with
                the\n tools and support they need to thrive in the digital
                age.\n We&apos;re dedicated to innovation, collaboration, and\n
                delivering exceptional results for our clients.&quot;
                <cite className="mt-4 block text-sm font-normal text-muted-foreground not-italic">
                  - John Doe, Founder of Next Inc.
                </cite>
              </blockquote>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Empowering Businesses</h3>
                <p className="text-muted-foreground">
                  John&apos;s vision for Next Inc. is to empower businesses of
                  all sizes to achieve their online goals. By providing
                  cutting-edge web development solutions and unparalleled
                  customer support, Next Inc. helps its clients reach new
                  heights of success.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Driving Innovation</h3>
                <p className="text-muted-foreground">
                  John is committed to staying at the forefront of technology,
                  constantly exploring new ways to improve Next&apos;s products
                  and services. Her innovative mindset ensures that Next Inc.
                  remains a leader in the web development industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
