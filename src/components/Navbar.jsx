import React from "react"
import { Link } from "react-scroll"
import Index from "./Context/IndexContext"

export default class Navbar extends React.Component {
  static contextType = Index

  state = {
    navbarToggle: true
  }

  toggleSlideMenu = () => {
    this.setState({
      navbarToggle: !this.state.navbarToggle
    })

    if (this.state.navbarToggle) {
      this.openSLideMenu()
    } else {
      this.closeSlideMenu()
    }
  }

  openSLideMenu = () => {
    document.getElementById("side-menu").style.width = "250px"
    document.querySelector("#side-menu a").style.opacity = 1
  }

  closeSlideMenu = () => {
    document.getElementById("side-menu").style.width = "0"
    document.querySelector("#side-menu a").style.opacity = 0
  }

  onclick = index => {
    this.context.setIndex(index)
  }

  onSideClick = index => {
    this.toggleSlideMenu()
    this.context.setIndex(index)
  }

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark"
          id="nav-bg"
        >
          <Link
            to="section1"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-brand"
            onClick={() => this.onclick(0)}
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
                duration={500}
                className="nav-link"
                onClick={() => this.onclick(0)}
              >
                <strong>Home</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="section2"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => this.onclick(1)}
              >
                <strong>About</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="section3"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => this.onclick(2)}
              >
                <strong>Portofolio</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="section4"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => this.onclick(3)}
              >
                <strong>Contact</strong>
              </Link>
            </li>
          </ul>

          {/* INI TOMBOL COLLAPSE */}
          <button
            className="open-slide ml-auto"
            type="button"
            onClick={() => this.toggleSlideMenu()}
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* INI SIDE MENU */}
          <div id="side-menu" className="side-nav">
            <button
              type="button"
              className="btn-close"
              onClick={() => this.toggleSlideMenu()}
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
              onClick={() => this.onSideClick(0)}
            >
              <strong>Home</strong>
            </Link>
            <Link
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => this.onSideClick(1)}
            >
              <strong>About</strong>
            </Link>
            <Link
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => this.onSideClick(2)}
            >
              <strong>Portofolio</strong>
            </Link>
            <Link
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => this.toggleSlideMenu(3)}
            >
              <strong>Contact</strong>
            </Link>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}
