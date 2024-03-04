import React, { useState } from "react";
import servicescss from "./Services.module.css";
import Navbar from "../Compnent/Navbar";
import Footer from "../Compnent/Footer";
import Header from "../Compnent/Header";
import OurServices from "../Compnent/OurServices";
import Ourprogress from "../Compnent/Ourprogress";
import Testimonials from "../Compnent/Testimonials";
export default function Services() {
  const navlicolour = "text-danger";
  const title = "Our Services";
  const pagename = "Services";
  const backgroundcolor = "#ffffff";
  const color = "black";
  const [showAnswers, setShowAnswers] = useState([]);

  // Function to toggle the display of the answer
  const toggleAnswer = (index) => {
    setShowAnswers((prevShowAnswers) => {
      const newShowAnswers = [...prevShowAnswers];
      newShowAnswers[index] = !newShowAnswers[index];
      return newShowAnswers;
    });
  };
  return (
    <>
      <Navbar scolour={navlicolour} />
      <Header title={title} pagename={pagename} />
      <OurServices backgroundcolor={backgroundcolor} color={color} />
      <div className={servicescss.servicessections1}>
        <div className={servicescss.picsection}></div>
        <div className={servicescss.textsection}>
          <button className="headerbtn1">MAKE APPOINTMENT</button>
          <h1>Need Advice For Social Media Marketing?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div style={{ display: "flex", gap: "70px", marginTop: "22px" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              <div>
                <svg
                  fill="#ff6501"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 490 490"
                  xmlSpace="preserve"
                  stroke="#ff6501"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "></polygon>
                  </g>
                </svg>
              </div>
              <div>
                {" "}
                <p>Optimization Engine Rank</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div>
                <svg
                  fill="#ff6501"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 490 490"
                  xmlSpace="preserve"
                  stroke="#ff6501"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "></polygon>
                  </g>
                </svg>
              </div>
              <div>
                <p>Listen & Engage With Followers</p>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "44px", marginTop: "12px" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              <div>
                <svg
                  fill="#ff6501"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 490 490"
                  xmlSpace="preserve"
                  stroke="#ff6501"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "></polygon>
                  </g>
                </svg>
              </div>
              <div>
                <p>Higher Customer Satisfaction</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div>
                <svg
                  fill="#ff6501"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 490 490"
                  xmlSpace="preserve"
                  stroke="#ff6501"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "></polygon>
                  </g>
                </svg>
              </div>
              <div>
                <p>Research Your Market</p>
              </div>
            </div>
          </div>


          <div style={{display:"flex",gap:"60px",marginTop:"30px"}}>
            <div>
               <h4 style={{fontWeight:"bold"}}>Our Location</h4>
               <p>Jl. Raya Kuta No. 70, Badung</p>
            </div>
           <div className={servicescss.line}></div>
            <div>
             <h4 style={{fontWeight:"bold"}}>More Information</h4>
             <p>support@domain.com</p>
            </div>
          </div>
        </div>
      </div>
      <Ourprogress />
      <Testimonials />
      <div className={servicescss.servicessections2}>
      <div className={servicescss.sections2part1}>
        <button className="headerbtn1">FAQ</button>
        <h1>General Questions</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

       {/* question 1 */}
{/* Question 1 */}
<div className={servicescss.sectionquestion}>
        <div style={{ display: "flex" }}>
          <div className={servicescss.sections2questionq} style={{ color: showAnswers[0] ? "#ff6501" : "black", transition: "0.5s" }} onClick={() => toggleAnswer(0)}>
            What are the benefits of social media marketing for my company?
          </div>
          <div>
            <svg
              style={{ fill: showAnswers[0] ? "#ff6501" : "black", transition: "0.5s" }}
              className={servicescss.sections2question}
              onClick={() => toggleAnswer(0)}
              fill="#000000"
              height="15px"
              width="15px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
              transform="rotate(90)"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="2"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className={servicescss.sections2answer} style={{ transition: "1s", display: showAnswers[0] ? "block" : "none" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>

      {/* Question 2 */}
      <div className={servicescss.sectionquestion}>
        <div style={{ display: "flex" }}>
          <div className={servicescss.sections2questionq} style={{ color: showAnswers[1] ? "#ff6501" : "black", transition: "0.5s" }} onClick={() => toggleAnswer(1)}>
          Is social media marketing better for B2C or B2B businesses?          </div>
          <div>
            <svg
              style={{ fill: showAnswers[1] ? "#ff6501" : "black",}}
              className={servicescss.sections2question}
              onClick={() => toggleAnswer(1)}
              fill="#000000"
              height="15px"
              width="15px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
              transform="rotate(90)"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="2"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className={servicescss.sections2answer} style={{ transition: "1s", display: showAnswers[1] ? "block" : "none" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>

      {/* Question 3 */}
      <div className={servicescss.sectionquestion}>
        <div style={{ display: "flex" }}>
          <div className={servicescss.sections2questionq} style={{ color: showAnswers[2] ? "#ff6501" : "black", transition: "0.5s" }} onClick={() => toggleAnswer(2)}>
          Does my company really need a blog for social media marketing?
          </div>
          <div>
            <svg
              style={{ fill: showAnswers[2] ? "#ff6501" : "black", transition: "0.5s" }}
              className={servicescss.sections2question}
              onClick={() => toggleAnswer(2)}
              fill="#000000"
              height="15px"
              width="15px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
              transform="rotate(90)"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="2"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className={servicescss.sections2answer} style={{ transition: "1s", display: showAnswers[2] ? "block" : "none" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>

      {/* Question 4 */}
      <div className={servicescss.sectionquestion}>
        <div style={{ display: "flex" }}>
          <div className={servicescss.sections2questionq} style={{ color: showAnswers[3] ? "#ff6501" : "black", transition: "0.5s" }} onClick={() => toggleAnswer(3)}>
          Is social media marketing better for B2C or B2B businesses?          </div>
          <div>
            <svg
              style={{ fill: showAnswers[3] ? "#ff6501" : "black", transition: "0.5s" }}
              className={servicescss.sections2question}
              onClick={() => toggleAnswer(3)}
              fill="#000000"
              height="15px"
              width="15px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
              transform="rotate(90)"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="2"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className={servicescss.sections2answer} style={{ transition: "1s", display: showAnswers[3] ? "block" : "none" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>


      </div>
      <div className={servicescss.sections2part2}>
      <h5>Don't See The Answer You Need? Contact us</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <button>
        Contact Us
      </button>
      </div>
      
    </div>
      <Footer />
    </>
  );
}
