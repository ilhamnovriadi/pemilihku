import React, { Component } from "react";

export default class sidebarContent extends Component {
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
    const classOne = collapsed ? "sidebar-dropdown list-unstyled collapse" : "sidebar-dropdown list-unstyled collapse show";
    return (
      <div>
        <ul className="sidebar-nav">
          <li className="sidebar-header">Main</li>
          <li className="sidebar-item active">
            <div
              href="#dashboards"
              data-toggle="collapse"
              className="sidebar-link collapsed"
              aria-expanded={collapsed}
              onClick={this.toggleNavbar}
            >
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
                className="feather feather-sliders align-middle"
              >
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>{" "}
              <span className="align-middle">Dashboard</span>
            </div>
            <ul
              id="dashboards"
              className={classOne}
              data-parent="#sidebar"
            >
              <li className="sidebar-item active">
                <div className="sidebar-link" href="dashboard-default.html">
                  Input Suara
                </div>
              </li>
              <li className="sidebar-item">
                <div className="sidebar-link" href="dashboard-analytics-1.html">
                  Setting
                </div>
              </li>
              <li className="sidebar-item">
                <div className="sidebar-link" href="dashboard-crypto.html">
                  About{" "}
                  <span className="sidebar-badge badge badge-primary">New</span>
                </div>
              </li>
            </ul>
          </li>
          {/* logout */}
          <li className="sidebar-item">
            <div
              href="#logout"
              className="sidebar-link"
            >
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
                className="feather feather-log-out align-middle"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>{" "}
              <span className="align-middle">Logout</span>
            </div>
          </li>
          <div className="sidebar-bottom d-none d-lg-block">
					<div className="media">
						<div className="media-body">
							<div>
								 Powered by Kuantum Inspirasi
							</div>
						</div>
					</div>
				</div>
        </ul>
      </div>
    );
  }
}
