import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20vw;
  height: 50vh;
  background: #e0eafc;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 15px 0px;

  @media only screen and (max-width: 600px) {
    width: 70vw;
    height: 60vh;
  }

  img {
    width: 100%;
    height: 50%;
    border-radius: 15px 15px 0px 0px;
    object-fit: cover;
    background: #d4e1f9;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  width: 95%;
  height: 15%;
  background: #fff;
  margin-top: -7.5%;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 90%;
  height: 30%;
  padding: 2.5% 2.5%;
  background: #fff;
  margin-bottom: 10px;
  margin-top: auto;
`

const Availability = styled.span`
  margin-bottom: 10px;
  margin-top: auto;
  font-size: 1rem;

  span {
    font-weight: bold;
    text-decoration: underline;
  }
`

function Card(props) {
  return (
    <CardContainer>
      <img src={props.doughnut.url} alt={`${props.doughnut.name} doughnut`} />
      <Title>{props.doughnut.name}</Title>
      <Description>
        {props.doughnut.description}
        <Availability>
          Only <span>{props.doughnut.stock}</span> available
        </Availability>
      </Description>
    </CardContainer>
  )
}

export default Card
