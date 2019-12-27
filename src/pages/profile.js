import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import '../styles/Profile.css';
// import { disconnect } from "cluster";

class Profile extends Component {
  handleClick() {
    this.props.history.push("/password");
  }

  render() {
    return (
      <div style={{ display: "inline" }}>
        <div style={{ marginTop: "60px" }} className="container">
          <div>
            <label style={{ fontSize: "20px", fontWeight: "bold" }}>
              Let's create your Xfinity ID
            </label>
          </div>

          <div
            className="container"
            style={{
              backgroundColor: "white",
              height: "18rem",
              borderRadius: "4px",
              boxShadow: "3px 3px 5px 5px #ECECE8"
            }}
          >
            <div className="row">
              <span style={{ margin: "21px 0 35px 17px" }}>
                Your Xfinity ID lets you sign in to your account quickly and
                securely.
              </span>
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
                  {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
              </div>
              <div className="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input
                    type="email"
                    className="form-control x-input"
                    style={{ height: "3rem" }}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                  {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Mobile Phone Number</label>
                  <input
                    type="email"
                    className="form-control x-input"
                    style={{ height: "3rem" }}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                  {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
              </div>
              <div className="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control x-input"
                    style={{ height: "3rem" }}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                  {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
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
            Create Xfinity ID
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
