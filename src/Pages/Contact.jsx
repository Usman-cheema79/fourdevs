import React from 'react'
import Contactcss from "./Contact.module.css"
import Navbar from '../Compnent/Navbar'
import Footer from '../Compnent/Footer';
import Header from '../Compnent/Header';
export default function Contact() {
  const navlicolour = "text-danger";
  const title="Contact Us";
  const pagename="contact";
  return (
    <>
          <Navbar ccolour={navlicolour}/>
          <Header title={title} pagename={pagename}/>
           <div className={Contactcss.contactpagesaction}>
                <div className={Contactcss.contactpageinfo}>
                      <button className={Contactcss.btn1}>CONTACT US</button>
                      <h1>Get In Touch With FourDevs</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>
                    </div>
                <div className={Contactcss.contactpageform}>
                      <form>
                           <input type="text" className={Contactcss.forminput} placeholder='Your Name' />
                           <input type="text" className={Contactcss.forminput} placeholder='Your Email' />
                           <input type="text" className={Contactcss.forminput} placeholder='Your Subject' />
                           <textarea id="paragraphInput" name="paragraphInput" className={Contactcss.forminput} rows="5" placeholder='Your Massage'></textarea>
                           <div className={Contactcss.formbtn}>
                             <h className="footer-subscribe-btntext"> Send Massage</h>
                          </div>
                      </form>
                </div>
           </div>
          <Footer/>
    </>
  )
}
