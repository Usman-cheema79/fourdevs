import React from 'react'
import "../Pages/Home.css"
export default function Testimonials() {
  return (
    <>
       <div className="section-7">
          <div className="section-7-header">
            <div className="section-7-header1">
              <button className="headerbtn1">TESTIMONIALS</button>
              <h2>What Client Says About FourDevs</h2>
            </div>
            <div className="section-7-header2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="section-7-body">
            <div className="section7-div1">
              <div className="section-7-textheadings">
                <div className="section7-perdiv">250%</div>
                <div className="">-Follower Growth</div>
              </div>
              <div className="section-7-textheadings">
                <div className="section7-perdiv">80%</div>
                <div className=""> -Increase Sales</div>
              </div>
              <div className="section-7-textheadings">
                <div className="section7-perdiv">140%</div>
                <div className=""> -Total Engagement</div>
              </div>
              <div className="section-7-textheadings">
                <div className="section7-perdiv">75% </div>
                <div className=""></div> -Income growth
              </div>
            </div>
            <div className="section7-div2">
              <img
                src="https://fourdevs.net/wp-content/uploads/2023/09/121.png"
                alt=""
              />
            </div>
            <div className="section7-div3">
              <h4>Fantastic Job Done by FourDevs</h4>
              <div style={{ display: "flex" }}>
                <div className="section7-div3-comasvg">
                  <svg
                    width="70px"
                    height="70px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="Edit / Double_Quotes_R">
                        {" "}
                        <path
                          id="Vector"
                          d="M16 17C17.6569 17 19 15.6569 19 14V12.0001M19 12.0001V8.59847C19 8.03951 19 7.7596 18.8911 7.5459C18.7952 7.35774 18.6419 7.20487 18.4537 7.10899C18.2398 7 17.9602 7 17.4001 7H15.6001C15.04 7 14.7598 7 14.5459 7.10899C14.3577 7.20487 14.2049 7.35774 14.109 7.5459C14 7.75981 14 8.04005 14 8.6001V10.4001C14 10.9602 14 11.2398 14.109 11.4537C14.2049 11.6419 14.3577 11.7952 14.5459 11.8911C14.7596 12 15.0395 12 15.5985 12L19 12.0001ZM7 17C8.65685 17 10 15.6569 10 14L10 12.0001M10 12.0001V8.59846C10 8.0395 10 7.7596 9.89111 7.5459C9.79524 7.35774 9.64186 7.20487 9.4537 7.10899C9.23979 7 8.96015 7 8.4001 7H6.6001C6.04005 7 5.75981 7 5.5459 7.10899C5.35774 7.20487 5.20487 7.35774 5.10899 7.5459C5 7.75981 5 8.04005 5 8.6001V10.4001C5 10.9602 5 11.2398 5.10899 11.4537C5.20487 11.6419 5.35774 11.7952 5.5459 11.8911C5.7596 12 6.0395 12 6.59845 12L10 12.0001Z"
                          stroke="#38374b"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <div className="section7-div3-text">
                  <i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididu ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation
                  </i>
                  <div>
                    <div style={{ opacity: "100%" }}>
                      <p1>Steve Prosser</p1>
                    </div>
                    <div>
                      <p2>CEO - Mindtech</p2>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
