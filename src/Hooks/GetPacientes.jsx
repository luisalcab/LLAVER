import {useEffect, useState} from 'react'
import axios from 'axios'

const GetPacientes = (URL, token) => {
    const [error, setError] = useState(null);
    const apiUrl = "http://localhost:3002";
    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            "x-access-token": token
        }
    });

    const Filtro = async(coincidence) => {
        try{
            return await authAxios.post(URL,{ 'nombre' : coincidence, "ademasInactivos": 0}).then((res) => res.data.response.data);
        } catch (error){
            setError(error);
        }
        return {}
    }

    return Filtro;
}

export default GetPacientes