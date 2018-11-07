import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Title>HOME PAGE!</Title>
      </React.Fragment>
    )
  }
}

export default Home
