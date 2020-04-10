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
          <div className="col-12 col-lg-8 d-flex">
							<div className="card flex-fill w-100">
								<div className="card-header">
									<span className="badge badge-primary float-right">Monthly</span>
									<h5 className="card-title mb-0">Total Revenue</h5>
								</div>
								<div className="card-body">
									<div className="chart chart-lg"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
										<canvas id="chartjs-dashboard-line" width="686" height="350" className="chartjs-render-monitor" style={{display: "block", width: "686px", height: "350px"}}></canvas>
									</div>
								</div>
							</div>
						</div>
        </div>
      </div>
    );
  }
}


export default mainKonten;
