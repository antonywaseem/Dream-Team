import React, { Component } from "react";
import "./LawyerViewhisCases.css";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";
class Lview extends Component {
  Auth = new AuthHelperMethods();
  state = {
    lawyerID: "",
    responseToPost: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await this.Auth.fetch("/api/lawyer/pendingCase", {
      method: "GET"
      //   body: JSON.stringify({ _id:this.state.formID })
    });

    const body = await response.json();

    this.setState({ responseToPost: JSON.stringify(body) });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Me as a lawyer I should get my decided forms</strong>
          </p>
          Lawyer ID:
          <input
            type="text"
            value={this.state.lawyerID}
            onChange={e => this.setState({ lawyerID: e.target.value })}
          />
          <button type="submit">search</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default withAuth(Lview);