import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

// Layouts
import "./App.css"
import Landing from "./components/Landing"
import Item from "./components/Item"
import Navbar from "./components/Navbar"
import IndexContext from "./components/Context/IndexContext"

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
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/post/:post_judul" component={Item} />
        </Router>
      </IndexContext.Provider>
    )
  }
}
