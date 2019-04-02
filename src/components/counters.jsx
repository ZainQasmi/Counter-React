import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm m-2" onClick={props.onReset}>
          reset
        </button>
        <button className="btn btn-primary btn-sm" onClick={props.onAdd}>
          Add
        </button>
        {props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={props.onIncrement}
            onDelete={props.onDelete}
          >
            {counter.id}
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
