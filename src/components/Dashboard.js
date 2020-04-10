import React, { Component } from "react";
import logo from "../pemilihku-03.png";
import person from "../img/avatars/avatar.jpg";
//import Navigation from "./nav"
import SidebarContent from "./molekul/sidebarContent";
import MainKonten from "./molekul/mainKonten"
import Konter from './counter'

export default class nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? "sidebar" : "sidebar toggled";
    return (
      <div className="wrapper">
        <nav className={`${classOne}`}>
          <div className="sidebar-content ">
            <a className="sidebar-brand" href="index.html">
              <img src={logo} width="40" height="40" alt="person"></img>
              <span className="align-middle"> Pemilihku.com</span>
            </a>
            <SidebarContent />
          </div>
        </nav>
        <div className="main">
          <nav className="navbar navbar-expand navbar-light bg-white">
            <div
              onClick={this.toggleNavbar}
              className="sidebar-toggle d-flex mr-2"
            >
              <i className="hamburger align-self-center"></i>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav ml-auto"></ul>

              <div
                className="nav-icon dropdown-toggle"
                href="#"
                id="alertsDropdown"
                data-toggle="dropdown"
              >
                <div className="position-relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bell-off align-middle"
                  >
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
                    <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
                    <path d="M18 8a6 6 0 0 0-9.33-5"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                </div>
              </div>

              <div
                className="nav-link dropdown-toggle d-none d-sm-inline-block"
                href="#"
                data-toggle="dropdown"
              >
                <img
                  src={person}
                  className="avatar img-fluid rounded-circle mr-1"
                  alt="Chris Wood"
                ></img>
                <span className="text-dark">Ilham Novriadi</span>
              </div>
            </div>
          </nav>
          {/* konten */}
          <div className="content">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-12 col-sm-6 col-xl d-flex">
                  <div className="card flex-fill">
                    <div className="card-body py-4">
                      <div className="media">
                        <div className="d-inline-block mt-2 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-shopping-cart feather-lg text-primary"
                          >
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                          </svg>
                        </div>
                        <div className="media-body">
                          <h3 className="mb-2">2.562</h3>
                          <div className="mb-0">Sales Today</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl d-flex">
                  <div className="card flex-fill">
                    <div className="card-body py-4">
                      <div className="media">
                        <div className="d-inline-block mt-2 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-activity feather-lg text-warning"
                          >
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                          </svg>
                        </div>
                        <div className="media-body">
                          <h3 className="mb-2">17.212</h3>
                          <div className="mb-0">Visitors Today</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl d-flex">
                  <div className="card flex-fill">
                    <div className="card-body py-4">
                      <div className="media">
                        <div className="d-inline-block mt-2 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-dollar-sign feather-lg text-success"
                          >
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                        </div>
                        <div className="media-body">
                          <h3 className="mb-2">$ 24.300</h3>
                          <div className="mb-0">Total Earnings</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl d-flex">
                  <div className="card flex-fill">
                    <div className="card-body py-4">
                      <div className="media">
                        <div className="d-inline-block mt-2 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-shopping-bag feather-lg text-danger"
                          >
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                          </svg>
                        </div>
                        <div className="media-body">
                          <h3 className="mb-2">43</h3>
                          <div className="mb-0">Pending Orders</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl d-none d-xxl-flex">
                  <div className="card flex-fill">
                    <div className="card-body py-4">
                      <div className="media">
                        <div className="d-inline-block mt-2 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-dollar-sign feather-lg text-info"
                          >
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                        </div>
                        <div className="media-body">
                          <h3 className="mb-2">$ 18.700</h3>
                          <div className="mb-0">Total Revenue</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <MainKonten></MainKonten>
            <Konter/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
