import React from 'react'
import { useState, useEffect } from 'react'
import Cards from "./Cards.jsx";
import axios from 'axios';
import Get from '../../Hooks/Get.jsx';
import Notas from './Notas.jsx';

const MiniMental = () => {

    const [escolaridad, setEscolaridad] = useState(4);
    const [idExam, setIdExam] = useState(1);

    // Conexión con el servidor
    const [tokenAuth, setTokenAuth] = useState(localStorage.getItem("token"));
    const apiUrl = `/consultaGeriatrica/obtenerExamen/${idExam}`;	
    const [datos, error] = Get(apiUrl, tokenAuth);

    const Pregunta = () => {

        return (
            <div>
                
                {datos.data.examnSections && datos.data.examnSections.map((section) => (
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

    return (
        <>
        {datos ? (
            <>
            <Notas/>
                <div className='bg-white rounded-lg shadow-lg mx-auto w-4/6 items-center p-5 mt-16'>
                    <h1 className='font-bold m-5'>
                        {datos.data.examn.nombreExamen}
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
            </>
            )
            :(
                <div>

                </div>
            )}
        </>
    )
}

export default MiniMental