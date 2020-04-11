import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { setAlert } from "../action/alert";
import { register } from "../action/auth";
import PropTypes from "prop-types";
import Alert from "../components/atom/Alert";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [tombol, setTombol] = useState(false);

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password tidak sama, periksa lagi ya :)", "danger");
      setTombol({ tombol: true});
    } else {
      register({name, email, password})
      // const newUser = {
      //   name,
      //   email,
      //   password,
      // };

      // try {
      //   const config = {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   };
      //   const body = JSON.stringify(newUser);

      //   const res = await axios.post("/api/users", body, config);
      //   register(res.data.token)
      //   setAlert("Akun kamu berhasil terdaftar, silahkan login", "success")
      // } catch (err) {
      //   setAlert(err.response.data, "danger")
      // }
    }
  };

  if(isAuthenticated){
    return <Redirect to="/dashboard"/>
  }

  return (
    <Fragment>
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
                        <form onSubmit={(e) => onSubmit(e)}>
                          <Alert />
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              className="form-control form-control-lg"
                              type="text"
                              name="name"
                              placeholder="Enter your name"
                              value={name}
                              onChange={(e) => onChange(e)}
                              required
                              minLength="8"
                            ></input>
                          </div>
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
                              placeholder="Enter password"
                              value={password}
                              onChange={(e) => onChange(e)}
                              required
                              minLength="8"
                            ></input>
                          </div>
                          <div className="form-group">
                            <label>Konfirmasi Password</label>
                            <input
                              className="form-control form-control-lg"
                              type="password"
                              name="password2"
                              placeholder="Enter password"
                              value={password2}
                              onChange={(e) => onChange(e)}
                              required
                              minLength="8"
                            ></input>
                          </div>
                          <div className="text-center mt-4">
                            {/* <a
                              href="/dashboard"
                              className="btn btn-lg btn-primary"
                            >
                              Sign up
                            </a> */}
                            {!tombol ? (
                              <button
                                disabled={tombol}
                                type="submit"
                                className="btn btn-lg btn-info"
                              >
                                Daftar
                              </button>
                            ) : null}
                            <div
                              hidden={!tombol}
                              className="spinner-grow text-info"
                              role="status"
                              style={{ marginTop: "-50px" }}
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                          <div className="text-center mt-3">
                            <p className={{ align: "center" }}>
                              {" "}
                              Sudah punya akun?
                              <a href="/login" style={{ color: "#5b7dff" }}>
                                {" "}
                                Masuk
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);
