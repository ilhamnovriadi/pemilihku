import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../action/auth";
import { Redirect } from "react-router-dom";

const sidebarContent = ({ auth: { isAuthenticated}, logout }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <ul className="sidebar-nav">
        <li className="sidebar-header">Main</li>
        <li className="sidebar-item active">
          <div
            href="#dashboards"
            data-toggle="collapse"
            className="sidebar-link collapsed"
            aria-expanded="true"
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
            className="sidebar-dropdown list-unstyled collapse show"
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
          <a href="#!" className="sidebar-link" onClick={logout}>
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
          </a>
        </li>
        <div className="sidebar-bottom d-none d-lg-block">
          <div className="media">
            <div className="media-body">
              <div>Powered by Kuantum Inspirasi</div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

sidebarContent.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStatetoProps, { logout })(sidebarContent);
