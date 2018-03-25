import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost, deletePost } from "../actions";
import { Link } from "react-router-dom";

import { convertToDate } from "../helpers/utils";

class Post extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  onDelete() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props.posts;

    if (!post) return <div>Loading</div>;

    const { post: { title, date, content } } = post;

    return (
      <main className="container text-center bg-light">
        <Link to="/">
          <p className="text-left">Back</p>
        </Link>
        <div className="bg-secondary text-white rounded">
          <h2 className="display-3">{title}</h2>
          <h4 className="badge badge-primary badge-pill">
            {convertToDate(date)}
          </h4>
        </div>
        <p>{content}</p>
        <button
          className="btn btn-danger text-right"
          onClick={this.onDelete.bind(this)}
        >
          Delete
        </button>
      </main>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { getPost, deletePost })(Post);
