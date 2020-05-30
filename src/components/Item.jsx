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
      PT_Link: "Proyek website ini dapat dilihat pada tautan dibawah ini :",
      FKH_Intro:
        "Saya mendapatkan proyek dari fakultas kedokteran hewan Universitas Brawijaya. Proyek ini membuat progressive web apps untuk keperluan tesis Pendidikan Profesi Dokter Hewan (PPDH). Tugas saya disini sebagai front-end engineer menggunakan React JS dan MDBootstrap.",
      FKH_Desc:
        "Aplikasi ini memiliki 3 tipe user, yaitu mahasiswa, dosen, dan admin. Alur kerja sistem dijelaskan sebagai poin-poin berikut :",
      FKH_process: (
        <ul style={{ listStyle: "none" }}>
          <li>
            <strong>Mahasiswa</strong>&emsp; > Mahasiswa melakukan pendaftaran
            profesi yang dijalani kemudian mengupload fail dokumen proposal dan
            laporan akhir
          </li>
          <li>
            <strong>Dosen</strong>&emsp; > Dosen melakukan validasi atau revisi
            pada dokumen
          </li>
          <li>
            <strong>Admin</strong>&emsp; > Admin dapat menutup akses upload
            mahasiswa apabila pengerjaan proposal atau laporan akhir melewati
            batas waktu yang telah ditentukan
          </li>
        </ul>
      ),
      FKH_Desc2: "Aplikasi ini memilki fitur sebagai berikut :",
      FKH_List: (
        <ul style={{ listStyle: "none" }}>
          <li>1. Daftar</li>
          <li>2. Masuk</li>
          <li>3. Upload fail dokumen</li>
          <li>4. Validasi</li>
          <li>5. Memberi catatan</li>
          <li>
            6. Melihat riwayat transaksi atau proses pengerjaan setiap mahasiswa
          </li>
          <li>7. Admin dapat melihat riwayat pekerjaan setiap dosen</li>
        </ul>
      ),
      FKH_Link: "Proyek website ini dapat dilihat pada tautan dibawah ini :",
      FKH_noted: "( Website mungkin telah dimatikan )",
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
      PT_Link: "The following project can be seen from this link below",
      FKH_Intro:
        "I got a project from the UB Faculty of Veterinary Medicine. This project creates progressive web apps for the Veterinary Professional Education thesis. I was assigned as front-end engineer using React JS and MDBootstrap.",
      FKH_Desc:
        "This application has 3 types of user, it is student, lecturer, and admin. The system workflow described on the points below :",
      FKH_process: (
        <ul style={{ listStyle: "none" }}>
          <li>
            <strong>Student</strong>&emsp; > Students can register profession
            and then upload the proposal or final report document
          </li>
          <li>
            <strong>Lecturer</strong>&emsp; > Lecturer receive the document and
            then do valdation or revision
          </li>
          <li>
            <strong>Admin</strong>&emsp; > Admin can lock access for the
            students if they were exceed the deadline.
          </li>
        </ul>
      ),
      FKH_Desc2: "This application has features described below :",
      FKH_List: (
        <ul style={{ listStyle: "none" }}>
          <li>1. Register</li>
          <li>2. Login</li>
          <li>3. Upload document</li>
          <li>4. Validation</li>
          <li>5. Give notes</li>
          <li>6. See the history of works of the student</li>
          <li>7. Admin can see the history of works of the lecturer</li>
        </ul>
      ),
      FKH_Link: "The following project can be seen from this link below",
      FKH_noted: "( Website might've been suspended )",
    },
  })
  const toggleLang = React.useContext(Index)

  // import image
  const devKami = require("../img/devKami.jpg")
  const desa = require("../img/desacerdas.jpg")
  const fkhapps = require("../img/fkh-login.png")
  const ptpnx = require("../img/ptpnxdj.jpg")
  const presentasi = require("../img/presentasi1.jpg")
  const presentasi2 = require("../img/ptpnx1.jpg")

  const { ID, EN } = Item

  React.useEffect(() => {
    if (document.getElementsByTagName("body")) {
      document.getElementsByTagName("body")[0].style.overflow = "auto"
    }

    if (document.getElementsByTagName("nav")) {
      document.getElementsByTagName("nav")[0].style.display = "none"
    }

    switch (props.match.params.post_judul) {
      case "devkami":
        setContent(
          <div className="item-container">
            <div className="row">
              <div className="content container">
                <br />
                <h1 className="text-center font-weight-bolder">Dev Kami</h1>
                <div className="header-img">
                  <img src={devKami} alt="header.jpg" />
                </div>
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
                <div className="header-img">
                  <img src={desa} alt="header.jpg" />
                </div>
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
                <div className="header-img">
                  <img src={ptpnx} alt="header.jpg" />
                </div>
                <p>
                  &nbsp;&nbsp;
                  {toggleLang.toggleLang ? EN.PT_Intro : ID.PT_Intro}
                </p>
                {toggleLang.toggleLang ? EN.PT_List : ID.PT_List}
                <p>
                  &nbsp;&nbsp;{toggleLang.toggleLang ? EN.PT_Desc : ID.PT_Desc}
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="presentasi">
                        <img alt="foto_presentasi.jpg" src={presentasi} />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="presentasi">
                        <img alt="foto.jpg" src={presentasi2} />
                      </div>
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
              </div>
            </div>
          </div>
        )
        break
      case "fkhapps":
        setContent(
          <div className="item-container">
            <div className="row">
              <div className="content container">
                <br />
                <h1 className="text-center font-weight-bolder">FKH Apps</h1>
                <div className="header-img">
                  <img src={fkhapps} alt="header.jpg" />
                </div>
                <p>
                  &nbsp;&nbsp;
                  {toggleLang.toggleLang ? EN.FKH_Intro : ID.FKH_Intro}
                </p>
                <p>
                  &nbsp;&nbsp;
                  {toggleLang.toggleLang ? EN.FKH_Desc : ID.FKH_Desc}
                </p>
                <p>{toggleLang.toggleLang ? EN.FKH_process : ID.FKH_process}</p>
                <p>
                  &nbsp;&nbsp;
                  {toggleLang.toggleLang ? EN.FKH_Desc2 : ID.FKH_Desc2}
                </p>
                <p>{toggleLang.toggleLang ? EN.FKH_List : ID.FKH_List}</p>
                <p>
                  &nbsp;&nbsp;
                  {toggleLang.toggleLang ? EN.FKH_Link : ID.FKH_Link}
                </p>
                <a
                  href="https://nadir008basalamah.000webhostapp.com/"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>https://nadir008basalamah.000webhostapp.com/</p>
                </a>
                <small>
                  &nbsp;
                  {toggleLang.toggleLang ? EN.FKH_noted : ID.FKH_noted}
                </small>
              </div>
            </div>
          </div>
        )
        break
    }

    return () => {
      document.getElementsByTagName("nav")[0].style.display = "flex"
    }
  }, [toggleLang.toggleLang])
  return content
}
