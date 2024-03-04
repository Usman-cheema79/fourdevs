import React from 'react'
import "../Pages/Home.css";
export default function Achievemnets() {
  return (
    <>
       <div className="section-5">
          <div className="section-5-firstdiv">
            <button className="headerbtn1">ACHIEVEMENT</button>
            <h2>Some Number Of Our Achievement</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="section-5-readmorebtn">
              <div>Read More</div>
            </button>
          </div>
          <div className="section-5-2nddiv">
            <div className="crcle"></div>
            <div className="section-5-boxs">
              <div className="section-5-box1"></div>
              <div className="section-5-box2"></div>
              <div className="section-5-box2"></div>
              <div className="section-5-box1"></div>
            </div>
          </div>
        </div>
        <div className="section-6">
          <div className="section-6-line"></div>
          <div className="section-6-images">
            <div>
              <img
                className="section-6-imge"
                src="https://fourdevs.net/wp-content/uploads/2023/09/partner-1.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="section-6-imge"
                src="https://fourdevs.net/wp-content/uploads/2023/09/partner-2.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="section-6-imge"
                src="https://fourdevs.net/wp-content/uploads/2023/09/partner-4.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="section-6-imge"
                src="https://fourdevs.net/wp-content/uploads/2023/09/partner-3.png"
                alt=""
              />
            </div>
          </div>
        </div>

    </>
  )
}
