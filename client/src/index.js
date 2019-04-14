import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import UpdateTest from "./components/updateTest";
import EmployeeTable from "./components/employeeTable";
import SignUp from "./components/signup";
import FormTable from "./components/formTable";
import HomePage from "./pages/homepage";
import searchBar from "./components/searchBar";
import UserTable from "./components/userTable/userTable";
import LawyerViewhisCases from "./components/LawyerViewhisCases";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Case from "./pages/LRspecificCase";
import "bootstrap/dist/css/bootstrap.css";
import ReviewerViewhisForms from "./components/ReviewerViewhisForms";
// import UserTable from "./components/userTable/userTable";
import * as serviceWorker from "./serviceWorker";
import Investor from "./components/investor";

import CalcRule from "./components/calcRule/calcRule";
import NavBar from "./components/layout/layout";
import CheckoutForm from "./components/CheckoutForm/App";
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/investor" component={Investor} />
      <Route path="/signup" component={SignUp} />
      <Route path="/update" component={UpdateTest} />
      <Route path="/employeeTable" component={EmployeeTable} />
      <Route path="/formTable" component={FormTable} />
      <Route path="/userTable" component={UserTable} />
      <Route path="/searchBar" component={searchBar} />
      <Route path="/reviewershowmyforms" component={ReviewerViewhisForms} />
      <Route path="/Lawyershowmyforms" component={LawyerViewhisCases} />
      <Route path="/feesCalculation" component={CalcRule} />
      <Route path="/case" component={Case} />
      <Route path="/CheckoutForm" component={CheckoutForm} />
    </div>
  </Router>,
  document.getElementById("root")
);
ReactDOM.render(<NavBar />, document.getElementById("Nav"));
