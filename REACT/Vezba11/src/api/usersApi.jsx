import { api } from "./../config/properties";
import axios from "axios";

export const getUsers = async () => {
  try {
    const result = await fetch(`${api.root}/users`);
    const json = await result.json();
    return await Promise.resolve(json);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const deleteUser = (id) => {
  return axios
    .delete(`${api.root}/users/${id}`)
    .then((res) => Promise.resolve(id)) //{}
    .catch((err) => Promise.reject(err));
};
