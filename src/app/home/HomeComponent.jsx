import React from "react";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { ids: {} };
  }

  addIdToList(event, id) {
    const { ids } = this.state;
    ids[id] = event.target.checked;
    this.setState({ ...this.state, ids: ids });
  }

  removeWord(id) {
    this.confirmRemove([id]);
  }

  confirmRemove(ids) {
    confirmAlert({
      onClickOutside: () => {
        this.props.history.push("/home");
      },
      customUI: ({ onClose }) => (
        <div className="modal-type-1">
          <h1>Notification</h1>
          <p>You want to delete?</p>
          <button
            onClick={onClose}
          >
            No
          </button>
          <button onClick={() => {
            onClose();
            toast.success("You delete successful!");

            console.log(ids);

            this.props.removeWord(ids);
          }}>Confirm</button>
        </div>
      )
    });
  }

  render() {
    const { vocabularyList } = this.props.all.vocabulary;
    const { ids } = this.state;

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
            <div className="button inverz" onClick={this.confirmRemove.bind(this, Object.keys(this.state.ids).map(e => Number(e)).filter(e => this.state.ids[e]))}>
              <i className="fa fa-trash-o" />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="list">
            <ul>
              {vocabularyList.map((e, i) => (
                <li key={e.id}>
                  <label className="label--checkbox">
                    <input
                      onClick={event => this.addIdToList(event, e.id)}
                      type="checkbox"
                      className="checkbox"
                      checked={!!ids[e.id]}
                    />
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
                    <div className="button inverz">
                      <i className="fa fa-edit" />
                    </div>
                    <div
                      className="button inverz"
                      onClick={this.removeWord.bind(this, e.id)}
                    >
                      <i className="fa fa-trash-o" />
                    </div>
                    <div className="button">Inactive</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default HomeComponent;
