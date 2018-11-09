import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20vw;
  height: 50vh;
  background: #ececec;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 15px 0px;

  img {
    width: 100%;
    height: 50%;
    border-radius: 15px 15px 0px 0px;
    object-fit: cover;
    background: #c4c4c4;
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
  width: 95%;
  height: 35%;
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

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CardContainer>
        <img src="https://uploads.codesandbox.io/uploads/user/f752eb5a-ad47-4d7b-92c4-9aaf1424ed51/3jM4-donut.png" alt="" />
        <Title>Donut Name</Title>
        <Description>
          Cotton candy I love I love chupa chups candy. Sugar plum I love cake liquorice I love sesame snaps lollipop.
          <Availability>
            Only <span>10</span> available
          </Availability>
        </Description>
      </CardContainer>
    )
  }
}

export default Card
