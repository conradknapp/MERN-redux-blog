import React, { Component } from "react";
import { connect } from "react-redux";
import { onFetchPosts } from "../actions/index";
import { Link } from "react-router-dom";

import map from "lodash.map";
import { convertToDate, formatCategories } from "../helpers/utils";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.onFetchPosts();
  }

  renderPosts() {
    return map(this.props.posts.posts, ({ id, title, categories, date }) => {
      return (
        <li
          className="lead list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center"
          key={id}
        >
          <span>
            <Link to={`/posts/${id}`}>{title}</Link>
            <span className="text-muted mx-4 font-italic">
              {formatCategories(categories)}
            </span>
          </span>
          <span className="badge badge-primary badge-pill">
            {convertToDate(date)}
          </span>
        </li>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <div className="bg-light">
        <section className="container container-fluid">
          <div className="text-right">
            <Link to="/posts/new" className="btn btn-primary">
              Add Post
            </Link>
          </div>
          <h1 className="display-3 text-center ">Posts</h1>
          <ul className="list-group list-unstyled">{this.renderPosts()}</ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

// can pass in the action creator directly to connect instead of creating the function mapDispatchToProps
export default connect(mapStateToProps, { onFetchPosts })(PostsIndex);
