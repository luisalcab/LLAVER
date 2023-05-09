import { useEffect, useState } from "react";
import axios from "axios";

const Get = (URL, token) => {
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
          const response = await authAxios.get(URL);
          setData(response.data.response);
        } catch (error) {
          setError(error);
        }
    }
    getData();
  }, []);

  return [data, error, setData];
};

export default Get;
