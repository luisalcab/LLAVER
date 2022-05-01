import React from 'react'
import { useState, useEffect } from 'react'
import Cards from "./Cards.jsx";
import Examen from "./MiniMental.json";
import axios from 'axios';

const MiniMental = () => {

    const [exam, setExam] = useState();
    const [escolaridad, setEscolaridad] = useState(4);
    const [idExam, setIdExam] = useState(1);

    // Conexión con el servidor
    const [tokenAuth, setTokenAuth] = useState(localStorage.getItem("token"));
    const apiUrl = "http://localhost:3002";
    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            "x-access-token": `${tokenAuth}`
        }
    });

    async function getExam() {
        try {
          const response = await authAxios.get('/consultaGeriatrica/obtenerExamen/1');
            setExam(response.data.response);
        } catch (error) {
          console.error(error);
        }
      }

    useEffect( () => {
        getExam();
    }, []);

    const Pregunta = () => {

        return (
            <div>
                
                {exam.data.examnSections && exam.data.examnSections.map((section) => (
                    <div>
                        <h3 className='ml-12'>
                            {section.nombreSeccion}
                        </h3>
                        {section.preguntas && section.preguntas.map((question) => (
                            <Cards key={question.idPregunta}
                            id={question.idPregunta}
                            pregunta={question.pregunta}
                            escolaridad = {escolaridad}
                            puntajeMaximo = {question.puntajeMaximo}/>
                        ))}
                    </div>
                ))}
                
            </div>
        )
    }

    if(!exam) {
        return null;
    }
    return (
        <div className='bg-white rounded-lg shadow-lg mx-auto w-4/6 items-center p-5 mt-16'>
            
            <h1 className='font-bold m-5'>
                {exam.data.examn.nombreExamen}
            </h1>
            <form>
                <Pregunta/>
                <div class="flex justify-center text-white">
                    <input
                        type="submit"
                        value="Enviar"
                        class="mt-5 border rounded-full hover:scale-110 py-2 px-8 md:w-2/5 bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                </div>
            </form>
    
        </div>
    )
}

export default MiniMental