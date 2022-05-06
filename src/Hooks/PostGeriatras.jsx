import React from 'react'
import axios from "axios"
import {useState} from 'react'

const PostGeriatras = (Data, token) => {
    const [error, setError] = useState(null);
    const PostGeriatras = async() => {
        try{
            return await axios({
                url:`https://geriatric-app.herokuapp.com/autenticacion/register`,
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
    return [PostGeriatras]
}

export default PostGeriatras
