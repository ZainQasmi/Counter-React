import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

import "./App.css";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: counters });
  };

  handleIncrement = counterID => {
    const counters = this.state.counters.map(c => {
      if (c.id === counterID) {
        c.value++;
        }
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDecrement = counterID => {
    const counters = this.state.counters.map(c => {
      if (c.id === counterID) {
        c.value--;
        }
      return c;
    });
    this.setState({ counters: counters });
  };


  handleAdd = () => {
    const counters = [...this.state.counters];
    counters.push({ id: counters.length + 1, value: 0 });
    this.setState({ counters: counters });
  };

  render() {
    console.log("App-Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          // onClick={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onAdd={this.handleAdd}
        />
      </React.Fragment>
    );
  }

  constructor(props) {
    super(props);
    console.log("App-Constructor", this.props);
    // this.state = this.props.something;
  }

  // Perfect for AJAX Calls
  componentDidMount() {
    console.log("App-Mounted");
    // Then setState -- this.setState({ movies });
  }
}

export default App;
