import React from 'react'
import {Route, BrowserRouter as Router} from "react-router-dom"

import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"

import "./hero.css"
import "./index.css"
import "./footer.css"
import "./colors.css"
import "./text.css"
import "./footer.css"
import "./flexgrid.css"
import "./forms.css"
import "./button.css"

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage}/>
      <Route path="/contact" component={ContactPage}/>
    </Router>
  )
}

export default App
