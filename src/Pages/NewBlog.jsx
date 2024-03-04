import React from 'react'
import style from "./NewBlog.module.css"
import Navbar from "../Compnent/Navbar"
import Header from '../Compnent/Header'
import Footer from '../Compnent/Footer'
export default function NewBlog() {
    let title="Create a new blog post";
    let pagename="New Blog";
  return (
    <>
    <div>
    <Navbar/>
      <Header title={title} pagename={pagename}/>
      <div  className={style.newblog}>
        <form action="">

        <h2>Title, Description, & Image are all required</h2>
        <h4>Title</h4>
        <input type="text" id="title"/> 
        <h4>Description</h4>
        <textarea type="text" id="desc">
        </textarea>
        <input type="file" id="imageId"/>
        <h className="button" type="submit"> Post Blog</h>
        </form>
      </div>
      <Footer/>
    </div>
     
    </>
  )
}
