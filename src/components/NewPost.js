import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { onCreatePost } from "../actions/index";

class NewPost extends Component {
  renderInput({ input, label, meta: { touched, error } }) {
    const inputClass = `form-control ${
      touched && error ? "is-invalid" : "is-valid"
    }`;
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className={inputClass} type="text" {...input} />
        <p className="text-danger">{touched ? error : ""}</p>
      </div>
    );
  }

  onSubmit(values) {
    this.props.onCreatePost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="py-4 bg-light rounded container container-fluid border border-light">
        <h1 className="display-3">Add New Post</h1>
        <form
          className="form-group"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <Field
            className="form-control"
            label="Title"
            name="title"
            component={this.renderInput}
          />
          <Field
            className="form-control"
            label="Categories"
            name="categories"
            component={this.renderInput}
          />
          <Field
            className="form-control"
            label="Content"
            name="content"
            component={this.renderInput}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }

  if (!values.categories) {
    errors.categories = "Enter categories";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
};

export default reduxForm({
  validate,
  form: "NewPostsForm"
})(connect(null, { onCreatePost })(NewPost));
