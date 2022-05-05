import { useEffect, useState } from "react";
import axios from "axios";

const Put = (URL, Token, ID) => {
  const [error, setError] = useState(null);

  const apiUrl = "https://geriatric-app.herokuapp.com";
  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      "x-access-token": Token,
    },
  });
  console.log(`${apiUrl}/${URL}/${ID}`);

  const Call = async (reqBody) => {
    try {
      if (reqBody) {
        return await authAxios
          .put(`${apiUrl}/${URL}/${ID}`, reqBody)
          .then((res) => {
            console.log(res);
            return res;
          });
      } else {
        return await authAxios.put(`${apiUrl}/${URL}/${ID}`).then((res) => {
          console.log(res);
          return res;
        });
      }
    } catch (error) {
      setError(error);
    }
  };
  return [Call];
};
export default Put;
