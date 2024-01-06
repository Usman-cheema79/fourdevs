import React from 'react'
import "./NAvbar.css"
import img1 from "../img/img1.png"
export default function Navbar(props) {
  return (
  <>
  <div classNameName="container">
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <div>
    <a to="" className="navbar-brand" href="#"><img className="logo" src="https://fourdevs.net/wp-content/uploads/2023/09/FourDevs.png" alt="" /></a>
    </div>
    <div className="" id="">
      <ul className="navbar-nav nav-btn">
        <li className="nav-item">
          <a to="" className={`nav-link ${props.colour}`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item nav-link" href="#">Single Blog</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
    <div className='nav-phone'>
     <div>
     <img className="phone-logo-style"src={img1} alt="" />
     </div>
     <div>
            +92 321 4247 165
     </div>
    </div>
  </div>
</nav>
  </div>
  </>
  )
}
