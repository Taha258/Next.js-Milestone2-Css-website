import React from 'react'
import '../allcssfiles/menu.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Menu() {
  return (
    <section>
     <div id='menu-section'>
        <div className='container'>
          <h2 className='heading'>Delicious Menu</h2>
          <div className='row'>
            <div className='menu-card'>
              <div className='menu-image'>
                <Image src={'/menu-1.png'} alt='image' width={300} height={200} className='image'></Image>
              </div>{/*image*/}

              <div className='menu-text'>
                <h4>Grilled Chicken with Potatos</h4>
                <p>Checken Garlic Ptatos Tomatos</p>
                <p className='price'>{`$ 30`}</p>
                <p className='btn'><Link href={'/'} className='link'>Order Now</Link></p>
              </div>{/*menu-text*/}

            </div>{/*menu-card*/}

            <div className='menu-card'>
              <div className='menu-image'>
                <Image src={'/menu-2.jpg'} alt='image' width={300} height={200} className='image'></Image>
              </div>{/*image*/}

              <div className='menu-text'>
                <h4>Grilled Chicken with Potatos</h4>
                <p>Checken Garlic Ptatos Tomatos</p>
                <p className='price'>{`$ 30`}</p>
                <p className='btn'><Link href={'/'} className='link'>Order Now</Link></p>
              </div>{/*menu-text*/}

            </div>{/*menu-card*/}

            <div className='menu-card'>
              <div className='menu-image'>
                <Image src={'/menu-3.jpg'} alt='image' width={300} height={200} className='image'></Image>
              </div>{/*image*/}

              <div className='menu-text'>
                <h4>Grilled Chicken with Potatos</h4>
                <p>Checken Garlic Ptatos Tomatos</p>
                <p className='price'>{`$ 30`}</p>
                <p className='btn'><Link href={'/'} className='link'>Order Now</Link></p>
              </div>{/*menu-text*/}

            </div>{/*menu-card*/}

            <div className='menu-card'>
              <div className='menu-image'>
                <Image src={'/menu-4.jpg'} alt='image' width={300} height={200} className='image'></Image>
              </div>{/*image*/}

              <div className='menu-text'>
                <h4>Grilled Chicken with Potatos</h4>
                <p>Checken Garlic Ptatos Tomatos</p>
                <p className='price'>{`$ 30`}</p>
                <p className='btn'><Link href={'/'} className='link'>Order Now</Link></p>
              </div>{/*menu-text*/}

            </div>{/*menu-card*/}

          </div>{/*row*/}
        </div>{/*container*/}
     </div>{/*Menu-section*/}
    </section>
  )
}
