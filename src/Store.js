import React from "react"
import styled from "styled-components"

import SelectedDoughnut from "./components/SelectedDoughnut"
import Billing from "./components/Billing"

import json from "./doughnut-api"

const BillingSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin: 50px;
`

class Store extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: "classic",
      selectedObject: {}
    }
  }

  hanldeSelect = evt => {
    console.log("---handiling select")
    this.setState(
      {
        selected: evt.target.value
      },
      () => {
        this.setSelectedDoughnut()
      }
    )
  }

  setSelectedDoughnut = () => {
    let filteredJsonArr = json.doughnuts.filter(doughnut => doughnut.value === this.state.selected)
    this.setState({
      selectedObject: filteredJsonArr[0]
    })
  }

  render() {
    return (
      <BillingSection>
        <Billing
          json={json}
          selectedObject={this.state.selectedObject}
          selected={this.state.selected}
          hanldeSelect={this.hanldeSelect}
        />
        <SelectedDoughnut selectedObject={this.state.selectedObject} />
      </BillingSection>
    )
  }
}

export default Store
