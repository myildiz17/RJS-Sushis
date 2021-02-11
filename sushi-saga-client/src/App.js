import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      more: 0,
      price: 50
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((sushis) => {
        const updatedSushis = sushis.map((s) => {
          return {
            ...s,
            isEaten: false,
          };
        });
        this.setState({
          sushis: updatedSushis,
        });
      });
  }

  handleMore = () => {
    this.setState((prev) => {
      return {
        more: prev.more + 4,
      };
    });
  };

  isEaten = (id, price) => {
    if (this.state.price < price){
      return
    }
    const updatedArr = this.state.sushis.map(s=>{
      if(s.id === id){
        return {
          isEaten: true
        }
      }else{
        return s
      }
    })
    const currentPrice = this.state.price
    this.setState({
      sushis: updatedArr,
      price: currentPrice - price
    })

  };

  render() {
    const sushisToDisplay = this.state.sushis.slice(
      this.state.more,
      this.state.more + 4
    );
    const eatenSushis = this.state.sushis.filter(s=>s.isEaten)

    return (
      <div className="app">
        <SushiContainer
          sushis={sushisToDisplay}
          handleMore={this.handleMore}
          isEaten={this.isEaten}
        />
        <Table eatenSushis={eatenSushis} price={this.state.price}/>
      </div>
    );
  }
}

export default App;
