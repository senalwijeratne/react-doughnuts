import React from "react"
import styled from "styled-components"

const BillingSection = styled.div`
  width: 40vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 0px 15px 15px 0px;

  form {
    font-size: 1.5rem;
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    width: 70vw;
    height: 70vw;
    border-radius: 0px 0px 15px 15px;

    form {
      width: 70%;
      height: 70%;
      font-size: 1rem;
    }
  }
`

const OneLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input,
  select {
    font-size: 1.2rem;
    text-align: center;
    width: 70%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  @media only screen and (max-width: 600px) {
    input,
    select {
      font-size: 0.8rem;
      width: 60%;
    }
  }
`

const SubmitButton = styled.input`
  font-family: "Patrick Hand", cursive;
  font-size: 1.5rem;
  color: #fff;
  width: 100%;
  height: 15%;
  background: #6dc170;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    height: 20%;
  }
`

class Billing extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.updateTotal()
  }

  handleSubmit = evt => {
    evt.preventDefault()
    alert(`\nYou have purchased ${this.props.qty} of ${this.props.selectedObject.name} doughnuts.
    \nYour total is: Rs. ${this.props.total}`)
  }

  render() {
    return (
      <BillingSection>
        <form onSubmit={this.handleSubmit}>
          <OneLine>
            <label htmlFor="type">Type :</label>
            <select id="type" name="type" value={this.props.selectedValue} onChange={this.props.hanldeSelect}>
              {this.props.json.doughnuts.map(doughnut => {
                return (
                  <option key={doughnut.id} value={doughnut.value}>
                    {doughnut.name}
                  </option>
                )
              })}
            </select>
          </OneLine>
          <OneLine>
            <label htmlFor="qty">Qty :</label>
            <input
              id="qty"
              name="qty"
              type="number"
              placeholder="0"
              value={this.props.qty}
              onChange={this.props.handleQtyChange}
            />
          </OneLine>
          <OneLine>
            <label htmlFor="total">Total :</label>
            <input id="total" type="text" value={`Rs. ${this.props.total}`} readOnly />
          </OneLine>
          <SubmitButton type="submit" value="Place Order" />
        </form>
      </BillingSection>
    )
  }
}

export default Billing
