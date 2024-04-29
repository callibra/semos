import { api } from "./../config/properties";
import axios from 'axios';
export const getPosts = async (token) => {
  try {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    const res = await fetch(`${api.localRoute}/posts`, {
      method: "GET",
      headers: headers,
    });
    const json = await res.json();
    console.log(json);
    if (json.message) {
      throw new Error(json.message);
    }
    return await Promise.resolve(json);
  } catch (err) {
    console.log(err);
    return await Promise.reject(err);
  }
};

export const addPost = async (requestParams) => {
  try {
    const header = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + requestParams.token,
    };
    const result = await fetch(`${api.localRoute}/posts`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(requestParams.post),
    });
    const json = await result.json();
    if(json.message === 'Author and post are required'){
        throw new Error(json.message)
    }
    return await Promise.resolve(json);
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
};

export const updatePost = async (requestParams) => {
  try {
    const header = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + requestParams.token,
    };
    const result = await fetch(`${api.localRoute}/posts/${requestParams.post.id}`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(requestParams.post),
    });
    const json = await result.json();
    if(json.message === 'Author and post are required'){
        throw new Error(json.message)
    }
    return await Promise.resolve(json);
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
};

export const deletePost = (id) => {
  return axios
    .delete(`${api.root}/posts/${id}`)
    .then((res) => Promise.resolve(id)) 
    .catch((err) => Promise.reject(err));
};
