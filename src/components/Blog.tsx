import React from 'react'
import '../allcssfiles/blog.css'
import Image from 'next/image'

export default function Blog() {
  return (
    <section>
      <div id='blog'>
          <div className='container'>
            <h2 className='heading'>Our Recent Blog</h2>

            <div className='row'>
              <div className='col'>
                <Image src={'/blog-1.jpg'} alt='image'width={500} height={400} className='image'></Image>
                <div>
                  <a href="/">Apr. 19 2024</a>
                  <a href="/">Admin</a>
                </div>
                <h3 className='title'>Taste the delicious food in Karachi</h3>
                <p><a>Read More</a></p>
              </div>{/* col */}

              <div className='col'>
                <Image src={'/blog-2.jpg'} alt='image'width={500} height={400} className='image'></Image>
                <div>
                  <a href="/">Apr. 19 2024</a>
                  <a href="/">Admin</a>
                </div>
                <h3 className='title'>Taste the delicious food in Karachi</h3>
                <p><a>Read More</a></p>
              </div>{/* col */}

              <div className='col'>
                <Image src={'/blog-3.jpg'} alt='image'width={500} height={400} className='image'></Image>
                <div>
                  <a href="/">Apr. 19 2024</a>
                  <a href="/">Admin</a>
                </div>
                <h3 className='title'>Taste the delicious food in Karachi</h3>
                <p><a>Read More</a></p>
              </div>{/* col */}

            </div>{/* row */}
          </div>{/* Container */}
      </div>{/* Blog */}
    </section>
  )
}
