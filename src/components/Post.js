import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost, deletePost } from "../actions";
import { Link } from "react-router-dom";

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

    const { post: { title, categories, content } } = post;

    return (
      <main className="container text-center">
        <Link to="/">
          <p className="text-left">Back</p>
        </Link>
        <button
          className="btn btn-danger text-right"
          onClick={this.onDelete.bind(this)}
        >
          Delete Post
        </button>
        <h2>{title}</h2>
        <h5>{categories}</h5>
        <p>{content}</p>
      </main>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { getPost, deletePost })(Post);
