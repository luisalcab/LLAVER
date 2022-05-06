import React from 'react'
import { useState, useEffect } from 'react'
import Cards from "./Cards.jsx";
import axios from 'axios';
import Get from '../../Hooks/Get.jsx';
import Textito from './textArea.jsx';
import Spinner from "../Spinner";
import PostExamen from '../../Hooks/PostExamen.jsx';
import GetCalificacion from '../../Hooks/GetCalificacion.jsx';
import formato from "../../data/examFormat.json"
import CrearConsulta from '../../Hooks/CrearConsulta.jsx';
import consultaFormat from "../../data/consultaFormat.json"

const MiniMental = ({setMiniMental, setValidation, setValidationMessage, setFromMini}) => {

    const [escolaridad, setEscolaridad] = useState(4);
    const [idExam, setIdExam] = useState(1);
    const [resp, setResp] = useState("");
    const [total, setTotal] = useState(0);
    const [idConsulta, setIdConsulta] = useState();


    // Conexión con el servidor
    const [tokenAuth, setTokenAuth] = useState(localStorage.getItem("token"));
    const [idPaciente, setidPaciente] = useState(localStorage.getItem("IDPatient"))
    const apiUrl = `/consultaGeriatrica/obtenerExamen/${idExam}`;	
    const [datos, error] = Get(apiUrl, tokenAuth);

    //CustomHooks para las consultas a la api
    const [postExamen] = PostExamen(formato, 1234, 74, idExam, tokenAuth);
    const [GetTotal] = GetCalificacion(1234,74,idExam,tokenAuth);
    const [crearConsulta] = CrearConsulta(consultaFormat, tokenAuth);

    useEffect(() => {
        /*
        consultaFormat.fechaConsulta = new Date().toLocaleDateString("fr-CA");
        consultaFormat.idPaciente = idPaciente;
        await crearConsulta().then ( async (response) => {
            console.log(response.data.response.data);
            setIdConsulta(response.data.response.data);
        })
        */
       console.log("GetIDConsulta")
    }, [])

    useEffect(() => {
        setValidationMessage(`${resp}. Total de puntos ${total}`);
    }, [resp, total]);

    const joinAnswers = (puntaje, id) => {
        formato.respuestasExamen[id-1].puntaje = puntaje;
    }

    const Pregunta = () => {

        return (
            <div>
                
                {datos.data.examnSections && datos.data.examnSections.map((section) => (
                    <div>
                        <h3 className='ml-12'>
                            {section.nombreSeccion}
                        </h3>
                        {section.preguntas && section.preguntas.map((question) => (
                            <Cards 
                                key={question.idPregunta}
                                id={question.idPregunta}
                                pregunta={question.pregunta}
                                escolaridad = {escolaridad}
                                puntajeMaximo = {question.puntajeMaximo}
                                joinAnswers = {joinAnswers}
                                />
                        ))}
                    </div>
                ))}
                
            </div>
        )
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        //Preparamos el json
        formato.respuestasExamen[8].respuesta = localStorage.getItem("Imagen") ?? ""
        formato.notas = localStorage.getItem("notas") ?? 'Nota vacia'

        //Hace el post del json ya listo
        await postExamen().then (async (response) => {
                console.log(response.data.response.data);
                setResp(response.data.response.data);
            //Obtenemos la calificacion total
            await GetTotal().then ( async (response) => {
                console.log(response.data.response.data);
                setTotal(response.data.response.data);
            })
        }).then(() =>{localStorage.removeItem("notas")
        setMiniMental(false);
        setFromMini(true);
        setValidation(true);});
    }

    return (
        <>
        
        {datos ? (
            <div> 
                <Textito/>
                <div className='bg-white rounded-lg shadow-lg mx-auto w-4/6 items-center p-5 mt-16'>
                    <h1 className='font-bold m-5'>
                        {datos.data.examn.nombreExamen}
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                    >
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
            </div>
            )
            :(
                <div>
                    <Spinner/>
                </div>
            )}
        </>
    )
}

export default MiniMental