import React from "react";
import React, { Component } from "react";

class HomeComponent extends Component {
  render() {
    return (
      <div class="view">
        <div class="viewHeader">
          <div class="title">Manage Tasks</div>
          <div class="functions">
            <div class="button active">Add New Task</div>
            <div class="button">Completed</div>
            <div class="button inverz">
              <i class="fa fa-trash-o" />
            </div>
          </div>
        </div>
        <div class="content">
          <div class="list">
            <div class="title">Today</div>
            <ul>
              <li class="checked">
                <i class="fa fa-check-square-o" />
                <span>Update team page</span>
                <div class="info">
                  <div class="button green">In progress</div>
                  <span>Complete by 25/04/2014</span>
                </div>
              </li>
              <li>
                <i class="fa fa-square-o" />
                <span>Design a new logo</span>
                <div class="info">
                  <div class="button">Pending</div>
                  <span>Complete by 10/04/2014</span>
                </div>
              </li>
              <li>
                <i class="fa fa-square-o" />
                <span>Find a front end developer</span>
                <div class="info" />
              </li>
            </ul>
          </div>
          <div class="list">
            <div class="title">Tomorrow</div>
            <ul>
              <li>
                <i class="fa fa-square-o" />
                <span>Find front end developer</span>
                <div class="info" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
