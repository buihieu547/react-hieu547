import React from "react";
import React, { Component } from "react";
import "./duck/styles.css";

class AddWordComponent extends Component {
  addNewWord() {

  }

  render() {
    return (
      <div className="view">
        <div className="viewHeader">
          <div className="title">Add New Word</div>
        </div>
        <div className="content">
          <form className="material-form">
            <div className="material-form__container">
              <input
                className="material-form__input"
                type="text"
                placeholder=" "
                id="name"
                maxLength={250}
              />
              <label className="material-form__label" for="name">
                Name Word
              </label>
              <div className="material-form__focus-animation" />
              <p className="material-form__error">Nombre no válido</p>
            </div>
            <div className="material-form__container">
              <input
                className="material-form__input"
                type="text"
                placeholder=" "
                id="pronunciation_us"
                maxLength={250}
              />
              <label className="material-form__label" for="pronunciation_us">
                Pronunciation (US)
              </label>
              <div className="material-form__focus-animation" />
              <p className="material-form__error">Nombre no válido</p>
            </div>
            <div className="material-form__container">
              <input
                className="material-form__input"
                type="text"
                placeholder=" "
                id="pronunciation_uk"
                maxLength={250}
              />
              <label className="material-form__label" for="pronunciation_uk">
                Pronunciation (UK)
              </label>
              <div className="material-form__focus-animation" />
              <p className="material-form__error">Nombre no válido</p>
            </div>
            <div className="material-form__container">
              <input
                className="material-form__input"
                type="text"
                placeholder=" "
                id="meaning"
                maxLength={250}
              />
              <label className="material-form__label" for="meaning">
                Meaning
              </label>
              <div className="material-form__focus-animation" />
              <p className="material-form__error">Nombre no válido</p>
            </div>
            <div className="material-form__container">
              <input
                className="material-form__input"
                type="text"
                placeholder=" "
                id="des"
                maxLength={250}
              />
              <label className="material-form__label" for="des">
                Description
              </label>
              <div className="material-form__focus-animation" />
              <p className="material-form__error">Nombre no válido</p>
            </div>
            <div className="material-form__container">
              <input
                className="material-form__input"
                type="text"
                placeholder=" "
                id="reference"
                maxLength={250}
              />
              <label className="material-form__label" for="reference">
                Reference
              </label>
              <div className="material-form__focus-animation" />
              <p className="material-form__error">Nombre no válido</p>
            </div>
            <button className="material-form__button">SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddWordComponent;
