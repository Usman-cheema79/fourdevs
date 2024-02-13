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
          <Footer/>
    </>
  )
}
