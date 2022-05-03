import {useEffect, useState} from 'react'
import axios from 'axios'

const GetPacientes = (URL, token, coincidence) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const apiUrl = "https://geriatric-app.herokuapp.com";
    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            "x-access-token": token
        }
    });

    useEffect(async() => {
        try{
            const response = await authAxios.post(URL,{ 'nombre' : coincidence, "ademasInactivos": 0});
            console.log(response);
            console.log("1");
                setData(response.data.response);
        } catch (error){
            setError(error);
        }

    }, []);

    return [data, error];
}

export default GetPacientes