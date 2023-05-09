import React from 'react'
import axios from "axios"
import {useState} from 'react'

const PostPaciente = (Data, token) => {
    const [error, setError] = useState(null);
    const PostPaciente = async() => {
        try{
            return await axios({
                url:`http://localhost:3002/paciente/agregarNuevoPaciente`,
                method: "post",
                withCredentials: false,
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token},
                data: Data
            }).then(response => response);
        }catch(error){
            console.log(error);
        }

        
    }
    return [PostPaciente]
}

export default PostPaciente