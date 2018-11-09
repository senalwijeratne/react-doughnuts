import React from "react"
import styled from "styled-components"

import Card from "./components/Card"

const DonutCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
  margin: 50px;
`

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <DonutCards>
          {arr.map(donut => {
            return <Card key={donut} />
          })}
        </DonutCards>
      </React.Fragment>
    )
  }
}

export default Home
