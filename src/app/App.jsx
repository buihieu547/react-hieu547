import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./home/HomeContainer";

class App extends Component {
  constructor(props) {
    super(props);
    document.querySelectorAll("[data-loading]")[0].remove();
  }

  componentDidMount = () => {};

  render() {
    return (
      <div class="page" style={{marginTop: 10 + 'px'}}>
        <div class="pageHeader">
          <div class="title">Dashboard</div>
          <div class="userPanel">
            <i class="fa fa-chevron-down" />
            <span class="username">John Doe </span>
            <img
              src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg"
              width="40"
              height="40"
            />
          </div>
        </div>
        <div class="main">
          <div class="nav">
            <div class="searchbox">
              <div>
                <i class="fa fa-search" />
                <input type="search" placeholder="Search" />
              </div>
            </div>
            <div class="menu">
              <div class="title">Navigation</div>
              <ul>
                <li>
                  {" "}
                  <i class="fa fa-home" />
                  Home
                </li>
                <li>
                  <i class="fa fa-signal" />
                  Activity
                </li>
                <li class="active">
                  {" "}
                  <i class="fa fa-tasks" />
                  Manage Tasks
                </li>
                <li>
                  {" "}
                  <i class="fa fa-envelope" />
                  Messages
                </li>
              </ul>
            </div>
          </div>
          <Router>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/home" component={HomeContainer} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
