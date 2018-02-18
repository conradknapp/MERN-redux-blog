import React, { Component } from "react";
import { connect } from "react-redux";
import { onFetchPosts } from "../actions/index";
import map from "lodash.map";
import { Link } from "react-router-dom";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.onFetchPosts();
  }

  renderPosts() {
    return map(this.props.posts.posts, ({ id, title }) => {
      return (
        <li className="list-group-item" key={id}>
          <Link to={`/posts/${id}`}>{title}</Link>
        </li>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <section className="container-fluid">
        <div className="text-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add Post
          </Link>
        </div>
        <h1 className="text-center">Posts</h1>
        <ul className="list-group list-unstyled">{this.renderPosts()}</ul>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

// can pass in the action creator directly to connect instead of creating the function mapDispatchToProps
export default connect(mapStateToProps, { onFetchPosts })(PostsIndex);
