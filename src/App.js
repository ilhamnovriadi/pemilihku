import React, { Fragment , useEffect} from "react";
import "./App.css";
//import Dashboard from "./components/Dashboard"
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loaduser } from './action/auth'
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
   store.dispatch(loaduser())
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Login} />
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
          </Switch>
          {/* <Dashboard /> */}
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
