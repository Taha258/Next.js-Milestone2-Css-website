import React from 'react'
import '../allcssfiles/hero.css'

export default function Hero() {
  return (
    <section>
      <div className='hero'>
      
      <div className='hero-top-video'>
         <video 
            src="/video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className='.vid'
         ></video>
       </div>{/* Video */}
        
        <div className='content_wrapper'>
            <h1>Welcome To Our Rasoi</h1>
            <h2>Come and tast healthy and delicious food from our <span>Rasoi</span></h2>
            <div className='book-table'>
              <button className='book'>Book Table</button>
            </div>
        </div>{/* content_wrapper */}
      </div>{/* Hero */}
    </section>
  )
}
