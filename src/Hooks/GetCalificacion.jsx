import React from 'react'
import axios from 'axios';

const GetCalificacion = () => {
    const GetCal = async (idConsulta, idCliente, idExamen, token) => {
        try{
            return await axios({
                url:`http://localhost:3002/estadistica/obtenerTotalExamem/${idConsulta}/${idCliente}/${idExamen}`,
                method: "get",
                withCredentials: false,
                headers: {"x-access-token": token}
            }).then(response => response);
        }catch(error){
            console.log(error,"xdxd");
        }
    }

    return [GetCal]
}

export default GetCalificacion