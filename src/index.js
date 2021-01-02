import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "./components/Title";
import LinksTable from "./components/LinksTable";
import Links from "./api/GetLinks";


ReactDOM.render(
  <Router>
    <Title />
    <LinksTable />
    {/* <Links /> */}
  </Router>,
  document.getElementById("app")
);
