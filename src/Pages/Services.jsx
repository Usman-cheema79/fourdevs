import React from 'react'
import servicescss from "./Services.module.css"
import Navbar from '../Compnent/Navbar'
import Footer from '../Compnent/Footer';
import Header from '../Compnent/Header';
export default function Services() {
  const navlicolour = "text-danger";
  const title="Our Services";
  const pagename="Services";
  return (
    <>
     <Navbar scolour={navlicolour} />
     <Header title={title} pagename={pagename}/>
          <Footer/>
    </>
  )
}
