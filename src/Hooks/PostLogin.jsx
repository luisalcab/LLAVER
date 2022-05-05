import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const PostLogin = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl = "https://geriatric-app.herokuapp.com/autenticacion/login";
  const authAxios = axios.create({
    url: apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const Call = async (reqBody) => {
    return await authAxios
    .post(`${apiUrl}`, reqBody)
    .then((res) => {
      console.log(res);
      return res;
    });
  }
  return [Call]
};
export default PostLogin
