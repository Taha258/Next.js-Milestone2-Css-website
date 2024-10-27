import React from 'react'
import '../allcssfiles/contact.css'

export default function Contact() {
  return (
    <section>
    <div id='contact'>
       <div className='container'>
          <div className='contact-form'>
            <h3>Get In Touch</h3>

            <form action="">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Enter you Name' />
              </div>{/* Label Input */}
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter you Email' />
              </div>{/* Label Input */}
              <div>
                <label htmlFor="nphone">Phone</label>
                <input type="tel" placeholder='Enter you Phone No' />
              </div>{/* Label Input */}
              <div>
                <label htmlFor="date">Date</label>
                <input type="date" />
              </div>{/* Label Input */}
              <div>
                <label htmlFor="time">Time</label>
                <input type="time"  />
              </div>{/* Label Input */}
              <div>
                <label htmlFor="person">No. Of Person</label>
                <input type="number" placeholder='Enter Number' />
              </div>{/* Label Input */}
              <button>Book Your Table </button>
            </form>
          </div>{/* contact-form */}
       </div>{/* container */}
    </div>{/* contact */}
    </section>
  )
}
