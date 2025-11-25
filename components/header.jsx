"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClasses = (path) =>
    pathname === path
      ? "text-blue-500  md:border-b-2 h-full text-center  flex items-center pt-[2px] "
      : "hover:text-blue-500 text-gray-700";

  const closeSidebar = () => setOpen(false);

  return (
    <header className="w-full bg-white shadow h-[60px] flex items-center">
      <div className="max-full  lg:px-[50px] px-5 mx-auto flex items-center justify-between w-full h-full">
        <h1 className="text-xl font-bold h-full flex items-center">
          <Image width={"130"} height={"140"} src={"/trisaran-logo.png"} />
        </h1>

        {/* Desktop Navigation */}
        <nav className="lg:space-x-7 space-x-3  text-[14px] lg:text-[15px] hidden md:flex h-full items-center ">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClasses("/about")}>
            About Us
          </Link>
          <Link
            href="/privacy-policy"
            className={linkClasses("/privacy-policy")}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className={linkClasses("/terms-and-conditions")}
          >
            Terms & Conditions
          </Link>
          <Link href="/contact" className={linkClasses("/contact")}>
            Contact Us
          </Link>
          <Link href="/partner" className={linkClasses("/partner")}>
            Become A Partner
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(true)}>
          <HiMenu />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button className="text-3xl mb-6" onClick={closeSidebar}>
          <HiX />
        </button>

        {/* Mobile Navigation */}
        <nav className="flex flex-col space-y-4">
          <Link href="/" onClick={closeSidebar} className={linkClasses("/")}>
            Home
          </Link>
          <Link
            href="/partner"
            onClick={closeSidebar}
            className={linkClasses("/partner")}
          >
            Partner
          </Link>
          <Link
            href="/privacy-policy"
            onClick={closeSidebar}
            className={linkClasses("/privacy-policy")}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            onClick={closeSidebar}
            className={linkClasses("/terms-and-conditions")}
          >
            Terms & Conditions
          </Link>
          <Link
            href="/contact"
            onClick={closeSidebar}
            className={linkClasses("/contact")}
          >
            Contact Us
          </Link>
          <Link
            href="/become-partner"
            onClick={closeSidebar}
            className={linkClasses("/become-partner")}
          >
            Become A Partner
          </Link>
        </nav>
      </div>
    </header>
  );
}
