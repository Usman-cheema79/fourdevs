import React from 'react'
import sblogcss from "./singleblog.module.css"
import Navbar from '../Compnent/Navbar'
import Footer from '../Compnent/Footer';
export default function Singleblog() {
  const navlicolour = "text-danger";
  return (
    <>
     <Navbar spcolour={navlicolour} />
     <Footer/>
    </>
  )
}
