import React from 'react'
import { useState } from 'react'
import Cards from "./Cards.jsx";
import Examen from "./Examen.json";

const MiniMental = () => {

    const [exam, setExam] = useState(Examen);
    const [escolaridad, setEscolaridad] = useState(4);

    const Pregunta = () => {
    
        return (
            <div>
                {exam.examenComplete.examnSections && exam.examenComplete.examnSections.map((section) => (
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
        <div className='bg-white rounded-lg shadow-lg mx-auto w-4/6 items-center p-5 mt-16'>
            <h1 className='font-bold m-5'>
                {exam.examenComplete.examn.nombreExamen}
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