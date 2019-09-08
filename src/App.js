import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

// Layouts
import "./App.css"
// import Landing from "./components/Landing"
// import Item from "./components/Item"
// import Navbar from "./components/Navbar"
import IndexContext from "./components/Context/IndexContext"
import Loading from "./components/Loading"

// Import Components n Layouts
const Navbar = React.lazy(() => import("./components/Navbar"))
const Content = React.lazy(() => import("./components/Content"))
const Item = React.lazy(() => import("./components/Item"))

// Components
export default class App extends React.Component {
  state = { index: 0 }
  setIndex = data => {
    this.setState({
      index: data
    })
  }

  render() {
    return (
      <IndexContext.Provider
        value={{
          index: this.state.index,
          setIndex: this.setIndex
        }}
      >
        <React.Suspense fallback={<Loading />}>
          <Router>
            <Navbar />
            {/* <Route exact path="/" component={Landing} /> */}
            <Route exact path="/" component={Content} />
            <Route exact path="/post/:post_judul" component={Item} />
          </Router>
        </React.Suspense>
      </IndexContext.Provider>
    )
  }
}
