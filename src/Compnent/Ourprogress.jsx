import React from 'react'
import ourprogress from "../Pages/About.module.css"
export default function Ourprogress() {
  return (
    <>
      <div className={ourprogress.section4}>
       <button className="headerbtn1">OUR PROCESS</button>
       <h1>Easy Steps To Get Your Solution</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className={ourprogress.progressboxs}> 
                  <div className={ourprogress.progressbox}> 
                      <div className={ourprogress.progressboxscircle}> 
                      
                      </div>
                      <h4>Book A Service</h4>
                      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                  </div>
                  <div className={ourprogress.progressbox}> 
                      <div className={ourprogress.progressboxscircle}> 
                      
                      </div>
                      <h4>Book A Service</h4>
                      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                  </div><div className={ourprogress.progressbox}> 
                      <div className={ourprogress.progressboxscircle}> 
                      
                      </div>
                      <h4>Book A Service</h4>
                      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                  </div>
                 
            </div>
            <div className={ourprogress.progressboxline}></div>
       </div>
    </>
  )
}
