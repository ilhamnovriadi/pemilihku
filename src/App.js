import React, { Component } from "react";
import logo from "./pemilihku-03.png";
import "./App.css";
import person from "./img/avatars/avatar.jpg"
//import Navigation from "./nav"

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
                className="nav-link dropdown-toggle d-none d-sm-inline-block"
                href="#"
                data-toggle="dropdown"
              >
                <img src={person} className="avatar img-fluid rounded-circle mr-1" alt="Chris Wood"></img>
                <span className="text-dark">Ilham Novriadi</span>
              </div>
            </div>
          </nav>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Pilih pemimpin idealmu dengan sekali klik.</h1>
            <a
              className="link"
              href="https://pemilihku.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              pemilihku.com
            </a>
          </header>
        </div>
      </div>
    );
  }
}
