import React from "react"

export default function Item(props) {
  let [content, setContent] = React.useState("")

  // import image
  const devKami = require("../img/devKami.jpg")
  const desa = require("../img/desacerdas.jpg")
  const ptpnx = require("../img/ptpnxdj.jpg")
  const presentasi = require("../img/presentasi1.jpg")
  const presentasi2 = require("../img/ptpnx1.jpg")

  React.useEffect(() => {
    if (document.getElementsByTagName("body")) {
      document.getElementsByTagName("body")[0].style.overflow = "auto"
    }

    switch (props.match.params.post_judul) {
      case "devkami":
        setContent(
          <div className="item-container">
            <div className="row">
              <div className="content container">
                <br />
                <h1 className="text-center font-weight-bolder">Dev Kami</h1>
                <img src={devKami} alt="header.jpg" />
                <p>
                  &nbsp;&nbsp;This is my first website using React JS framework.
                  Dev Kami is a website to connects developer all around the
                  world. This website has functionality like the following :
                </p>
                <ul style={{ listStyle: "none" }}>
                  <li>1. Register</li>
                  <li>2. Login</li>
                  <li>3. Create a profile</li>
                  <li>4. Create an educations and experiences</li>
                  <li>5. Make a post</li>
                  <li>6. Make a comment</li>
                  <li>7. Like a comment</li>
                  <li>8. Dislike a comment</li>
                </ul>
                <p>
                  &nbsp;&nbsp;This project was built using the following
                  programming languages and frameworks :
                </p>
                <ul>
                  <li className="font-weight-bolder">React JS</li>
                  <li className="font-weight-bolder">Expressjs</li>
                  <li className="font-weight-bolder">Node JS</li>
                  <li className="font-weight-bolder">MongoDB</li>
                </ul>
                <p>
                  &nbsp;&nbsp;The following website can be seen from this link
                  below
                </p>
                <a
                  href="https://devkami.herokuapp.com"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>https://devkami.herokuapp.com/</p>
                </a>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        )
        break
      case "desa-cerdas-bersahaja":
        setContent(
          <div className="item-container">
            <div className="row">
              <div className="content container">
                <br />
                <h1 className="text-center font-weight-bolder">
                  Kampung Cerdas Bersahaja
                </h1>
                <img src={desa} alt="header.jpg" />
                <p>
                  &nbsp;&nbsp;On July 27, 2019 I created a team of 5 people to
                  build a software house that provides making a website and
                  android apps.
                </p>
                <p>
                  &nbsp;&nbsp;Desa Cerdas Bersahaja is our first project. This
                  project was built using the following programming languages
                  and frameworks :
                </p>
                <ul>
                  <li className="font-weight-bolder">React JS</li>
                  <li className="font-weight-bolder">Expressjs</li>
                  <li className="font-weight-bolder">Node JS</li>
                  <li className="font-weight-bolder">MongoDB</li>
                </ul>
                <p>
                  &nbsp;&nbsp;I was assigned as a back-end and front-end. The
                  following project can be seen from this link below
                  <span>(currently under maintenance) :</span>
                </p>
                <a
                  href="https://desacerdasbersahaja.herokuapp.com"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>https://desacerdasbersahaja.herokuapp.com/</p>
                </a>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        )
        break
      case "ptpnx-djoembang":
        setContent(
          <div className="item-container">
            <div className="row">
              <div className="content container">
                <br />
                <h1 className="text-center font-weight-bolder">
                  PTPN X Djoembang Baru
                </h1>
                <img src={ptpnx} alt="header.jpg" />
                <p>
                  &nbsp;&nbsp;I had been working at the PTPN X Djoembang Baru
                  company, Jombang, East Java for 3 months. I was assigned to
                  make a full-stack website to be used internally. This website
                  has functionality like the following :
                </p>
                <ul style={{ listStyle: "none" }}>
                  <li>1. Register</li>
                  <li>2. Login</li>
                  <li>3. Import xlsx files to a data</li>
                  <li>4. Showing employees bio</li>
                  <li>5. Export data to printable</li>
                  <li>6. Upload an image</li>
                  <li>7. Editable data</li>
                </ul>
                <p>
                  &nbsp;&nbsp;I gain a lot of experiences from this opportunity.
                  I was talking with the clients, hearing what they need,
                  solving the problem, and presented it.
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <img
                        src={presentasi}
                        alt="foto_presentasi.jpg"
                        style={{ objectPosition: "bottom" }}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <img src={presentasi2} alt="foto.jpg" />
                    </div>
                  </div>
                </p>

                <p>
                  &nbsp;&nbsp;This project was built using the following
                  programming languages and frameworks :
                </p>
                <ul>
                  <li className="font-weight-bolder">React JS</li>
                  <li className="font-weight-bolder">Expressjs</li>
                  <li className="font-weight-bolder">Node JS</li>
                  <li className="font-weight-bolder">MongoDB</li>
                </ul>
                <p>
                  &nbsp;&nbsp;The following project can be seen from this link
                  below
                </p>
                <a
                  href="https://ptpnxdjoembang.herokuapp.com"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>https://ptpnxdjoembang.herokuapp.com/</p>
                </a>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        )
        break
    }
  }, [])
  return content
}
