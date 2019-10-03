import React from "react";
import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./duck/styles.css";

const validateForm = Yup.object().shape({
  name: Yup.string().required("Please fill in this field"),
  pronunciation_us: Yup.string().required("Please fill in this field"),
  pronunciation_uk: Yup.string().required("Please fill in this field"),
  meaning: Yup.string().required("Please fill in this field")
});

class AddWordComponent extends Component {
  constructor(props) {
    super(props);
  }

  submit(value, actions) {
    console.log(value, actions);
  }

  render() {
    const form = {
      name: "",
      pronunciation_us: "",
      pronunciation_uk: "",
      meaning: "",
      des: "",
      reference: ""
    };

    return (
      <div className="view">
        <div className="viewHeader">
          <div className="title">Add New Word</div>
        </div>
        <div className="content">
          <Formik
            initialValues={form}
            validationSchema={validateForm}
            onSubmit={this.submit}
            render={({ errors, status, touched, isSubmitting }) => (
              <Form className="material-form">
                <div className="material-form__container">
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="material-form__input"
                    placeholder=" "
                  />
                  <label className="material-form__label" htmlFor="name">
                    Name Word
                  </label>
                  <div className="material-form__focus-animation" />
                  <p
                    className={
                      errors.name && touched.name ? (
                        'material-form__error active'
                      ) : 'material-form__error'
                    }
                  >
                    {errors.name}
                  </p>
                </div>
                <div className="material-form__container">
                  <Field
                    type="text"
                    name="pronunciation_us"
                    id="pronunciation_us"
                    className="material-form__input"
                    placeholder=" "
                  />
                  <label
                    className="material-form__label"
                    htmlFor="pronunciation_us"
                  >
                    Pronunciation (US)
                  </label>
                  <div className="material-form__focus-animation" />
                  <p
                    className={
                      errors.pronunciation_us && touched.pronunciation_us ? (
                        'material-form__error active'
                      ) : 'material-form__error'
                    }
                  >
                    {errors.pronunciation_us}
                  </p>
                </div>
                <div className="material-form__container">
                  <Field
                    type="text"
                    name="pronunciation_uk"
                    id="pronunciation_uk"
                    className="material-form__input"
                    placeholder=" "
                  />
                  <label
                    className="material-form__label"
                    htmlFor="pronunciation_uk"
                  >
                    Pronunciation (UK)
                  </label>
                  <div className="material-form__focus-animation" />
                  <p
                    className={
                      errors.pronunciation_uk && touched.pronunciation_uk ? (
                        'material-form__error active'
                      ) : 'material-form__error'
                    }
                  >
                    {errors.pronunciation_uk}
                  </p>
                </div>
                <div className="material-form__container">
                  <Field
                    type="text"
                    name="meaning"
                    id="meaning"
                    className="material-form__input"
                    placeholder=" "
                  />
                  <label className="material-form__label" htmlFor="meaning">
                    Meaning
                  </label>
                  <div className="material-form__focus-animation" />
                  <p
                    className={
                      errors.meaning && touched.meaning ? (
                        'material-form__error active'
                      ) : 'material-form__error'
                    }
                  >
                    {errors.meaning}
                  </p>
                </div>
                <div className="material-form__container">
                  <Field
                    type="text"
                    name="des"
                    id="des"
                    className="material-form__input"
                    placeholder=" "
                  />
                  <label className="material-form__label" htmlFor="des">
                    Description
                  </label>
                  <div className="material-form__focus-animation" />
                </div>
                <div className="material-form__container">
                  <Field
                    type="text"
                    name="reference"
                    id="reference"
                    className="material-form__input"
                    placeholder=" "
                  />
                  <label className="material-form__label" htmlFor="reference">
                    Reference
                  </label>
                  <div className="material-form__focus-animation" />
                </div>
                <button type="submit" className="material-form__button">
                  SUBMIT
                </button>
              </Form>
            )}
          />
        </div>
      </div>
    );
  }
}

export default AddWordComponent;
