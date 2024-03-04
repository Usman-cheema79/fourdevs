import React from 'react'
import projectcss from "./Project.module.css"
import Navbar from '../Compnent/Navbar'
import Footer from '../Compnent/Footer';
import Header from '../Compnent/Header';
import Achievemnets from '../Compnent/Achievemnets';
export default function Project() {
    const navlicolour = "text-danger";
    const title="Our Projects";
    const pagename="Projects";
  return (
    <>
         <Navbar pcolour={navlicolour} />
         <Header title={title} pagename={pagename}/>
         <div className={projectcss.section1}>
       <button className="headerbtn1">OUR PROJECTS</button>
       <h1>Project We Have Done</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className={projectcss.teamboxs}>
     <div className={projectcss.teambox}>
     <img src="https://fourdevs.net/wp-content/uploads/2023/09/2-min.png" alt="" />
     <div className={projectcss.boxhover}>
       <div className={projectcss.namebox}>
        <h4>Social Media Ads
        </h4>
        <h6>Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </h6>
      </div>  
     </div>
          </div>
    <div className={projectcss.teambox}>
     <img src="https://fourdevs.net/wp-content/uploads/2023/09/post-1-1.jpg" alt="" />
     <div className={projectcss.boxhover}>
     <div className={projectcss.namebox}>
        <h4>Social Media Ads
        </h4>
        <h6>Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </h6>
      </div> 
     </div>
          </div>
      <div className={projectcss.teambox}>
     
     <img src="https://fourdevs.net/wp-content/uploads/2023/09/51.png" alt="" />
     <div className={projectcss.boxhover}>
     <div className={projectcss.namebox}>
        <h4>Social Media Ads
        </h4>
        <h6>Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </h6>
      </div> 
     </div>
     
          </div>
           <div className={projectcss.teambox}>
     <img src="https://fourdevs.net/wp-content/uploads/2023/09/service-5.jpg" alt="" />
     <div className={projectcss.boxhover}>
     <div className={projectcss.namebox}>
        <h4>Social Media Ads
        </h4>
        <h6>Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </h6>
      </div> 
     </div>
          </div>
    <div className={projectcss.teambox}>
     <img src="https://fourdevs.net/wp-content/uploads/2023/09/profile5.jpg" alt="" />
     <div className={projectcss.boxhover}>
     <div className={projectcss.namebox}>
        <h4>Social Media Ads
        </h4>
        <h6>Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </h6>
      </div> 
     </div>
          </div>
      <div className={projectcss.teambox}>
     
     <img src="https://fourdevs.net/wp-content/uploads/2023/09/profile4.jpg" alt="" />
     <div className={projectcss.boxhover}>
     <div className={projectcss.namebox}>
        <h4>Social Media Ads
        </h4>
        <h6>Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </h6>
      </div> 
     </div>
     
          </div>
     </div>
         </div>
               <div className={projectcss.section2}>
                    <h1>Need Advice For Your Social Media Marketing?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo dolore magna</p>    
                    <button>Contact Us</button>
               </div>
          <Achievemnets/>
         <Footer/>
    </>
  )
}
