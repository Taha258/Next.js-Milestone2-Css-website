import React from 'react'
import '../allcssfiles/about.css'
import Image from 'next/image';

export default function About() {
  return (
    <section>
       <div id='about'>
           <div className='container'>
              <div className='about-left'>
               <h3>About Us</h3>
               <h1>Welcome</h1>
               <p>Indulge in an unforgettable culinary experience where every dish is crafted with passion, fresh ingredients, and flavors that celebrate the art of dining.</p>
               <br></br>
               <p>Experience a symphony of flavors in a warm, inviting atmosphere where every meal tells a story, and every guest is treated like family.Savor the perfect blend of taste and tradition in a place where exceptional service meets authentic cuisine, creating memories that linger long after the last bite.</p>
               <button>Learn More About Us</button>
              </div>{/* About-left */}
              <div className='about-right'>
                 <Image src={'/about-page.jpg'} alt='about-pic' width={500} height={500} className='image'></Image>
              </div>{/* About-right */}
           </div>{/* Container */}
           
       </div>{/* About */}
    </section>
  )
}
