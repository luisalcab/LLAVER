import React from 'react'
import axios from "axios"
import {useState} from 'react'

const PostExamen = () => {
    const [error, setError] = useState(null);

    const PostExamen = async (Data, idConsulta, idPaciente, idExamen, token) => {
        try{
            return await axios({
                url:`http://localhost:3002/consultaGeriatrica/obtenerExamen/${idConsulta}/${idPaciente}/${idExamen}`,
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

    return [PostExamen]
}

export default PostExamen