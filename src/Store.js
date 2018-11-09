import React from "react"
import styled from "styled-components"

import SelectedDoughnut from "./components/SelectedDoughnut"
import Billing from "./components/Billing"

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
  }

  render() {
    return (
      <BillingSection>
        <Billing />
        <SelectedDoughnut />
      </BillingSection>
    )
  }
}

export default Store
