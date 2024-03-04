import React from 'react'
import hcss from "./Header.module.css"
export default function Header(props) {
  return (
    <>
    <div className="contaainer">
      <div className={hcss.headersection}>
       <h1>{props.title}</h1>
       <div className={hcss.pagereferance}>
        <div><a className={hcss.homelink} href='/'>Home</a></div>
        <div>  <svg
    fill="#fe6401"
    height="14px"
    width="14px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 330.002 330.002"
    xmlSpace="preserve"
    stroke="#fe6401"
    strokeWidth="27.060163999999997"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        id="XMLID_103_"
        d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21 l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001 c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"
      ></path>
    </g>
  </svg>
</div>
        <div><a className={hcss.homelink} href=''>{props.pagename}</a></div>
        </div>
      </div>
    </div>
    </>
  )
}
