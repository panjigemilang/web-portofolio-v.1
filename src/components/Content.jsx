import React, { Component } from "react"
import { Link } from "react-router-dom"
import Index from "./Context/IndexContext"
import { Animated } from "react-animated-css"

export default class Content extends Component {
  static contextType = Index

  constructor() {
    super()
    this.state = {
      judul: "",
      index: 0
    }
  }

  componentWillMount() {
    console.log("ini Context WILL MOUNT", this.context.index)
  }

  componentDidMount() {
    console.log("ini Context DID MOUNT", this.context.index)

    // set Overflow Body
    if (document.getElementsByTagName("body")) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
    }

    const sections = document.querySelectorAll("section")
    const up = document.querySelector("#up")
    const down = document.querySelector("#down")

    let lastTime = 0
    const animationDuration = 1000

    // Function for scroller
    const sectionForEachSmooth = index => {
      sections.forEach((section, i) => {
        if (i === index) {
          section.scrollIntoView({
            behavior: "smooth"
          })
        }
      })
    }

    const wheelHandler = e => {
      const delta = e.deltaY
      const currentTime = Date.now()

      if (currentTime - lastTime < animationDuration) {
        e.preventDefault()
        return
      }

      if (delta > 0) {
        const nextBtnClick = new Event("click")
        down.dispatchEvent(nextBtnClick)
      } else {
        const prevBtnClick = new Event("click")
        up.dispatchEvent(prevBtnClick)
      }

      lastTime = currentTime
    }

    const upHandler = () => {
      // this.setState({
      //   index: this.state.index - 1
      // })
      this.context.setIndex(this.context.index - 1)
      sectionForEachSmooth(this.context.index)
    }

    const downHandler = () => {
      // this.setState({
      //   index: this.state.index - 1
      // })
      this.context.setIndex(this.context.index + 1)
      sectionForEachSmooth(this.context.index)
    }

    const handleKeyPress = e => {
      switch (e.keyCode) {
        case 38:
          // if (this.state.index < 1) return
          if (this.context.index < 1) return
          upHandler()
          break
        case 40:
          // if (this.state.index > 2) return
          if (this.context.index > 2) return
          downHandler()
          break
      }
    }

    // Scroll Function
    up.addEventListener("click", e => {
      if (this.context.index < 1) return
      // this.setState({
      //   index: this.state.index - 1
      // })
      this.context.setIndex(this.context.index - 1)
      sectionForEachSmooth(this.context.index)
    })

    down.addEventListener("click", e => {
      if (this.context.index > 2) return
      // this.setState({
      //   index: this.state.index + 1
      // })
      this.context.setIndex(this.context.index + 1)
      sectionForEachSmooth(this.context.index)
    })

    // Wheel Event
    window.addEventListener("wheel", e => {
      wheelHandler(e)
    })

    // Key press
    window.addEventListener("keydown", e => handleKeyPress(e))
  }

  componentDidUpdate() {
    console.log("Context DID Update", this.context.index)
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
    window.removeEventListener("wheel", e => null)
    window.removeEventListener("keypress", e => null)
  }

  render() {
    const SectionOne = index => {
      return (
        <Animated
          animationInDelay={500}
          animationOutDelay={4000}
          isVisible={index == 0 ? false : true}
        >
          <div className="text">
            <h1 className="font-weight-bold display-4">Welcome.</h1>
            <h3>To a web developer website</h3>
          </div>
        </Animated>
      )
    }

    const SectionTwoImage = index => {
      return (
        <Animated
          animationInDelay={500}
          animationOutDelay={4000}
          isVisible={index == 1 ? false : true}
        >
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
        </Animated>
      )
    }

    const SectionTwoDesc = index => {
      return (
        <Animated
          animationIn="zoomIn"
          animationOut="zoomOut"
          animationInDelay={500}
          animationOutDelay={4000}
          isVisible={index !== 1 ? true : false}
        >
          <div className="desc-container">
            <h3 className="text-justify">
              &nbsp;&nbsp;Hello! my name is Panji Gemilang. I’m an Informatics
              Engineer at Brawijaya University semester 7th. I was born in
              Malang, December 3rd, 1998. I’m motivated about web development
              and android apps. I have great communication and great time
              management skill. You could say that I’m a religious person and
              it’s really helped me to control myself. <br />
              <br /> &nbsp; &nbsp;My current GPA is : 3.72
            </h3>
          </div>
        </Animated>
      )
    }

    const SectionThreeDev = index => {
      return (
        <Animated
          animationInDelay={500}
          animationOutDelay={4000}
          isVisible={index == 2 ? false : true}
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
                <span className="overlay-content">Developer Kami</span>
              </div>
            </Link>
          </div>
        </Animated>
      )
    }

    const SectionThreeDesa = index => {
      return (
        <Animated
          animationInDelay={700}
          animationOutDelay={4000}
          isVisible={index == 2 ? false : true}
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
                <span className="overlay-content">Desa Cerdas Bersahaja</span>
              </div>
            </Link>
          </div>
        </Animated>
      )
    }

    const SectionThreePtpnx = index => {
      return (
        <Animated
          animationInDelay={700}
          animationOutDelay={4000}
          isVisible={index == 2 ? false : true}
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
                <span className="overlay-content">PTPN X Djoembang</span>
              </div>
            </Link>
          </div>
        </Animated>
      )
    }

    return (
      <React.Fragment>
        <i className="fas fa-arrow-down" id="down" ref="down"></i>
        <i className="fas fa-arrow-up" id="up" ref="up"></i>
        <div className="wrapper-section">
          <section id="section1">
            <div className="gunung1"></div>
            <div className="gunung2"></div>
            <div className="awan"></div>
            <SectionOne index={this.context.index}></SectionOne>
          </section>
          <section id="section2">
            <div className="text">
              <div className="text-center row">
                <h3 className="display-4 mr-auto ml-auto">About Me</h3>
              </div>
              <br />

              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <SectionTwoImage index={this.context.index}></SectionTwoImage>
                </div>
                <div className="col-lg-6 col-md-12">
                  <SectionTwoDesc index={this.context.index}></SectionTwoDesc>
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
                  <SectionThreeDev index={this.context.index}></SectionThreeDev>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <SectionThreeDesa
                    index={this.context.index}
                  ></SectionThreeDesa>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <SectionThreePtpnx
                    index={this.context.index}
                  ></SectionThreePtpnx>
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
      </React.Fragment>
    )
  }
}
