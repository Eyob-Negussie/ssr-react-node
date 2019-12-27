import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="row card-header">
          <div className="col-2">
            <span style={{ fontSize: "30px" }}>Xfinity</span>
          </div>
          <div
            className="col-8"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end"
            }}
          >
            <span>Package</span>
            <span> Performance Pro Internet</span>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end"
            }}
          >
            <span>Due Monthly</span>
            <span>$62.99</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
