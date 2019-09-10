import React from "react"
import Index from "./Context/IndexContext"

export default function Item(props) {
  const [content, setContent] = React.useState("")
  const [Item, setItem] = React.useState({
    ID: {
      DV_Intro:
        "Ini adalah website pertama saya menggunakan framework React JS. Dev Kami merupakan sebuah website untuk menyambungkan seluruh developer dari seluruh dunia. Website ini memiliki fungsi sebagai berikut :",
      DV_List: (
        <ul style={{ listStyle: "none" }}>
          <li>1. Daftar</li>
          <li>2. Masuk</li>
          <li>3. Membuat profil diri</li>
          <li>4. Menambahkan pendidikan dan pengalaman</li>
          <li>5. Membuat postingan</li>
          <li>6. Membuat komentar</li>
          <li>7. Menyukai komentar</li>
          <li>8. Tidak menyukai komentar</li>
        </ul>
      ),
      DV_Desc:
        "Proyek ini dibangun menggunakan bahasa pemrograman dan framework sebagai berikut :",
      DV_Link: "Website dapat dilihat pada tautan dibawah ini :",
      DC_Intro:
        "Pada tanggal 27 Juli 2019, saya membentuk tim beranggotakan 5 orang untuk membangun software house yang menyediakan jasa pembuatan website dan aplikasi android",
      DC_Desc:
        "'Desa Cerdas Bersahaja' adalah proyek pertama kami. Proyek ini dibangun menggunakan bahasa pemrograman dan framework sebagai berikut :",
      DC_Link:
        "Saya bertugas pada bagian server (backend) dan tampilan (frontend). Proyek website ini dapat dilihat pada tautan dibawah ini :",
      PT_Intro:
        "Saya memiliki pengalaman magang di perusahaan PTPNX Djoembang Baru, Jombang, Jawa Timur selama 3 bulan. Saya ditugaskan untuk membuat full-stack website yang akan digunakan pada internal perusahaan. Website ini memilki fungsi sebagai berikut : ",
      PT_List: (
        <ul style={{ listStyle: "none" }}>
          <li>1. Daftar</li>
          <li>2. Masuk</li>
          <li>3. Melakukan import fail excel menjadi data server</li>
          <li>4. Menampilkan biodata karyawan</li>
          <li>5. Melakukan eksport data agar dapat dicetak</li>
          <li>6. Mengupload gambar</li>
          <li>7. Data dapat diedit</li>
        </ul>
      ),
      PT_Desc:
        "Saya mendapatkan banyak pengalaman melalui program magang ini. Saya berbicara langsung dengan klien, mendengarkan kebutuhan sistem, menyelesaikan masalah, dan mempresentasikannya.",
      PT_Desc2:
        "Proyek ini dibangun menggunakan bahasa pemrograman dan framework sebagai berikut :",
      PT_Link: "Proyek website ini dapat dilihat pada tautan dibawah ini :"
    },
    EN: {
      DV_Intro:
        "This is my first website using React JS framework. Dev Kami is a website to connects developer all around the world. This website has functionality like the following :",
      DV_List: (
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
      ),
      DV_Desc:
        "This project was built using the following programming languages and frameworks :",
      DV_Link: "The following website can be seen from this link below",
      DC_Intro:
        "On July 27, 2019 I created a team of 5 people to build a software house that provides making a website and android apps.",
      DC_Desc:
        "Desa Cerdas Bersahaja is our first project. This project was built using the following programming languages and frameworks :",
      DC_Link:
        "I was assigned as a back-end and front-end. The following project can be seen from this link below :",
      PT_Intro:
        "I had been working at the PTPN X Djoembang Baru company, Jombang, East Java for 3 months. I was assigned to make a full-stack website to be used internally. This website has functionality like the following :",
      PT_List: (
        <ul style={{ listStyle: "none" }}>
          <li>1. Register</li>
          <li>2. Login</li>
          <li>3. Import xlsx files to a data</li>
          <li>4. Showing employees bio</li>
          <li>5. Export data to printable</li>
          <li>6. Upload an image</li>
          <li>7. Editable data</li>
        </ul>
      ),
      PT_Desc:
        "I gain a lot of experiences from this opportunity. I was talking with the clients, hearing what they need, solving the problem, and presented it.",
      PT_Desc2:
        "This project was built using the following programming languages and frameworks :",
      PT_Link: "The following project can be seen from this link below"
    }
  })
  const toggleLang = React.useContext(Index)

  // import image
  const devKami = require("../img/devKami.jpg")
  const desa = require("../img/desacerdas.jpg")
  const ptpnx = require("../img/ptpnxdj.jpg")
  const presentasi = require("../img/presentasi1.jpg")
  const presentasi2 = require("../img/ptpnx1.jpg")

  const { ID, EN } = Item

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
                  &nbsp;&nbsp;
                  {toggleLang.toggleLang ? EN.DV_Intro : ID.DV_Intro}
                </p>
                {toggleLang.toggleLang ? EN.DV_List : ID.DV_List}
                <p>
                  &nbsp;&nbsp;{toggleLang.toggleLang ? EN.DV_Desc : ID.DV_Desc}
                </p>
                <ul>
                  <li className="font-weight-bolder">React JS</li>
                  <li className="font-weight-bolder">Expressjs</li>
                  <li className="font-weight-bolder">Node JS</li>
                  <li className="font-weight-bolder">MongoDB</li>
                </ul>
                <p>
                  &nbsp;&nbsp;{toggleLang.toggleLang ? EN.DV_Link : ID.DV_Link}
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
                  &nbsp;&nbsp;
                  {toggleLang.toggleLang ? EN.DC_Intro : ID.DC_Intro}
                </p>
                <p>
                  &nbsp;&nbsp;{toggleLang.toggleLang ? EN.DC_Desc : ID.DC_Desc}
                </p>
                <ul>
                  <li className="font-weight-bolder">React JS</li>
                  <li className="font-weight-bolder">Expressjs</li>
                  <li className="font-weight-bolder">Node JS</li>
                  <li className="font-weight-bolder">MongoDB</li>
                </ul>
                <p>
                  &nbsp;&nbsp;{toggleLang.toggleLang ? EN.DC_Link : ID.DC_Link}
                </p>
                <a
                  href="https://desacerdasbersahaja.netlify.com"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>https://desacerdasbersahaja.netlify.com/</p>
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
                  &nbsp;&nbsp;
                  {toggleLang.toggleLang ? EN.PT_Intro : ID.PT_Intro}
                </p>
                {toggleLang.toggleLang ? EN.PT_List : ID.PT_List}
                <p>
                  &nbsp;&nbsp;{toggleLang.toggleLang ? EN.PT_Desc : ID.PT_Desc}
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
                  &nbsp;&nbsp;
                  {toggleLang.toggleLang ? EN.PT_Desc2 : ID.PT_Desc2}
                </p>
                <ul>
                  <li className="font-weight-bolder">React JS</li>
                  <li className="font-weight-bolder">Expressjs</li>
                  <li className="font-weight-bolder">Node JS</li>
                  <li className="font-weight-bolder">MongoDB</li>
                </ul>
                <p>
                  &nbsp;&nbsp;{toggleLang.toggleLang ? EN.PT_Link : ID.PT_Link}
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
  }, [toggleLang.toggleLang])
  return content
}
