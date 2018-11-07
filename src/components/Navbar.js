import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import styled from "styled-components"

import Home from "./Home"
import Store from "./Store"

const Navigationbar = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  background-color: lightblue;
  margin-left: auto;

  a {
    font-size: 1.3rem;
    text-align: center;
    color: palevioletred;
    text-decoration: none;
    padding: 15px 10px;
    margin-top: auto;
    margin-bottom: auto;

    :first-of-type {
      margin-left: auto;
    }
  }
`

function Navbar() {
  return (
    <Router>
      <React.Fragment>
        <Navigationbar>
          <Link to="/">Home</Link>
          <Link to="/store/">Store</Link>
        </Navigationbar>

        <Route path="/" exact component={Home} />
        <Route path="/store/" exact component={Store} />
      </React.Fragment>
    </Router>
  )
}

export default Navbar
