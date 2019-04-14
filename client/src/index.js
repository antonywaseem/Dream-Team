import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CalcRule from "./components/calcRule/calcRule";
import ComRule from "./components/comRule/comRule";
import EmployeeTable from "./components/employeeTable";
import filtercase from "./components/filterCase/filterCase";
import FormTable from "./components/formTable";
import Investor from "./components/investor";
import LawyerFillForm from "./components/LawyerFillForm";
import LawyerViewhisCases from "./components/LawyerViewhisCases";
import NavBar from "./components/layout/layout";
import Login from "./components/login";
import ReviewerViewhisForms from "./components/ReviewerViewhisForms";
import searchBar from "./components/searchBar";
import SignUp from "./components/signup";
import UpdateTest from "./components/updateTest";
import UserTable from "./components/userTable/userTable";
import "./index.css";
import HomePage from "./pages/homepage";
import Case from "./pages/LRspecificCase";
ReactDOM.render(
  <Router>
    <div>
      <Route exactpath="/" component={HomePage} />
      <Route path="/filter" component={filtercase} />
      <Route path="/login" component={Login} />
      <Route path="/investor" component={Investor} />
      <Route path="/LawyerFillForm" component={LawyerFillForm} />
      <Route path="/signup" component={SignUp} />
      <Route path="/update" component={UpdateTest} />
      <Route path="/employeeTable" component={EmployeeTable} />
      <Route path="/formTable" component={FormTable} />
      <Route path="/userTable" component={UserTable} />
      <Route path="/searchBar" component={searchBar} />
      <Route path="/reviewershowmyforms" component={ReviewerViewhisForms} />
      <Route path="/Lawyershowmyforms" component={LawyerViewhisCases} />
      <Route path="/companyRules" component={ComRule} />
      <Route path="/feesCalculation" component={CalcRule} />
      <Route path="/case" component={Case} />
    </div>
  </Router>,
  document.getElementById("root")
);
ReactDOM.render(<NavBar />, document.getElementById("Nav"));
