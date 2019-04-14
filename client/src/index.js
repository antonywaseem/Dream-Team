import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import UpdateTest from "./components/updateTest";
import EmployeeTable from "./components/employeeTable";
import SignUp from "./components/signup";
import FormTable from "./components/formTable";
<<<<<<< HEAD
import HomePage from './pages/homepage';
// import Login from './components/login';
// import UpdateTest from './components/updateTest';
// import EmployeeTable from './components/employeeTable';
// import SignUp from './components/signup';
// import FormTable from './components/formTable';
import searchBar from './components/searchBar';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import UserTable from './components/usertable/userTable';
import LawyerViewhisCases from './components/LawyerViewhisCases'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Case from './pages/LRspecificCase';
import 'bootstrap/dist/css/bootstrap.css';
import ReviewerViewhisForms from './components/ReviewerViewhisForms'
=======
import HomePage from "./pages/homepage";
import searchBar from "./components/searchBar";
import UserTable from "./components/userTable/userTable";
import LawyerViewhisCases from "./components/LawyerViewhisCases";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Case from "./pages/LRspecificCase";
import "bootstrap/dist/css/bootstrap.css";
import ReviewerViewhisForms from "./components/ReviewerViewhisForms";
>>>>>>> backEnd
// import UserTable from "./components/userTable/userTable";
import * as serviceWorker from "./serviceWorker";
import Investor from "./components/investor";
import ComRule from "./components/comRule/comRule";
import CalcRule from "./components/calcRule/calcRule";
<<<<<<< HEAD
import LawyerFillForm from "./components/LawyerFillForm"
import filtercase from "./components/filterCase/filterCase"
ReactDOM.render(
  <Router>
    <div>
    <Route exactpath="/" component={HomePage} />
    <Route path="/filter" component={filtercase} />
=======
import NavBar from "./components/layout/layout";
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
>>>>>>> backEnd
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
