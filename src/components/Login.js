import React, { useState } from "react";
import axios from "axios";
import { register } from "../action/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Login = ({ register }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [tombol, setTombol] = useState(false);
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    setTombol({ tombol: !tombol });
    e.preventDefault();
    const loginUser = {
      email,
      password,
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(loginUser);

      const res = await axios.post("/api/users/login", body, config);
      console.log(res.data);
      register(res.data.token);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div style={{ backgroundColor: "#354052" }}>
      <main className="main d-flex w-100">
        <div className="container d-flex flex-column">
          <div className="row h-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
                <div className="text-center mt-4">
                  <h1 className="h2" style={{ color: "#ffffff" }}>
                    Selamat Datang di Pemilihku
                  </h1>
                  <p className="lead" style={{ color: "#f7f7f7" }}>
                    Pilih aku atau dia
                  </p>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="m-sm-5">
                      <div className="text-center">
                        {/* <img
                        src="img\avatars\avatar.jpg"
                        alt="Chris Wood"
                        className="img-fluid rounded-circle"
                        width="132"
                        height="132"
                      ></img> */}
                      </div>
                      <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            className="form-control form-control-lg"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => onChange(e)}
                            required
                          ></input>
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            className="form-control form-control-lg"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => onChange(e)}
                            required
                            minLength="8"
                          ></input>
                        </div>
                        <div>
                          {/* <div className="custom-control custom-checkbox align-items-center"> */}
                          {/* <input
                              type="checkbox"
                              className="custom-control-input"
                              value="remember-me"
                              name="remember-me"
                              checked=""
                            ></input> */}
                          {/* <label className="custom-control-label text-small">
                            Remember me next time
                          </label> */}
                          {/* </div> */}
                        </div>
                        <div className="text-center mt-4">
                          {/* <a
                            href="/dashboard"
                            className="btn btn-lg btn-primary"
                          >
                            Sign in
                          </a> */}
                          {!tombol ? (
                            <button
                              disabled={tombol}
                              type="submit"
                              className="btn btn-lg btn-info"
                            >
                              Masuk
                            </button>
                          ) : null}
                          <br />
                          <div
                            hidden={!tombol}
                            className="spinner-grow text-info"
                            role="status"
                            style={{ marginTop: "-50px" }}
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                      </form>
                      <div className="text-center mt-3">
                        <p className={{ align: "center" }}>
                          {" "}
                          Belum punya akun?
                          <a href="/register" style={{ color: "#5b7dff" }}>
                            {" "}
                            Daftar
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Login.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(null, { register })(Login);
