import React, { Component } from "react";
import Card from "./card";

class mainKonten extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <a href="#dashboard" className="btn btn-primary float-right mt-n1">
          <i className="fas fa-plus"></i> New project
        </a>
        <h1 className="h3 mb-3">Projects</h1>
        <div className="row">
          <Card persentase="50%"></Card>
          <Card persentase="90%"></Card>
          <Card persentase="100%"></Card>
        </div>
      </div>
    );
  }
}

export default mainKonten;
