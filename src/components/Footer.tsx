import React from 'react'
import '../allcssfiles/footer.css'
import Image from 'next/image'
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return (
    <footer>
      <div id='footer'>
        <div className='container'>
            <div className='top-footer'>
              <Image src={'/logo.png'} alt='logo' width={150} height={150} className='img'></Image>
            </div>{/* top-footer */}
            <div className='footer-links'>
               <div className='column'>
                  <div>CONTACT</div>
                  <ul className='col-link'>
                     <li>Phone: +91 900xxx999</li>
                     <br></br>
                     <li>Email: example@gmail.com</li>
                     <br></br>
                     <li>Open hourse: Monday -Sunday 8:00AM -9:00PM</li>
                     <br></br>
                     <li>Address: 123 xyz karachi</li>
                     <br></br>
                  </ul>
                </div>{/* column*/}
                <div className='column'>
                  <div>OUR STORY</div>
                  <ul className='col-link'>

                     <li>Who we are ?</li>
                     <li>Our Chef</li>
                     <li>Blog</li>
                     <li>Menu</li>
                     <li>Events</li>
                     
                  </ul>
                </div>{/* column*/}
                <div className='column'>
                  <div>THE RESTURENT</div>
                  <ul className='col-link'>
                    
                     <li>Qorma</li>
                     <li>Biryani</li>
                     <li>Pilao</li>
                     <li>poached eggs</li>
                     <li>toast</li>
                     
                  </ul>
                </div>{/* column*/}
                <div className='column'>
                  <div>SOCIAL LINKS</div>
                  <ul className='col-link'>
                    
                    <Link href=""><FaFacebook className='i' /></Link>
                    <Link href=""><FaInstagramSquare className='i'/></Link>
                    <Link href=""><IoLogoLinkedin className='i'/></Link>
                    <Link href=""><IoLogoTwitter className='i' /></Link>
                     <div className='newsletter'>
                        <input type="text" placeholder='Enter your Email address...' />
                     <div><button>Subscribe</button></div>
                     </div>{/*newsletter*/}
                  </ul>
                </div>{/* column*/}
            </div>{/* footer-links */}
        </div>{/* Container */}
        <hr></hr>
        <div className='footer-bottom'>
            <p>Copyright 2024 All Right Reserved | Made By Taha Hussain</p>
        </div>{/* footer-bottom */}
      </div>{/* footer */}
    </footer>
  )
}
