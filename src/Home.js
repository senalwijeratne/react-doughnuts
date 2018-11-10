import React from "react"
import styled from "styled-components"

import Card from "./components/Card"

import json from "./doughnut-api"

const DoughnutSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
  margin: 50px;
`

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <DoughnutSection>
          {json.doughnuts.map(doughnut => {
            return <Card doughnut={doughnut} key={doughnut.id} />
          })}
        </DoughnutSection>
      </React.Fragment>
    )
  }
}

export default Home
