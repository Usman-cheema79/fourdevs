import React from 'react'
import aboutcss from "./About.module.css"
import Navbar from '../Compnent/Navbar'
import Footer from '../Compnent/Footer';
import Header from '../Compnent/Header';
export default function About() {
  const navlicolor = "text-danger";
  const title="About Us";
  const pagename="About";
  return (
    <>
   <div className="container" style={{width: "100%",margin:"0",padding:"0px",maxWidth:"100%"}}>
       <Navbar acolour={navlicolor}/>
       <Header title={title} pagename={pagename}/>
       <Footer/>
   </div>
    </>
  )
}
