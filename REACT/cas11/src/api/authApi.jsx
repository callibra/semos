import { api } from "./../config/properties";
import axios from "axios";

export const LogInUser = (username, password) => {
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json,text/plain,*/*",
  };
  const data = { username: username, password: password };
  return axios
    .post(`${api.localRoute}/login`, { headers: header, data: data })
    .then((json) => Promise.resolve(json))
    .catch((err) => Promise.reject(err));
};


export const registerUser = async (username,password) =>{
    const header = {
        "Content-Type":"application/json",
        Accept:"application/json"
    }
    const data = {username:username,password:password}
    try {
        const json = await axios.post(`${api.localRoute}/register`, { headers: header, body: data });
        console.log(json)
        return await Promise.resolve(json);
    } catch (err) {
        console.log(err)
        return Promise.reject(err.response.data.message);
    }

}