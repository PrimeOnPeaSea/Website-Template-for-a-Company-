import Top from "./top";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary-foreground">
      <Top />
      <div className="w-full py-10 bg-secondary text-secondary-foreground grid grid-cols-1 md:grid-cols-3 gap-4 p-4 container mx-auto ">
        <div className="flex flex-col justify-center items-start text-left gap-4">
          <Image
            src="/next.svg"
            alt="logo"
            width={100}
            height={100}
            layout="fixed"
          />
          <p className="md:max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tristique, metus nec fermentum cursus.
          </p>
          <div className="flex gap-4">
            <FaFacebookF className="text-2xl text-secondary-foreground" />
            <FaInstagram className="text-2xl text-secondary-foreground" />
            <FaLinkedinIn className="text-2xl text-secondary-foreground" />
            <FaTwitter className="text-2xl text-secondary-foreground" />
            <FaYoutube className="text-2xl text-secondary-foreground" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-4">
          <div className="flex flex-col gap-2 md:items-end text-left md:text-right">
            <h2 className="text-2xl font-bold">Quick Links</h2>
            <ul className="flex flex-col">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <hr className="w-16 h-[2px] md:h-28 md:w-[2px] bg-secondary-foreground" />
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Important Links</h2>
            <ul className="flex flex-col">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Condition</Link>
              </li>
              <li>
                <Link href="#">SiteMap</Link>
              </li>
              <li>
                <Link href="#">Developer</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start md:items-end text-left md:text-right">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p>123, Lorem Ipsum, Dolor Sit Amet, 123456</p>
          <p>+91 9191919191</p>
          <p>emailone@next.com</p>
          <p>emailtwo@next.com</p>
        </div>
      </div>
      <div className="w-full bg-secondary-foreground text-secondary text-center py-1">
        <p className="text-sm flex gap-2 justify-center items-center">
          &copy; 2024 WebArc.One | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
