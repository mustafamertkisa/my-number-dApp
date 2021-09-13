import React, { Component } from 'react'
import Web3 from 'web3';
import './App.css'
import { myContract } from './build/contract-info'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainComponent()
  }

  async loadBlockchainComponent() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    }

    const web3 = new Web3(Web3.givenProvider)
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  async callMyNumber() {
    const myNumber = await myContract.methods.myNumber().call()
    this.setState({ num: myNumber })
  }

  async setMyNumber() {
    const newNumber = parseInt(this.state.num) * parseInt(this.state.num)
    const setNewNumber = await myContract.methods.setMyNumber(newNumber).send({ from: this.state.account });
    console.log(setNewNumber)
    this.setState({ num: newNumber })
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
      <div className="container">
        <h1>Merhaba My Number dApp!</h1>
        <p>Cüzdan adresi: {this.state.account}</p>
        <hr />
        <h2>Sayımız: {this.state.num}</h2>
        <br />

        <button id="btnCall" onClick={() => this.callMyNumber()}>Çağır</button>
        <br /><br />
        <button id="btnUpdate" onClick={() => this.setMyNumber()}>Karesini Hesapla</button>
      </div>
    );
  }
}

export default App;
