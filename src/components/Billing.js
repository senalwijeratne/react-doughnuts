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
`

class Billing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "pink-unicorn",
      qty: null,
      price: 400,
      total: 0
    }
  }

  componentDidMount() {
    this.updateTotal()
  }

  updateTotal = () => {
    this.setState({
      total: this.state.qty * this.state.price
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    alert(`You have selected ${this.state.qty} of ${this.state.type} doughnuts.
    \nYour total is: Rs. ${this.state.total}`)
  }

  handleChange = evt => {
    const target = evt.target
    const name = target.name
    this.setState({ [name]: target.value }, () => this.updateTotal())
  }

  render() {
    return (
      <BillingSection>
        <form onSubmit={this.handleSubmit}>
          <OneLine>
            <label htmlFor="type">Type :</label>
            <select id="type" name="type" defaultValue={this.state.type} onChange={this.handleChange}>
              <option value="pink-unicorn">Pink Unicorn</option>
              <option value="chocolate-swirl">Chocolate Swirl</option>
              <option value="coco-nuts">Coco-nuts</option>
              <option value="almond-os">Almond O's</option>
            </select>
          </OneLine>
          <OneLine>
            <label htmlFor="qty">Qty :</label>
            <input id="qty" name="qty" type="number" placeholder="0" value={this.state.qty} onChange={this.handleChange} />
          </OneLine>
          <OneLine>
            <label htmlFor="total">Total :</label>
            <input id="total" type="text" value={`Rs. ${this.state.total}`} readOnly />
          </OneLine>
          <SubmitButton type="submit" value="Place Order" />
        </form>
      </BillingSection>
    )
  }
}

export default Billing
