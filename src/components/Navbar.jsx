import React from "react"
import Index from "./Context/IndexContext"

export default class Navbar extends React.Component {
  static contextType = Index

  state = {
    navbarToggle: true,
    checkboxToggle: false,
    activeToggle: 0,
    ID: {
      About: "Tentang Saya",
      Contact: "Kontak"
    },
    EN: {
      About: "About",
      Contact: "Contact"
    }
  }

  componentDidMount() {
    this.setState({
      activeToggle: this.context.index
    })
  }

  componentDidUpdate() {
    const class1 = document.getElementsByClassName("s1")
    const class2 = document.getElementsByClassName("s2")
    const class3 = document.getElementsByClassName("s3")
    const class4 = document.getElementsByClassName("s4")

    let a

    // Sidenav
    if (window.outerWidth < 998) {
      a = document.querySelectorAll(".side-nav a")
    } else {
      a = document.querySelectorAll("nav a")
    }

    if (this.state.activeToggle !== this.context.index) {
      switch (this.state.activeToggle) {
        case 0:
          for (let i = 0; i < class1.length; i++) {
            class1[i].classList.remove("active")
          }
          a[this.context.index].classList.add("active")
          this.setState({
            activeToggle: this.context.index
          })
          break
        case 1:
          for (let i = 0; i < class2.length; i++) {
            class2[i].classList.remove("active")
          }
          a[this.context.index].classList.add("active")
          this.setState({
            activeToggle: this.context.index
          })
          break
        case 2:
          for (let i = 0; i < class3.length; i++) {
            class3[i].classList.remove("active")
          }
          a[this.context.index].classList.add("active")
          this.setState({
            activeToggle: this.context.index
          })
          break
        case 3:
          for (let i = 0; i < class4.length; i++) {
            class4[i].classList.remove("active")
          }
          a[this.context.index].classList.add("active")
          this.setState({
            activeToggle: this.context.index
          })
          break
      }
    }
  }

  sectionForEachSmooth = (sections, index) => {
    sections.forEach((section, i) => {
      if (i === index) {
        section.scrollIntoView({
          behavior: "smooth"
        })
      }
    })
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

  toggleLang = e => {
    if (e.target.checked === this.state.checkboxToggle) {
      return
    } else {
      this.context.setLang(!this.context.toggleLang)
      this.setState({
        checkboxToggle: !this.context.toggleLang
      })
    }
  }

  onclick = index => {
    const sections = document.querySelectorAll("section")

    this.context.setIndex(index)
    window.setTimeout(() => {
      this.sectionForEachSmooth(sections, this.context.index)
    }, 10)
  }

  onSideClick = index => {
    const sections = document.querySelectorAll("section")

    this.toggleSlideMenu()
    this.context.setIndex(index)
    window.setTimeout(() => {
      this.sectionForEachSmooth(sections, this.context.index)
    }, 10)
  }

  render() {
    const { EN, ID } = this.state
    return (
      <div className="nav-container">
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark"
          id="nav-bg"
        >
          <button
            className="nav-link"
            role="button"
            onClick={() => this.onclick(0)}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <img src="/devKami.png" alt="logo.png" />
          </button>

          <ul className="navbar-nav ml-auto text-white">
            <li className="nav-item">
              <a
                className="nav-link s1 active"
                role="button"
                onClick={() => this.onclick(0)}
              >
                <strong>Home</strong>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link s2"
                role="button"
                onClick={() => this.onclick(1)}
              >
                <strong>{this.context.toggleLang ? EN.About : ID.About}</strong>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link s3"
                role="button"
                onClick={() => this.onclick(2)}
              >
                <strong>Portofolio</strong>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link s4"
                role="button"
                onClick={() => this.onclick(3)}
              >
                <strong>
                  {this.context.toggleLang ? EN.Contact : ID.Contact}
                </strong>
              </a>
            </li>
            <li className="nav-item">
              <div className="toggle-box">
                <div className="onoffswitch">
                  <input
                    type="checkbox"
                    name="onoffswitch"
                    className="onoffswitch-checkbox"
                    id="myonoffswitch"
                    onChange={e => this.toggleLang(e)}
                  />
                  <label className="onoffswitch-label" htmlFor="myonoffswitch">
                    <span className="onoffswitch-inner"></span>
                    <span className="onoffswitch-switch"></span>
                  </label>
                </div>
              </div>
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
        </nav>
        {/* INI SIDE MENU */}
        <div id="side-menu" className="side-nav">
          <button
            type="button"
            className="btn-close"
            onClick={() => this.toggleSlideMenu()}
          >
            &times;
          </button>

          <img src="/devKami.png" alt="logo" />
          <a
            className="nav-link s1 active"
            role="button"
            onClick={() => this.onSideClick(0)}
          >
            <strong>Home</strong>
          </a>
          <a
            className="nav-link s2"
            role="button"
            onClick={() => this.onSideClick(1)}
          >
            <strong>{this.context.toggleLang ? EN.About : ID.About}</strong>
          </a>
          <a
            className="nav-link s3"
            role="button"
            onClick={() => this.onSideClick(2)}
          >
            <strong>Portofolio</strong>
          </a>
          <a
            className="nav-link s4"
            role="button"
            onClick={() => this.onSideClick(3)}
          >
            <strong>{this.context.toggleLang ? EN.Contact : ID.Contact}</strong>
          </a>
          <div className="toggle-box">
            <div className="onoffswitch">
              <input
                type="checkbox"
                name="onoffswitch"
                className="onoffswitch-checkbox"
                id="myonoffswitch"
                onChange={e => this.toggleLang(e)}
              />
              <label className="onoffswitch-label" htmlFor="myonoffswitch">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
