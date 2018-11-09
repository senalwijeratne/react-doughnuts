import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import styled from "styled-components"

import Home from "../Home"
import Store from "../Store"

const Navigationbar = styled.div`
  display: flex;
  flex-direction: row;
  height: 15vh;
  background-color: #619daa;
  margin-left: auto;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);

  img {
    height: 80%;
    width: auto;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
  }

  a {
    font-size: 2rem;
    text-align: center;
    color: #fff;
    text-decoration: none;
    padding: 15px 10px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 10px;

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
          <img
            src="https://uploads.codesandbox.io/uploads/user/f752eb5a-ad47-4d7b-92c4-9aaf1424ed51/3jM4-donut.png"
            alt="doughnut logo"
          />
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
