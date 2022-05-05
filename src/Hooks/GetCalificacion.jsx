import React from 'react'
import axios from 'axios';

const GetCalificacion = (idConsulta, idCliente, idExamen, token) => {
    const GetCal = async () => {
        try{
            return await axios({
                url:`https://geriatric-app.herokuapp.com/estadistica/obtenerTotalExamem/${idConsulta}/${idCliente}/${idExamen}`,
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