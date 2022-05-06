import React from 'react'
import axios from "axios"
import {useState} from 'react'

const PostExamen = (Data, idConsulta, idPaciente, idExamen, token) => {
    const [error, setError] = useState(null);

    const PostExamen = async () => {
        try{
            return await axios({
                url:`https://geriatric-app.herokuapp.com/consultaGeriatrica/obtenerExamen/${idConsulta}/${idPaciente}/${idExamen}`,
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