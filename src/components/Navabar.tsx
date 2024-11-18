"use-client";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex items-center w-full px-8 py-4 ">
      <nav className="flex justify-between w-full">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-8 ">
            <li>
              <Link
                href="/"
                className="group relative text-center pb-1 text-xl"
              >
                Home
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-out origin-left"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="group relative  text-center pb-1 text-xl"
              >
                Shop
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-out origin-left"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="group relative  text-center pb-1 text-xl"
              >
                About
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-out origin-left"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="group relative  text-center pb-1 text-xl"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-out origin-left"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <a href="/signin">
            <FaUserCircle size={30} />
          </a>
        </div>
      </nav>
    </div>
  );
}
