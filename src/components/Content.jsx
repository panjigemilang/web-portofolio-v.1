import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Content extends Component {
  constructor() {
    super()
    this.state = {
      judul: "",
      sections: [],
      up: null,
      down: null,
      index: 0,
      lastTime: 0,
      animationDuration: 1000
    }
  }

  componentDidMount() {
    this.setState({
      section: document.querySelectorAll("section"),
      up: document.querySelector("#up"),
      down: document.querySelector("#down")
    })

    console.log("Tipe sections", this.state.sections)

    // Key press
    document.addEventListener("keydown", e => this.handleKeyPress(e))

    // Wheel
    document.addEventListener("wheel", e => this.handleWheel(e))
  }

  displayArrow = (index, sections) => {
    if (index < 1) {
      this.state.up.style.opacity = 0
    } else if (index > sections.length - 2) {
      this.state.down.style.opacity = 0
    } else {
      this.state.up.style.opacity = 1
      this.state.down.style.opacity = 1
    }
  }

  sectionForEachSmooth = index => {
    this.toggleText(index, "show")
    this.state.sections.forEach((section, i) => {
      if (i === index) {
        section.scrollIntoView({
          behavior: "smooth"
        })
        this.displayArrow(index, this.state.sections)
      }
    })
  }

  sectionForEachToggleText = condition =>
    this.state.sections.forEach((section, i) => {
      if (condition === true) {
        if (i === this.state.index) {
          section.querySelector(".text").classList.add("show")
        }
      } else {
        if (i === this.state.index) {
          section.querySelector(".text").classList.remove("show")
        }
      }
    })

  toggleText = (i, state) => {
    state === "show"
      ? this.sectionForEachToggleText(true)
      : this.sectionForEachToggleText(false)
  }

  handleKeyPress = e => {
    switch (e.keyCode) {
      case 38:
        if (this.state.index < 1) return
        this.toggleText(this.state.index, "hide")
        this.setState({
          index: this.state.index - 1
        })
        this.sectionForEachSmooth(this.state.index)
        break
      case 40:
        if (this.state.index > 2) return
        this.toggleText(this.state.index, "hide")
        this.setState({
          index: this.state.index + 1
        })
        this.sectionForEachSmooth(this.state.index)
        break
    }
  }

  handleWheel = e => {
    const delta = e.wheelDelta
    const currentTime = Date.now()

    if (currentTime - this.state.lastTime < this.state.animationDuration) {
      e.preventDefault()
      return
    }

    if (delta < 0) {
      const nextBtnClick = new Event("click")
      this.state.down.dispatchEvent(nextBtnClick)
    } else {
      const prevBtnClick = new Event("click")
      this.state.up.dispatchEvent(prevBtnClick)
    }
    this.state.lastTime = currentTime
  }

  onClick(e, judul) {
    e.preventDefault()

    switch (judul.toLowerCase()) {
      case "devkami":
        this.setState({ judul: judul })
        break
      case "desa-cerdas-bersahaja":
        this.setState({ judul: judul })
        break
      case "ptpnx-djoembang":
        this.setState({ judul: judul })
        break
      default:
        window.alert("Ngaco gayn")
    }
  }

  render() {
    return (
      <main className="index">
        <i className="fas fa-arrow-up" id="up"></i>
        <i className="fas fa-arrow-down" id="down"></i>
        <div className="wrapper-section">
          <section id="section1">
            <div className="gunung1"></div>
            <div className="gunung2"></div>
            <div className="awan"></div>
            <div className="text">
              <h1 className="font-weight-bold display-4">Welcome.</h1>
              <h3>To a web developer website</h3>
            </div>
          </section>
          <section id="section2">
            <div className="text">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="img-box">
                    <img src={require("../img/IMG_5415.jpg")} alt="foto.jpg" />
                    <div className="text-content-container">
                      <div className="text-content">
                        <h2>Hover Me!</h2>
                        <h1>Panji Gemilang</h1>
                        <p>
                          Web Developer.
                          <br />
                          <span style={{ color: " aqua" }}> ReactJS </span>
                          &nbsp;
                          <span style={{ color: " #96c996" }}>Node JS</span>
                          &nbsp; Expressjs &nbsp;
                          <span style={{ color: " #69db69" }}>MongoDB</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="desc-container">
                    <h3 className="text-justify">
                      &nbsp;&nbsp;Hello! my name is Panji Gemilang. I’m an
                      Informatics Engineer at Brawijaya University semester 7th.
                      I was born in Malang, December 3rd, 1998. I’m motivated
                      about web development and android apps. I have great
                      communication and great time management skill. You could
                      say that I’m a religious person and it’s really helped me
                      to control myself. <br />
                      <br /> &nbsp; &nbsp;My current GPA is : 3.72
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="section3">
            <div className="text">
              <div className="row">
                <div className="container">
                  <br />
                  <br />
                  <br />
                  <h1>Portofolio</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card-custom">
                    <img
                      src={require("../img/devKami.jpg")}
                      alt="foto.jpg"
                      width="50px"
                      heigth="20px"
                    />
                    <Link
                      to={`/post/${this.state.judul}`}
                      role="button"
                      onMouseEnter={e => this.onClick(e, "devkami")}
                    >
                      <div className="overlay">
                        <span className="overlay-content">Developer Kami</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card-custom">
                    <img
                      src={require("../img/desacerdas.jpg")}
                      alt="foto.jpg"
                      width="50px"
                      heigth="20px"
                    />
                    <Link
                      to={`/post/${this.state.judul}`}
                      role="button"
                      onMouseEnter={e =>
                        this.onClick(e, "desa-cerdas-bersahaja")
                      }
                    >
                      <div className="overlay">
                        <span className="overlay-content">
                          Desa Cerdas Bersahaja
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card-custom">
                    <img
                      src={require("../img/ptpnxdj.jpg")}
                      alt="foto.jpg"
                      width="50px"
                      heigth="20px"
                    />
                    <Link
                      to={`/post/${this.state.judul}`}
                      role="button"
                      onMouseEnter={e => this.onClick(e, "ptpnx-djoembang")}
                    >
                      <div className="overlay">
                        <span className="overlay-content">
                          PTPN X Djoembang
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="section4">
            <div className="text">
              <h1>Contact Me</h1>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <span className="fas fa-envelope"></span>
                  &nbsp;panjigemilang31298@gmail.com
                </li>
                <li>
                  <span className="fas fa-phone"></span>
                  &nbsp;+628980789580
                </li>
                <li>
                  <span className="fab fa-linkedin-in"></span>
                  &nbsp;
                  <a
                    href="https://linkedin.com/in/panji-g"
                    role="button"
                    style={{ color: "inherit" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Panji Gemilang
                  </a>
                </li>
              </ul>
              <footer>
                <p id="copyright">&copy;Panji Gemilang 2019. Beta_v.0.5.1</p>
              </footer>
            </div>
          </section>
        </div>
      </main>
    )
  }
}
