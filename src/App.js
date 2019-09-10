import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

// Layouts
import "./App.css"
import IndexContext from "./components/Context/IndexContext"
import Loading from "./components/Loading"

// Import Components n Layouts
const Navbar = React.lazy(() => import("./components/Navbar"))
const Content = React.lazy(() => import("./components/Content"))
const Item = React.lazy(() => import("./components/Item"))

// Components
export default class App extends React.Component {
  state = { index: 0, toggleLang: false }
  setIndex = data => {
    this.setState({
      index: data
    })
  }
  setLang = toggle => {
    this.setState({
      toggleLang: toggle
    })
  }

  render() {
    return (
      <IndexContext.Provider
        value={{
          index: this.state.index,
          toggleLang: this.state.toggleLang,
          setIndex: this.setIndex,
          setLang: this.setLang
        }}
      >
        <React.Suspense fallback={<Loading />}>
          <Router>
            <Navbar />
            <Route exact path="/" component={Content} />
            <Route exact path="/post/:post_judul" component={Item} />
          </Router>
        </React.Suspense>
      </IndexContext.Provider>
    )
  }
}
