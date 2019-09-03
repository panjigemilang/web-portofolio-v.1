import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

// Layouts
import "./App.css"
import Landing from "./components/Landing"
import Item from "./components/Item"
import Navbar from "./components/Navbar"

// Components
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Route exact path="/" component={Landing} />
      <Route exact path="/post/:post_judul" component={Item} />
    </Router>
  )
}

export default App
