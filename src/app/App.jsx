import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomeContainer from "./home/HomeContainer";
import AddWordContainer from "./vocabulary/AddWordContainer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

toast.configure();

class App extends Component {
  constructor(props) {
    super(props);
    document.querySelectorAll("[data-loading]")[0].remove();
  }

  componentDidMount = () => {
    
  };

  render() {
    return (
      <div className="page">
        <div className="pageHeader">
          <div className="title">
            LOGO
          </div>
          <div className="userPanel">
            <span className="username">Hieu Bui</span>
            <img src="https://avatar.skype.com/v1/avatars/live:buihieu547?auth_key=-2070632841&returnDefaultImage=false&size=l" width="40" height="40" />
          </div>
        </div>
        <div className="main">
          <div className="nav">
            <div className="searchbox">
              <div>
                <i className="fa fa-search" />
                <input type="search" placeholder="Search" />
              </div>
            </div>
            <div className="menu">
              <div className="title">Navigation</div>
              <ul>
                <li className="active">
                  <i className="fa fa-home" />
                  Home
                </li>
              </ul>
            </div>
          </div>
          <Router>
            <Switch>
              <Route exact path="/home" component={HomeContainer} />
              <Route path="/add-new-word" component={AddWordContainer} />
              <Route path="/edit-word/:id" component={AddWordContainer} />
              <Redirect from="/" to="/home" />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
