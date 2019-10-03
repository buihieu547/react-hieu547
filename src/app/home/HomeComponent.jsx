import React from "react";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class HomeComponent extends Component {
  render() {
    const { vocabularyList } = this.props.all.vocabulary;

    return (
      <div className="view">
        <div className="viewHeader">
          <div className="title">Dictionary</div>
          <div className="functions">
            <div className="button blue" onClick={() => this.props.history.push('/add-new-word')}>Add New Word</div>
            <div className="button inverz">
              <i className="fa fa-trash-o" />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="list">
            <ul>
              {vocabularyList.map((e, i) => (
                <li>
                  <i className="fa fa-check-square-o" />
                  <span>{e.name}</span>
                  <div className="info">
                    <div className="button">Backlog</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
