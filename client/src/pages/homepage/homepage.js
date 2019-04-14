import React, { Component } from "react";
import "../homepage/homepage.css";
import AuthHelperMethods from "../../components/AuthHelperMethods";
import X from "../../components/ReviewerViewhisForms/ReviewerViewhisForms";
import Login from "../../components/login";
import Tableform from "../../components/formTable";
import LawyerCase from "../../components/lawyerCase";
import ReviewerCase from "../../components/reviewerCase";
import Lawyerview from "../../components/LawyerViewhisCases";
import formTable from "../../components/formTable";
import SignUp from "../../components/signup";
import Table from "../../components/userTable/userTable";
import Layout from "../../components/layout/layout";
import viewAllInvestors from "../../components/viewAllInvestors/viewAllInvestors";
import formsOfLawyer from "../../components/formsOfLawyer/formsOfLawyer";
import lawyerFinalizedCases from "../../components/lawyerFinalizedCases/lawyerFinalizedCases";
// import Tableform from '../../components/formTable';
import searchBar from "../../components/searchBar";
// import AuthHelperMethods from '../../components/AuthHelperMethods';
import withAuth from "../../components/withAuth";
import publishedCompanies from "../../components/publishedCompanies";

class HomePage extends Component {
  Auth = new AuthHelperMethods();
  state = {};
  publishedCompanies() {
    this.props.history.push("/publishedCompanies");
  }
  lawyerview() {
    this.props.history.push("/Lawyershowmyforms");
  }
  lawyerFinalizedCases() {
    this.props.history.push("/lawyerFinalizedCases");
  }
  viewAllInvestors() {
    this.props.history.push("/viewAllInvestors");
  }
  formsOfLawyer() {
    this.props.history.push("/formsOfLawyer");
  }
  reviewrview() {
    this.props.history.push("/reviewershowmyforms");
  }
  update() {
    this.props.history.push("/update");

    this.props.history.push("/update");
  }
  viewInvestor() {
    this.props.history.push("/investor");
  }
  login() {
    this.props.history.push("/login");
  }

  signUp() {
    this.props.history.push("/signup");
  }
  userTable() {
    this.props.history.push("/userTable");
  }
  employeeTable() {
    this.props.history.push("/employeeTable");
  }
  formTable() {
    this.props.history.push("/formTable");
  }
  searchBar() {
    this.props.history.push("/searchBar");
  }
  caseRe() {
    this.props.history.push("/case");
  }

  _handleLogout = () => {
    this.Auth.logout();

    this.props.history.replace("/login");
  };
  constructor(props) {
    super(props);
    this.state = {};
    this.connecToServer = this.connecToServer.bind(this);
  }

  connecToServer() {
    fetch("/");
  }

  componentDidMount() {
    this.connecToServer();
  }

  render() {
    return (
      <div className="HomePage">
        <div className="App">
          <div className="App-header">
            <h2>Welcome Home</h2>
          </div>
        </div>

        <div>
          To view Pending and Approved companies
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.viewInvestor();
            }}
          />
        </div>

        <div>
          To view lawyer form push here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.lawyerview();
            }}
          />
        </div>

        <div>
          To view lawyer form push here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.lawyerview();
            }}
          >
            Click to show
          </button>
        </div>
        <div>
          To view reviewr form Press here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.reviewrview();
            }}
          >
            Click to view
          </button>
        </div>
        <div>
          To view reviewr form Press here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.reviewrview();
            }}
          >
            Click to view
          </button>
        </div>
        <div>
          To Update Press here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.update();
            }}
          >
            Click to Update
          </button>
        </div>

        <div>
          To view employee table
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.employeeTable();
            }}
          >
            Click to view
          </button>
        </div>
        <div>
          To view form table
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.formTable();
            }}
          >
            Click to view form
          </button>
        </div>
        <div>
          To view user table
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.userTable();
            }}
          >
            Click to view user
          </button>
          <div>
            <button
              className="btn btn-primary width-150"
              onClick={e => {
                this._handleLogout();
              }}
            >
              LogOut
            </button>
          </div>
          <div>
            <button
              className="btn btn-primary width-150"
              onClick={e => {
                this.caseRe();
              }}
            >
              Case
            </button>
          </div>
        </div>
        <div>
          To search
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.searchBar();
            }}
          >
            Click to search
          </button>
        </div>
        <div>
          To view publishedCompanies click here
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.publishedCompanies();
            }}
          >
            Click to view
          </button>
        </div>

        <div>
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.viewAllInvestors();
            }}
          >
            View All Investors
          </button>
        </div>

        <div>
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.formsOfLawyer();
            }}
          >
            View Forms of Lawyer
          </button>
        </div>

        <div>
          <button
            className="btn btn-primary width-150"
            onClick={e => {
              this.lawyerFinalizedCases();
            }}
          >
            View Lawyers Finalized Cases
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
