import React, { Component } from 'react';
import List from "./List";
import GroceryForm from "./GroceryForm";
import './App.css';

class App extends Component {
  state = { groceries: [], };

  getUniqueID = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addItem = (name) => {
    const { groceries, } = this.state;
    const grocery = { name, id: this.getUniqueID(), complete: false, };
    this.setState({ groceries: [grocery, ...groceries] });
  }

  handleClick = (id) => {
    const {groceries, } = this.state;
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery
      })
    })
  }

  render() {
    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List name="Grocery List" items={this.state.groceries} groceryClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
