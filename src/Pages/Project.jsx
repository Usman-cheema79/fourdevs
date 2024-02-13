import React from 'react'
import projectcss from "./Project.module.css"
import Navbar from '../Compnent/Navbar'
import Footer from '../Compnent/Footer';
import Header from '../Compnent/Header';
export default function Project() {
    const navlicolour = "text-danger";
    const title="Our Projects";
  const pagename="Projects";
  return (
    <>
         <Navbar pcolour={navlicolour} />
         <Header title={title} pagename={pagename}/>
         <Footer/>
    </>
  )
}
