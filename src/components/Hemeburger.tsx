import "../allcssfiles/hemeburger.css";
import Image from "next/image"
import Link from "next/link";

export default function HemeBurger(){
    return(
        <div>
           <div>
              <Image src={'/logo.png'} alt="logo" width={80} height={80} ></Image>
           </div>
           <div>
            <ul className="mt-6">
              <li className="li">
                <Link href={"/"} className="nav-link">
                  HOME
                </Link>
              </li>
              <li className="li">
                <Link href={"/#about"} className="nav-link">
                  ABOUT US
                </Link>
              </li>
              <li className="li">
                <Link href={"/#menu-section"} className="nav-link">
                  SEE MENU
                </Link>
              </li>
              <li className="li">
                <Link href={"/#blog"} className="nav-link">
                  BLOG
                </Link>
              </li>
              <li className="li">
                <Link href={"/#contact"} className="nav-link">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>{/* ul div */}
          
        </div>
    )
}