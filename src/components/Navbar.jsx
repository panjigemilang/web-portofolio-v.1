import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"

export default function Navbar() {
  const [navbarToggle, setNavbarToggle] = React.useState(true)

  const toggleSlideMenu = () => {
    setNavbarToggle(!navbarToggle)

    if (navbarToggle) {
      openSLideMenu()
    } else {
      closeSlideMenu()
    }
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const openSLideMenu = () => {
    document.getElementById("side-menu").style.width = "250px"
    document.querySelector("#side-menu > a").style.transition = "1s ease-in"
    document.querySelector("#side-menu > a").style.animation = "5s ease-in"
    document.querySelector("#side-menu > a").style.display = "block"
  }

  const closeSlideMenu = () => {
    document.getElementById("side-menu").style.width = "0"
    document.querySelector("#side-menu > a").style.transition = "0.5s ease-out"
    document.querySelector("#side-menu > a").style.animation = "5s ease-out"
    document.querySelector("#side-menu > a").style.display = "none"
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="nav-bg">
        <Link
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-brand"
        >
          <img src={require("../img/devKami.png")} alt="logo.png" />
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              <strong>Home</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              <strong>About</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              <strong>Portofolio</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              <strong>Contact</strong>
            </Link>
          </li>
        </ul>

        {/* INI TOMBOL COLLAPSE */}
        <button
          className="open-slide ml-auto"
          type="button"
          onClick={() => toggleSlideMenu()}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* INI SIDE MENU */}
        <div id="side-menu" className="side-nav">
          <button
            type="button"
            className="btn-close"
            onClick={() => toggleSlideMenu()}
          >
            &times;
          </button>

          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => toggleSlideMenu()}
          >
            <strong>Home</strong>
          </Link>
          <Link
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => toggleSlideMenu()}
          >
            <strong>About</strong>
          </Link>
          <Link
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => toggleSlideMenu()}
          >
            <strong>Portofolio</strong>
          </Link>
          <Link
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => toggleSlideMenu()}
          >
            <strong>Contact</strong>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  )
}
