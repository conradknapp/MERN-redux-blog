import axios from "axios";

import * as actionTypes from "./types";

const BASE_URL = "http://localhost:3030/posts";

export const onFetchPosts = () => {
  const postsRequest = axios.get(BASE_URL);

  return {
    type: actionTypes.FETCH_POSTS,
    payload: postsRequest
  };
};
