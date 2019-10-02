import React from "react";
import React, { Component } from "react";

class HomeComponent extends Component {
  render() {
    return (
      <div className="view">
        <div className="viewHeader">
          <div className="title">Home</div>
          <div className="functions">
            <div className="button active">Add New Task</div>
            <div className="button inverz">
              <i className="fa fa-trash-o" />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="list">
            <ul>
              <li className="checked">
                <i className="fa fa-check-square-o" />
                <span>Update team page</span>
                <div className="info">
                  <div className="button green">In progress</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
