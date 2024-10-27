import React from "react";
import "../allcssfiles/header.css";
import Image from "next/image";
import Link from "next/link";
import HemeBurger from "./Hemeburger"
import { IoMdMenu } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header>
    
      <div className="stic">
        <nav>
          <div className="logo">
            <Image src={"/logo.png"} alt="logo" width={80} height={80} />
          </div>

          <div>
            <ul className="nav-items">
              <li>
                <Link href={"/"} className="nav-link">
                  HOME
                </Link>
              </li>
              <li>
                <Link href={"/#about"} className="nav-link">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href={"/#menu-section"} className="nav-link">
                  SEE MENU
                </Link>
              </li>
              <li>
                <Link href={"/#blog"} className="nav-link">
                  BLOG
                </Link>
              </li>
              <li>
                <Link href={"/#contact"} className="nav-link">
                  CONTACT US
                </Link>
              </li>
            </ul>

            <Sheet>
              <SheetTrigger className="menu">
                <IoMdMenu className="hameburger" />
              </SheetTrigger>
              <SheetContent className="sheet-content">
                <HemeBurger/>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
