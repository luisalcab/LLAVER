import React from 'react'
import axios from "axios"
import {useEffect,useState} from 'react'

const PostAnio = (URL,token,reqBody) => {
    const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl = "http://localhost:3002";
  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      "x-access-token": token,
    },
  });

  useEffect(() => {
    async function getData() {
        try {
          const response = await authAxios.post(URL,reqBody);
          setData(response.data.response);
        } catch (error) {
          setError(error);
        }
    }
    getData();
  }, []);

  return [data, error, setData];
};

export default PostAnio