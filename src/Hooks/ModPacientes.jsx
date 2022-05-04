import {useEffect, useState} from 'react'
import axios from 'axios'

const ModPacientes = (URL,Token,ID,nombre, apellido, escolaridad, fechaNacimiento,sexo,idDoctor) =>{
    const [error, setError] = useState(null);


    const apiUrl = "https://geriatric-app.herokuapp.com";
    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            "x-access-token": Token
        }
    });
    
    const Change = async()=>{
        try{
        return await authAxios.put(`${apiUrl}/${URL}/${ID}`,{'nombre':nombre, 'apellido':apellido,'escolaridad':escolaridad,'fechaNacimiento':fechaNacimiento,'sexo':sexo,'idDoctor':idDoctor})
        .then((res) => {
            console.log(res); 
            return res
        });

        } catch (error){
            setError(error);
        }
    }
    return Change
}
export default ModPacientes