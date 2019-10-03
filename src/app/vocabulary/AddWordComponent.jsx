import React from "react";
import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-responsive-modal";
import "./duck/styles.css";

const validateForm = Yup.object().shape({
  name: Yup.string().required("Please fill in this field"),
  pronunciation_us: Yup.string().required("Please fill in this field"),
  pronunciation_uk: Yup.string().required("Please fill in this field"),
  meaning: Yup.string().required("Please fill in this field")
});

const form = {
  name: "",
  pronunciation_us: "",
  pronunciation_uk: "",
  meaning: "",
  des: "",
  reference: ""
};

class AddWordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false
    };
  }

  submit(value, actions) {
    this.props.onAddNewWord(value);
    toast.success("You add successful!");
    // setTimeout(() => {
    //   actions.resetForm();
    //   this.setState({'isShowModal': true});
    // }, 1000);
  }

  render() {
    return (
      <div className="view">
        <div className="viewHeader">
          <div className="title">Add New Word</div>
          <div className="functions">
            <div className="button" onClick={() => this.props.history.push('/home')}>Back</div>
          </div>
        </div>
        <div className="content">
          <Formik
            initialValues={form}
            validationSchema={validateForm}
            onSubmit={this.submit.bind(this)}
            render={({
              errors,
              status,
              touched,
              isSubmitting,
              setFieldValue
            }) => (
              <Form className="material-form">
                <div className="material-form__container">
                  <Field
                    autoFocus
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
                      errors.name && touched.name
                        ? "material-form__error active"
                        : "material-form__error"
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
                      errors.pronunciation_us && touched.pronunciation_us
                        ? "material-form__error active"
                        : "material-form__error"
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
                      errors.pronunciation_uk && touched.pronunciation_uk
                        ? "material-form__error active"
                        : "material-form__error"
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
                      errors.meaning && touched.meaning
                        ? "material-form__error active"
                        : "material-form__error"
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
        <ToastContainer />
        <Modal
          showCloseIcon={false}
          onClose={() => this.props.history.push('/home')}
          open={this.state.isShowModal}
          center
          classNames={{
            modal: 'modal-type-1'
          }}
        >
          <h1>Notification</h1>
          <p>Do you want to continue for adding new word ?</p>
          <button onClick={() => this.props.history.push('/home')}>No</button>
          <button onClick={() => this.setState({'isShowModal': false})}>Yes</button>
        </Modal>
      </div>
    );
  }
}

export default AddWordComponent;
