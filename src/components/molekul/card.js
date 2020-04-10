import React, { Component } from "react";
import banner from "../../img/photos/unsplash-1.jpg";
import personmini from "../../img/avatars/avatar-3.jpg";

export default class card extends Component {
  render(props) {
    return (
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
          {/* banner */}
          <img className="card-img" src={banner} alt="Unsplash"></img>
          {/* card */}
          <div className="card-header px-4 pt-4">
            <div className="card-actions float-right">
              <div className="dropdown">
                <a
                  href="#icon"
                  data-toggle="dropdown"
                  data-display="static"
                  aria-expanded="false"
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
                    className="feather feather-more-horizontal align-middle"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#dropdown">
                    Action
                  </a>
                  <a className="dropdown-item" href="#dropdown">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#dropdown">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <h5 className="card-title mb-0">Landing page redesign</h5>
            <div className="badge badge-success my-2">Finished</div>
          </div>

          {/* bodytext */}
          <div className="card-body px-4 pt-2">
            <p>
              Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
              imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
              mauris.
            </p>

            <img
              src={personmini}
              className="rounded-circle mr-1"
              alt="Avatar"
              width="28"
              height="28"
            ></img>
            <img
              src={personmini}
              className="rounded-circle mr-1"
              alt="Avatar"
              width="28"
              height="28"
            ></img>
            <img
              src={personmini}
              className="rounded-circle mr-1"
              alt="Avatar"
              width="28"
              height="28"
            ></img>
          </div>

          {/* progressbar */}
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-4 pb-4">
              <p className="mb-2 font-weight-bold">
                Progress <span className="float-right">{this.props.persentase}</span>
              </p>
              <div className="progress progress-sm">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: this.props.persentase }}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
