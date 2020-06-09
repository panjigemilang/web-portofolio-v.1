import React, { Component } from "react"
import { Link } from "react-router-dom"
import Index from "./Context/IndexContext"
import { Animated } from "react-animated-css"

var lastTime = 0,
  touchStart = 0

export default class Content extends Component {
  static contextType = Index

  constructor() {
    super()
    this.state = {
      judul: "",
      IDContent: {
        S1_Title: "Selamat Datang",
        S1_Desc: "di website Panji Gemilang",
        S1_Desc2: "Pengembang aplikasi website",
        S2_Title: "Tentang Saya",
        S2_Desc:
          "Halo! Nama saya Panji Gemilang. Saya seorang mahasiswa teknik Informatika Universitas Brawijaya semester 7. Saya lahir di Malang, 03 Desember, 1998.",
        S2_Desc2:
          "Saya sangat termotivasi tentang pengembangan website dan aplikasi android serta mengikuti perkembangan teknologi. Saya memiliki pengalaman bekerja dalam tim dan menjadi projek manajer untuk memimpin sebuah projek website dan aplikasi android. Saya termasuk orang yang religius dan hal ini sangat membantu saya untuk mengontrol diri saya.",
        S2_GPA: "IPK saya saat ini : 3.72",
        S4_Title: "Hubungi Saya",
        S4_Desc: "Lihat CV saya disini!",
        S4_Link: "https://www.docdroid.net/i0chlcz/cv-may-2020-pdf",
      },
      ENContent: {
        S1_Title: "Welcome",
        S1_Desc: "To the Panji Gemilang website",
        S1_Desc2: "Website developer",
        S2_Title: "About Me",
        S2_Desc:
          "Hello! my name is Panji Gemilang. I’m an Informatics Engineer at Brawijaya University semester 7th. I was born in Malang, December 3rd, 1998.",
        S2_Desc2:
          "I’m motivated about web development and android apps. I have great communication and great time management skill. I have experiences working on a team and lead a project about website and android apps. You can say that I’m a religious person and it’s really helped me to control myself.",
        S2_GPA: "My current GPA is : 3.72",
        S4_Title: "Contact Me",
        S4_Desc: "Look at my CV here!",
        S4_Link: "https://www.docdroid.net/i0chlcz/cv-may-2020-pdf",
      },
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
    up.addEventListener("click", (e) => {
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

    down.addEventListener("click", (e) => {
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

    // First init
    window.setTimeout(() => {
      this.sectionForEachSmooth(sections, this.context.index)
    }, 10)
  }

  sectionForEachSmooth = (sections, index) => {
    sections.forEach((section, i) => {
      if (i === index) {
        section.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  }

  wheelHandler = (e) => {
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

  upHandler = (sections) => {
    if (this.context.index < 1) return
    this.context.setIndex(this.context.index - 1)
    window.setTimeout(() => {
      this.sectionForEachSmooth(sections, this.context.index)
    }, 10)
  }

  downHandler = (sections) => {
    if (this.context.index > 2) return
    this.context.setIndex(this.context.index + 1)
    window.setTimeout(() => {
      this.sectionForEachSmooth(sections, this.context.index)
    }, 10)
  }

  handleKeyPress = (e) => {
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

  handleTouchStart(e) {
    touchStart = e.touches[0].clientY
  }

  handleToucheEnd(e) {
    const currentTime = Date.now()
    const animationDuration = 1000
    const sections = document.querySelectorAll("section")

    if (touchStart - e.touches[0].clientY > 110) {
      // Down
      if (currentTime - lastTime < animationDuration) {
        e.preventDefault()
        return
      }
      this.downHandler(sections)
      lastTime = currentTime
    } else if (touchStart - e.touches[0].clientY < -110) {
      // Up
      if (currentTime - lastTime < animationDuration) {
        e.preventDefault()
        return
      }
      this.upHandler(sections)
      lastTime = currentTime
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

  render() {
    const { IDContent, ENContent } = this.state

    return (
      <div
        onWheel={(e) => this.wheelHandler(e)}
        onKeyDown={(e) => this.handleKeyPress(e)}
        onTouchStart={(e) => this.handleTouchStart(e)}
        onTouchMove={(e) => this.handleToucheEnd(e)}
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
                <h1 className="font-weight-bolder display-4">
                  {this.context.toggleLang
                    ? ENContent.S1_Title
                    : IDContent.S1_Title}
                </h1>
                <h3>
                  {this.context.toggleLang
                    ? ENContent.S1_Desc
                    : IDContent.S1_Desc}
                </h3>
                <h4>
                  {this.context.toggleLang
                    ? ENContent.S1_Desc2
                    : IDContent.S1_Desc2}
                </h4>
              </div>
            </Animated>
          </section>
          <section id="section2">
            <div className="text">
              <div className="text-center row">
                <h3 className="display-4 mr-auto ml-auto font-weight-bolder">
                  {this.context.toggleLang
                    ? ENContent.S2_Title
                    : IDContent.S2_Title}
                </h3>
              </div>
              <br />
              <div className="row d-md-block wrapper-about">
                <div className="col-6 col-md-6 float-left">
                  <Animated
                    animationIn="bounceInLeft"
                    animationOutDelay={500}
                    animationInDelay={500}
                    isVisible={this.context.index !== 1 ? false : true}
                  >
                    <div className="img-box">
                      <img src="/pp1.jpg" alt="foto.jpg" />
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
                <div className="col-6 col-md-6 float-left">
                  <Animated
                    animationIn="bounceInRight"
                    animationOutDelay={500}
                    animationInDelay={800}
                    isVisible={this.context.index !== 1 ? false : true}
                  >
                    <div className="desc-container">
                      <h5 className="text-justify">
                        &nbsp;&nbsp;
                        {this.context.toggleLang
                          ? ENContent.S2_Desc
                          : IDContent.S2_Desc}
                      </h5>
                    </div>
                  </Animated>
                </div>
                <div className="col-12 col-md-6 float-left text-justify desc2">
                  <Animated
                    animationIn="bounceInRight"
                    animationOutDelay={500}
                    animationInDelay={800}
                    isVisible={this.context.index !== 1 ? false : true}
                  >
                    <span className="desc2">
                      &nbsp; &nbsp;
                      {this.context.toggleLang
                        ? ENContent.S2_Desc2
                        : IDContent.S2_Desc2}
                      <br />
                      &nbsp; &nbsp;
                      {this.context.toggleLang
                        ? ENContent.S2_GPA
                        : IDContent.S2_GPA}
                    </span>
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
                  <h1 class="title">Portofolio</h1>
                </div>
              </div>
              <div className="row portofolio">
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
                        <div className="overlay-content">Developer Kami</div>
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
                        <div className="overlay-content">Desa Cerdas</div>
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
                        <div className="overlay-content">PTPN X</div>
                      </Link>
                    </div>
                  </Animated>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 offset-lg-2">
                  <Animated
                    animationIn="fadeInDownBig"
                    animationInDelay={800}
                    animationOutDelay={500}
                    isVisible={this.context.index !== 2 ? false : true}
                  >
                    <div className="card-custom">
                      <Link to="/post/fkhapps" role="button">
                        <img
                          src={require("../img/fkh-login.png")}
                          alt="foto.jpg"
                          width="50px"
                          heigth="20px"
                        />
                        <div className="overlay-content">FKH Apps</div>
                      </Link>
                    </div>
                  </Animated>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <Animated
                    animationIn="fadeInDownBig"
                    animationInDelay={1000}
                    animationOutDelay={500}
                    isVisible={this.context.index !== 2 ? false : true}
                  >
                    <div className="card-custom">
                      <img
                        className="last"
                        src={require("../img/papa-home.png")}
                        alt="foto.jpg"
                        width="50px"
                        heigth="20px"
                      />
                      <div className="overlay-content" style={{ top: "30%" }}>
                        Papa Blog <p>(Work in Progress)</p>
                      </div>
                    </div>
                  </Animated>
                </div>
              </div>
            </div>
          </section>
          <section id="section4">
            <div className="text">
              <h1 className="font-weight-bolder">
                {this.context.toggleLang
                  ? ENContent.S4_Title
                  : IDContent.S4_Title}
              </h1>
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
                      style={{ color: "inherit", textDecoration: "underline" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Panji Gemilang
                    </a>
                  </Animated>
                </li>
                <li>
                  <Animated
                    animationIn="bounceInLeft"
                    animationInDelay={1300}
                    animationOutDelay={500}
                    isVisible={this.context.index !== 3 ? false : true}
                  >
                    <span className="fas fa-file"></span>
                    &nbsp;
                    <a
                      href={
                        this.context.toggleLang
                          ? ENContent.S4_Link
                          : IDContent.S4_Link
                      }
                      role="button"
                      style={{ color: "inherit" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {this.context.toggleLang
                        ? ENContent.S4_Desc
                        : IDContent.S4_Desc}
                    </a>
                  </Animated>
                </li>
              </ul>
            </div>
            <footer>
              <p id="copyright">
                &copy;&nbsp;Panji Gemilang 2019. All Rights Reserved
              </p>
            </footer>
          </section>
        </div>
      </div>
    )
  }
}
