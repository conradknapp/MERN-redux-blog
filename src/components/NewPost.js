import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class NewPost extends Component {
  renderInput(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <form>
          <Field label="Title" name="title" component={this.renderInput} />
          <Field
            label="Categories"
            name="categories"
            component={this.renderInput}
          />
          <Field label="Content" name="content" component={this.renderInput} />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "NewPostsForm"
})(NewPost);
