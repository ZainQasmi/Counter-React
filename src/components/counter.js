import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("Single Counter Rendered");
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn-danger btn m-2 btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  styles = {
    fontSize: "30px",
    fontWeight: "bold"
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("Did update: ", "prevProps", prevProps);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Incase of change make a new Ajax request to get new data from server
    }
  }

  componentWillUnmount() {
    // Purge unused memory here
    console.log("Counter- Unmount");
  }
}

export default Counter;
