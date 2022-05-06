import React from 'react'
import axios from "axios"
import {useState} from 'react'

const CrearConsulta = (Data, token) => {
    const [error, setError] = useState(null);

    const CrearConsulta = async () => {
        try{
            return await axios({
                url:`https://geriatric-app.herokuapp.com/consultaGeriatrica/crearNuevaConsulta`,
                method: "post",
                withCredentials: false,
                headers: {
                    "x-access-token": token},
                data: Data
            }).then(response => response);
        }catch(error){
            console.log(error);
        }
    }

    return [CrearConsulta]
}

export default CrearConsulta
