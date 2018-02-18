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

export const onCreatePost = (values, cb) => {
  const postRequest = axios.post(BASE_URL, values).then(() => cb());

  return {
    type: actionTypes.CREATE_POST,
    payload: postRequest
  };
};

export const getPost = id => {
  const singlePostRequest = axios.get(`${BASE_URL}/${id}`);

  return {
    type: actionTypes.GET_POST,
    payload: singlePostRequest
  };
};

export const deletePost = (id, cb) => {
  axios.delete(`${BASE_URL}/${id}`).then(() => cb());

  return {
    type: actionTypes.DELETE_POST,
    payload: id
  };
};
