import React, { Component } from "react";
// import '../styles/Profile.css';
// import { disconnect } from "cluster";

class Password extends Component {
  handleClick() {
    this.props.history.push("/password");
  }

  handlePrevious() {
    this.props.history.push("/profile");
  }

  render() {
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
                  <label for="exampleInputEmail1">First Name</label>
                  <input
                    type="email"
                    className="form-control"
                    style={{ height: "3rem" }}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                  <small class="form-text text-muted">
                    At least 8 characters
                  </small>
                  <small class="form-text text-muted">
                    At least one number
                  </small>
                  <small class="form-text text-muted">
                    At least one capital letter
                  </small>
                </div>
              </div>
              <div className="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input
                    type="email"
                    className="form-control"
                    style={{ height: "3rem" }}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                  {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
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
