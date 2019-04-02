import React, { Component } from "react";

class NavBar extends Component {
  render() {
    console.log(this.props.totalCounters);
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="https://reactjs.org/">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
