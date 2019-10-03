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
            <div
              className="button blue"
              onClick={() => this.props.history.push("/add-new-word")}
            >
              Add Word
            </div>
            <div className="button inverz">
              <i className="fa fa-trash-o" />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="list">
            <ul>
              {vocabularyList.map((e, i) => (
                <li key={e.id}>
                  <label class="label--checkbox">
                    <input type="checkbox" class="checkbox" />
                  </label>
                  <span className="margin-right-20 emphasize">
                    {e.name}
                    &nbsp;&nbsp;
                    <b>({e.type})</b>
                  </span>
                  <span className="main-color">UK :</span>
                  <span>&nbsp;{e.pronunciation_uk}</span>
                  <span className="margin-left-10 margin-right-10">|</span>
                  <span className="main-color">US :</span>
                  <span>&nbsp;{e.pronunciation_us}</span>
                  <span className="margin-left-20 margin-right-20">=></span>
                  <span className="emphasize">{e.meaning}</span>
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
