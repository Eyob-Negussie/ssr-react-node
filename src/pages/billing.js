import React, { Component } from "react";
import {validate} from '../helper/passwordHelper';

class Billing extends Component {

  render() {


    return (
      <div style={{ display: "inline" }}>
        <div className="container" style={{ marginTop: "60px" }}>

          <div
            className="container"
            style={{
              backgroundColor: "white",
              height: "16rem",
              borderRadius: "4px",
              boxShadow: "3px 3px 5px 5px #ECECE8"
            }}
          >
            <h1>Wellcome to billing page</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Billing;
