import React, { Component } from "react";
import {validate} from '../helper/passwordHelper';

class Password extends Component {

  componentDidMount() {
    this.setState({
      data: { password: "", passwordConfirmation: ""},
      error: {}
    });
  }

  handleClick() {
    const error = validate(this.state.data);
    const missingValue = Object.values(error).every((key) => key === false);

    if(missingValue){
      this.setState({error});
      return;
    }
    
    fetch("http://localhost:3000/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.data)
    })
    .then((response) => {
      // this.props.history.push("/password");
    })
    .catch((err) => {
      console.log("TCL: Profile -> handleClick -> err", err);
    });
  }

  handlePrevious() {
    this.props.history.push("/profile");
  }

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    const error = validate(data);
    this.setState({ data, error });
  };

  render() {

    let error = {};
    if(this.state){
      error = this.state.error;
    }

    return (
      <div style={{ display: "inline" }}>
        <div className="container" style={{ marginTop: "60px" }}>
          <div>
            <label style={{ fontSize: "18px", fontWeight: "bold" }}>
              Let's create your password
            </label>
          </div>

          <div
            className="container"
            style={{
              backgroundColor: "white",
              height: "16rem",
              borderRadius: "4px",
              boxShadow: "3px 3px 5px 5px #ECECE8"
            }}
          >
            <div className="row">
              <div className="col-2">
                <img src={""} />
              </div>
              <div className="col">
                <div className="row">
                  <label style={{ fontSize: "20px" }}>
                    Secure your account with password
                  </label>
                </div>
                <div className="row">
                  <label>
                    Help us keep your account secure with a strong password
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Create Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    style={{ height: "3rem" }}
                    id="exampleInputEmail1"
                    onChange={this.handleChange}
                  ></input>
                  <small className={`form-text ${error.atLeastEightChar ? "text-success" : "text-danger"}`}>
                    At least 8 characters
                  </small>
                  <small className={`form-text ${error.atLeastOneNumber ? "text-success" : "text-danger"}`}>
                    At least one number
                  </small>
                  <small className={`form-text ${error.atLeastOneCapital ? "text-success" : "text-danger"}`}>
                    At least one capital letter
                  </small>
                </div>
              </div>
              <div className="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Confirm Password</label>
                  <input
                    type="password"
                    name="passwordConfirmation"
                    className="form-control"
                    style={{ height: "3rem" }}
                    id="exampleInputEmail1"
                    onChange={this.handleChange}
                  ></input>
                  {!error.passwordMatch && <small id="emailHelp" class="form-text text-danger">Your Password does not match please check again.</small>}
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div
              className="row"
              style={{
                marginTop: "2px",
                boxShadow: "1px 1px 1px 1px #ECECE8"
              }}
            >
              <div className="col-1">
                <img src={""} />
              </div>
              <div className="col">
                <div className="row">
                  <label style={{ fontSize: "20px" }}>
                    Secure your account with password
                  </label>
                </div>
                <div className="row">
                  <label>
                    Help us keep your account secure with a strong password
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            style={{
              minWidth: "10rem",
              borderRadius: "40px",
              backgroundColor: "#0272b6",
              fontWeight: "300",
              minHeight: "3rem",
              marginTop: "30px",
              float: "right",
              color: "white",
              border: "0px",
              cursor: "pointer"
            }}
            onClick={() => this.handleClick()}
          >
            Continue to Billing
          </button>

          <button
            type="submit"
            style={{
              minWidth: "10rem",
              borderRadius: "40px",
              fontWeight: "300",
              minHeight: "3rem",
              marginTop: "30px",
              float: "right",
              color: "#0272b6",
              borderStyle: "solid",
              borderColor: "#0272b6",
              backgroundColor: "white",
              marginRight: "1rem",
              cursor: "pointer"
            }}
            onClick={() => this.handlePrevious()}
          >
            Previous
          </button>
        </div>
      </div>
    );
  }
}

export default Password;
