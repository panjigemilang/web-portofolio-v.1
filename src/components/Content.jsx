import React, { Component } from "react"
import { Link } from "react-router-dom"
import Index from "./Context/IndexContext"
import { Animated } from "react-animated-css"

var lastTime = 0

export default class Content extends Component {
  static contextType = Index

  constructor() {
    super()
    this.state = {
      judul: ""
    }
  }

  componentDidMount() {
    // set Overflow Body
    if (document.getElementsByTagName("body")) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
    }

    const sections = document.querySelectorAll("section")
    const up = document.querySelector("#up")
    const down = document.querySelector("#down")

    // Scroll Function
    up.addEventListener("click", e => {
      if (this.context.index < 1) return
      if (e.isTrusted) {
        this.context.setIndex(this.context.index - 1)
        this.sectionForEachSmooth(sections, this.context.index)
      } else {
        this.context.setIndex(this.context.index - 1)
        window.setTimeout(() => {
          this.sectionForEachSmooth(sections, this.context.index)
        }, 10)
      }
    })

    down.addEventListener("click", e => {
      if (this.context.index > 2) return
      if (e.isTrusted) {
        this.context.setIndex(this.context.index + 1)
        this.sectionForEachSmooth(sections, this.context.index)
      } else {
        this.context.setIndex(this.context.index + 1)
        window.setTimeout(() => {
          this.sectionForEachSmooth(sections, this.context.index)
        }, 10)
      }
    })
  }

  sectionForEachSmooth = (sections, index) => {
    sections.forEach((section, i) => {
      if (i === index) {
        console.log("INI SECTION NJING", section)

        section.scrollIntoView({
          behavior: "smooth"
        })
      }
    })
  }

  wheelHandler = e => {
    const currentTime = Date.now()
    const up = document.querySelector("#up")
    const down = document.querySelector("#down")
    const animationDuration = 1000

    if (currentTime - lastTime < animationDuration) {
      e.preventDefault()
      return
    }

    if (e.deltaY > 0) {
      const nextBtnClick = new Event("click")
      down.dispatchEvent(nextBtnClick)
    } else {
      const prevBtnClick = new Event("click")
      up.dispatchEvent(prevBtnClick)
    }

    lastTime = currentTime
  }

  upHandler = sections => {
    if (this.context.index < 1) return
    this.context.setIndex(this.context.index - 1)
    window.setTimeout(() => {
      this.sectionForEachSmooth(sections, this.context.index)
    }, 10)
  }

  downHandler = sections => {
    if (this.context.index > 2) return
    this.context.setIndex(this.context.index + 1)
    window.setTimeout(() => {
      this.sectionForEachSmooth(sections, this.context.index)
    }, 10)
  }

  handleKeyPress = e => {
    const currentTime = Date.now()
    const animationDuration = 1000
    const sections = document.querySelectorAll("section")

    switch (e.keyCode) {
      case 38:
        if (currentTime - lastTime < animationDuration) {
          e.preventDefault()
          return
        }
        if (this.context.index < 1) return
        this.upHandler(sections)
        lastTime = currentTime
        break
      case 40:
        if (currentTime - lastTime < animationDuration) {
          e.preventDefault()
          return
        }
        if (this.context.index > 2) return
        this.downHandler(sections)
        lastTime = currentTime
        break
    }
  }

  componentDidUpdate() {
    // Arrow Showing
    if (this.context.index < 1) {
      this.refs.up.style.opacity = 0
      this.refs.down.style.opacity = 1
    } else if (this.context.index > 2) {
      this.refs.up.style.opacity = 1
      this.refs.down.style.opacity = 0
    } else {
      this.refs.up.style.opacity = 1
      this.refs.down.style.opacity = 1
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", e => {}, true)
  }

  render() {
    return (
      <div
        onWheel={e => this.wheelHandler(e)}
        onKeyDown={e => this.handleKeyPress(e)}
        tabIndex={0}
        ref="scroll"
        className="main"
      >
        <i className="fas fa-arrow-up" id="up" ref="up"></i>
        <i className="fas fa-arrow-down" id="down" ref="down"></i>
        <div className="wrapper-section">
          <section id="section1">
            <div className="gunung1"></div>
            <div className="gunung2"></div>
            <div className="awan"></div>
            <Animated
              isVisible={this.context.index !== 0 ? false : true}
              animationIn="fadeIn"
              animationInDelay={500}
              animationOutDelay={500}
            >
              <div className="text">
                <h1 className="font-weight-bold display-4">Welcome.</h1>
                <h3>To a web developer website</h3>
              </div>
            </Animated>
          </section>
          <section id="section2">
            <div className="text">
              <div className="text-center row">
                <h3 className="display-4 mr-auto ml-auto">About Me</h3>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <Animated
                    animationIn="bounceInLeft"
                    animationOutDelay={500}
                    animationInDelay={500}
                    isVisible={this.context.index !== 1 ? false : true}
                  >
                    <div className="img-box">
                      <img
                        src={require("../img/IMG_5415.jpg")}
                        alt="foto.jpg"
                      />
                      <div className="text-content-container">
                        <div className="text-content">
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
                  </Animated>
                </div>
                <div className="col-lg-6 col-md-12">
                  <Animated
                    animationIn="bounceInRight"
                    animationOutDelay={500}
                    animationInDelay={800}
                    isVisible={this.context.index !== 1 ? false : true}
                  >
                    <div className="desc-container">
                      <h3 className="text-justify">
                        &nbsp;&nbsp;Hello! my name is Panji Gemilang. I’m an
                        Informatics Engineer at Brawijaya University semester
                        7th. I was born in Malang, December 3rd, 1998. I’m
                        motivated about web development and android apps. I have
                        great communication and great time management skill. You
                        could say that I’m a religious person and it’s really
                        helped me to control myself. <br />
                        <br /> &nbsp; &nbsp;My current GPA is : 3.72
                      </h3>
                    </div>
                  </Animated>
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
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <Animated
                    animationIn="fadeInDownBig"
                    animationOutDelay={500}
                    isVisible={this.context.index !== 2 ? false : true}
                  >
                    <div className="card-custom">
                      <img
                        src={require("../img/devKami.jpg")}
                        alt="foto.jpg"
                        width="50px"
                        heigth="20px"
                      />
                      <Link to="/post/devkami" role="button">
                        <div className="overlay">
                          <span className="overlay-content">
                            Developer Kami
                          </span>
                        </div>
                      </Link>
                    </div>
                  </Animated>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <Animated
                    animationIn="fadeInDownBig"
                    animationInDelay={300}
                    animationOutDelay={500}
                    isVisible={this.context.index !== 2 ? false : true}
                  >
                    <div className="card-custom">
                      <img
                        src={require("../img/desacerdas.jpg")}
                        alt="foto.jpg"
                        width="50px"
                        heigth="20px"
                      />
                      <Link to="/post/desa-cerdas-bersahaja" role="button">
                        <div className="overlay">
                          <span className="overlay-content">Desa Cerdas</span>
                        </div>
                      </Link>
                    </div>
                  </Animated>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <Animated
                    animationIn="fadeInDownBig"
                    animationInDelay={600}
                    animationOutDelay={500}
                    isVisible={this.context.index !== 2 ? false : true}
                  >
                    <div className="card-custom">
                      <img
                        src={require("../img/ptpnxdj.jpg")}
                        alt="foto.jpg"
                        width="50px"
                        heigth="20px"
                      />
                      <Link to="/post/ptpnx-djoembang" role="button">
                        <div className="overlay">
                          <span className="overlay-content">PTPN X</span>
                        </div>
                      </Link>
                    </div>
                  </Animated>
                </div>
              </div>
            </div>
          </section>
          <section id="section4">
            <div className="text">
              <h1>Contact Me</h1>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Animated
                    animationIn="bounceInLeft"
                    animationInDelay={500}
                    animationOutDelay={500}
                    isVisible={this.context.index !== 3 ? false : true}
                  >
                    <span className="fas fa-envelope"></span>
                    &nbsp;panjigemilang31298@gmail.com
                  </Animated>
                </li>
                <li>
                  <Animated
                    animationIn="bounceInLeft"
                    animationInDelay={800}
                    animationOutDelay={500}
                    isVisible={this.context.index !== 3 ? false : true}
                  >
                    <span className="fas fa-phone"></span>
                    &nbsp;+628980789580
                  </Animated>
                </li>
                <li>
                  <Animated
                    animationIn="bounceInLeft"
                    animationInDelay={1000}
                    animationOutDelay={500}
                    isVisible={this.context.index !== 3 ? false : true}
                  >
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
                  </Animated>
                </li>
              </ul>
              <footer>
                <p id="copyright">&copy;Panji Gemilang 2019. Beta_v.0.5.1</p>
              </footer>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
