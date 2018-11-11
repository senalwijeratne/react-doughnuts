import React from "react"
import styled from "styled-components"

const DoughnutContainer = styled.div`
  width: 40vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  img {
    width: 30vw;
    height: auto;
  }
`

function SelectedDoughnut(props) {
  return (
    <DoughnutContainer>
      <img src={props.selectedObject.url} alt={`${props.selectedObject.name} doughnut`} />
    </DoughnutContainer>
  )
}

export default SelectedDoughnut
