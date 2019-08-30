import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Content extends Component {
  constructor() {
    super()
    this.state = {
      judul: ""
    }
  }

  componentDidMount() {
    const sections = document.querySelectorAll("section")
    const up = document.querySelector("#up")
    const down = document.querySelector("#down")

    let index = 0
    // let lastTime = 0
    // const animationDuration = 1000

    // Function for scroller
    const displayArrow = (index, sections) => {
      if (index < 1) {
        up.style.opacity = 0
      } else if (index > sections.length - 2) {
        down.style.opacity = 0
      } else {
        up.style.opacity = 1
        down.style.opacity = 1
      }
    }

    const sectionForEachSmooth = index => {
      toggleText(index, "show")
      sections.forEach((section, i) => {
        if (i === index) {
          section.scrollIntoView({
            behavior: "smooth"
          })
          displayArrow(index, sections)
        }
      })
    }

    const sectionForEachToggleText = condition =>
      sections.forEach((section, i) => {
        if (condition === true) {
          if (i === index) {
            section.querySelector(".text").classList.add("show")
          }
        } else {
          if (i === index) {
            section.querySelector(".text").classList.remove("show")
          }
        }
      })

    const toggleText = (i, state) => {
      state === "show"
        ? sectionForEachToggleText(true)
        : sectionForEachToggleText(false)
    }

    // const handleKeyPress = e => {
    //   console.log("Index di KEYPRESS", index)

    //   switch (e.keyCode) {
    //     case 38:
    //       if (index < 1) return
    //       toggleText(index, "hide")
    //       index--
    //       sectionForEachSmooth(index)
    //       break
    //     case 40:
    //       if (index > 2) return
    //       toggleText(index, "hide")
    //       index++
    //       sectionForEachSmooth(index)
    //       break
    //   }
    // }

    // const handleWheel = e => {
    //   console.log("Index di WHEEL", index)

    //   const delta = e.wheelDelta
    //   const currentTime = Date.now()

    //   if (currentTime - lastTime < animationDuration) {
    //     e.preventDefault()
    //     return
    //   }

    //   if (delta < 0) {
    //     const nextBtnClick = new Event("click")
    //     console.log("ini ada kaga si", nextBtnClick)

    //     down.dispatchEvent(nextBtnClick)
    //   } else {
    //     const prevBtnClick = new Event("click")
    //     up.dispatchEvent(prevBtnClick)
    //   }
    //   lastTime = currentTime
    // }

    // default state
    toggleText(0, "show")
    displayArrow(0, sections)

    // Key press
    // window.addEventListener("keydown", e => handleKeyPress(e))

    // Scroll Function
    up.addEventListener("click", e => {
      if (index < 1) return
      toggleText(index, "hide")
      index--
      sectionForEachSmooth(index)
    })

    down.addEventListener("click", e => {
      if (index > 2) return
      toggleText(index, "hide")
      index++
      sectionForEachSmooth(index)
    })
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

  // Wheel
  // window.addEventListener("wheel", e => handleWheel(e))

  // Loader function
  // window.addEventListener("load", () => {
  // })
  // OnCLick

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
