import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";

const Top = () => {
  return (
    <div className="hidden lg:block bg-secondary text-secondary-foreground py-1">
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="" className="flex items-center space-x-1">
            <BiCommentDetail className="w-4 h-4" />
            <span className="">emailone@next.com</span>
          </Link>
          <Link href="" className="flex items-center space-x-1">
            <BiCommentDetail className="w-4 h-4" />
            <span>emailtwo@next.com</span>
          </Link>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <Link href="">
            <FaFacebookF className="w-4 h-4" />
          </Link>
          <Link href="">
            <FaXTwitter className="w-4 h-4" />
          </Link>
          <Link href="">
            <FaLocationDot className="w-4 h-4" />
          </Link>
          <Link href="">
            <FaLinkedinIn className="w-4 h-4" />
          </Link>
        </div>
        <div>
          <Link href="">
            <div className="flex items-center space-x-1">
              <IoMdCall className="w-4 h-4" />
              <p>
                <span className="font-bold">Talk to Expert: </span>+91
                91919-19191
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Top;
