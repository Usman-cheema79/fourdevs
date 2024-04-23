import React from 'react'
import "./singleblog.css"
import Navbar from '../Compnent/Navbar'
import Footer from '../Compnent/Footer';
import Header from '../Compnent/Header'
export default function Singleblog() {
  const navlicolour = "text-danger";
  let title="3 Instagram Ads Reports That Simplify Your Marketing ";
    let pagename="Blog Page";
  return (
    <>
     <Navbar spcolour={navlicolour} />
     <Header title={title} pagename={pagename}/>
     <Footer/>
    </>
  )
}
