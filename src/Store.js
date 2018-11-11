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

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`

class Store extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      qty: 1,
      total: 0,
      selectedValue: json.doughnuts[0].value,
      selectedObject: json.doughnuts[0]
    }
  }

  hanldeSelect = evt => {
    this.setState(
      {
        selectedValue: evt.target.value
      },
      () => {
        let filteredJsonArr = json.doughnuts.filter(doughnut => doughnut.value === this.state.selectedValue)
        this.setState(
          {
            selectedObject: filteredJsonArr[0]
          },
          () => {
            this.updateTotal()
          }
        )
      }
    )
  }

  handleQtyChange = evt => {
    this.setState({ qty: evt.target.value }, () => this.updateTotal())
  }

  updateTotal = () => {
    this.setState({
      total: this.state.qty * this.state.selectedObject.price
    })
  }

  render() {
    return (
      <BillingSection>
        <Billing
          json={json}
          {...this.state}
          hanldeSelect={this.hanldeSelect}
          handleQtyChange={this.handleQtyChange}
          updateTotal={this.updateTotal}
        />
        <SelectedDoughnut selectedObject={this.state.selectedObject} />
      </BillingSection>
    )
  }
}

export default Store
