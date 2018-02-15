import React, { Component } from "react";
import { connect } from "react-redux";
import { onFetchPosts } from "../actions/index";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.onFetchPosts();
  }

  render() {
    return <div>Posts</div>;
  }
}

// can pass in the action creator directly to connect instead of creating the function mapDispatchToProps
export default connect(null, { onFetchPosts })(PostsIndex);
