import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import qs from "qs";

import * as actions from "../actions";
import { Loader } from "semantic-ui-react";
import Header from "./Header/Header";
import Home from "./Main/Home";
import Profile from "./Main/Profile";
import NewPin from "./Main/NewPin";
import UserPage from "./Main/UserPage";
import requireAuth from "./Auth/RequireAuth";

class App extends Component {
  componentWillMount() {
    if (!this.props.authenticated) {
      const query = this.props.location.search;
      const parsed = qs.parse(query);
      return parsed["?token"]
        ? this.initialLoad(parsed["?token"], true)
        : this.initialLoad(localStorage.getItem("token"), false);
    }
  }

  initialLoad(token, parsedFlag) {
    if (!token) {
      return this.props.noToken();
    }
    this.props.signInUser(token).then(() => {
      if (parsedFlag) {
        localStorage.setItem("token", token);
        return this.props.history.push("/profile");
      }
    });
  }
  renderPage() {
    if (this.props.checking) {
      return <Loader active />;
    }
    return (
      <div className="app">
        <Header />
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:googleId" component={UserPage} />
          <Route exact path="/profile" component={requireAuth(Profile)} />
          <Route exact path="/new" component={requireAuth(NewPin)} />
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.renderPage()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    checking: state.auth.checking
  };
}

export default connect(mapStateToProps, actions)(App);
