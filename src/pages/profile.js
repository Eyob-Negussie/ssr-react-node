import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {validate} from '../helper/profileHelper';

class Profile extends Component {

  componentDidMount() {
    this.setState({
      data: { firstName: "", lastName: "", phoneNumber: "", email: "" },
      error: {}
    });
  }

  handleClick() {
    const {data}  = this.state
    const error = validate(data);
    const missingValue = Object.values(error).every((key) => key);
    if(missingValue){
      this.setState({error});
      return;
    }

    const apiUrl = window.location.origin;
    
    fetch(`${apiUrl}/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.data)
    })
      .then((response) => {
        this.props.history.push("/password");
      })
      .catch((err) => {
        console.log("TCL: Profile -> handleClick -> err", err);
      });
    
  }

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {

    let error = {};
    if(this.state){
       error = this.state.error;
    }

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
              height: "19rem",
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
                    name="firstName"
                    className="form-control"
                    style={{ height: "3rem" }}
                    id="exampleInputEmail1"
                    onChange={this.handleChange}
                  ></input>
                  {error.firstName && <small id="firstNameHelp" class="form-text text-danger">First name is required.</small> }
                </div>
              </div>
              <div className="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input
                    name="lastName"
                    className="form-control x-input"
                    style={{ height: "3rem" }}
                    id="exampleInputEmail1"
                    onChange={this.handleChange}
                  ></input>
                  {error.lastName && <small id="lastNameHelp" class="form-text text-danger">Last name is required.</small> }
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Mobile Phone Number</label>
                  <input
                    name="phoneNumber"
                    type="number"
                    className="form-control x-input"
                    style={{ height: "3rem" }}
                    id="exampleInputEmail1"
                    max="9999999999"
                    onChange={this.handleChange}
                  ></input>
                  {error.phoneNumber && <small id="phoneNumberHelp" class="form-text text-danger">Phone number is required.</small> }
                </div>
              </div>
              <div className="col-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    name="email"
                    className="form-control x-input"
                    style={{ height: "3rem" }}
                    id="exampleInputEmail1"
                    onChange={this.handleChange}
                  ></input>
                  {error.email && <small id="email" class="form-text text-danger">Email is required.</small> }
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
