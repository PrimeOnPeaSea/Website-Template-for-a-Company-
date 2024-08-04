import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaInfoCircle, FaPhone, FaCalendar, FaMap } from "react-icons/fa";
import Form from "@/components/pages/contact/form";

const Contact = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="mb-10 w-full p-3 bg-secondary-foreground">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-white text-sm">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white text-sm" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white text-sm">
                Contact Us
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <hr className="w-16 h-[2px] bg-secondary-foreground mb-4" />
        <ul className="text-md">
          <li className="flex items-center mb-2">
            <FaInfoCircle className="inline-block mr-2" />
            <span>For any inquiries, please call or email us today.</span>
          </li>
          <li className="flex items-center mb-2">
            <FaPhone className="inline-block mr-2" />
            <span>Phone: +91 9191919191</span>
          </li>
          <li className="flex items-center mb-2">
            <FaCalendar className="inline-block mr-2" />
            <span>Monday - Friday: 9:00 AM to 5:00 PM</span>
          </li>
          <li className="flex items-center mb-2">
            <FaMap className="inline-block mr-2" />
            <span>Location: 123, Lorem Ipsum, Dolor Sit, Amet, 123456</span>
          </li>
        </ul>
        <h2 className="text-2xl font-bold mt-12">Description</h2>
        <hr className="w-16 h-[2px] bg-secondary-foreground mb-4" />
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero sit amet nunc lacinia, vel ultricies purus
          sollicitudin. Nulla facilisi. Nullam nec mauris nec nunc lacinia
          bibendum. Mauris nec eros vel nunc fringilla ultrices. Donec
          tincidunt, sapien in vehicula aliquet, eros sapien tincidunt nulla,
          nec fringilla nunc justo id purus. In hac habitasse platea dictumst.
          Nullam nec mauris nec nunc lacinia bibendum. Mauris nec eros vel nunc
          fringilla ultrices. Donec tincidunt, sapien in vehicula aliquet, eros
          sapien tincidunt nulla, nec fringilla nunc justo id purus. In hac
          habitasse platea dictumst.
        </p>
      </div>

      <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.206252986742!2d76.5727969758506!3d30.768790174567002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1722607141108!5m2!1sen!2sin"
          className="w-full h-80"
          loading="lazy"
        />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
