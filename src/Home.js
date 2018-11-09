import React from "react"
import Card from "./components/Card"

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <h2>HOME PAGE</h2>
        <Card />
      </React.Fragment>
    )
  }
}

export default Home
