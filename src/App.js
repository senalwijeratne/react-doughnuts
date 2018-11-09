import React from "react"
import styled from "styled-components"

import Navbar from "./components/Navbar"

const Footer = styled.div`
  width: 100%;
  height: 15px;
  background: #619daa;
  // margin-top: auto;
`

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Footer />
    </React.Fragment>
  )
}

export default App
