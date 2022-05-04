import React, {useState, useEffect, memo} from 'react'
import Draw from '../miniMentalGames/Draw.jsx';
import Pencil from '../miniMentalGames/Pencil.jsx';
import Clock from '../miniMentalGames/Clock.jsx';
import SelectComp from './SelectComp.jsx';

const Cards = (props) => {
    
    const [id, setId] = useState(props.id);
    const [escolaridad, setEscolaridad] = useState(props.escolaridad);
    const [ids, setIds] = useState([4, 6, 7, 9]);
    const [puntaje, setPuntaje] = useState(0);

    let puntos = Array.apply(null, Array(props.puntajeMaximo + 1)).map((x, i) => {return(i)});

    useEffect(() => {
        props.joinAnswers(parseInt(puntaje), id);
    },[])

    const Display = (props) => {
        if(escolaridad <= 3){
            if(id == 10){
                return (
                    <div className='transition ease-in-out duration-700 hover:bg-violet-500 hover:scale-105 bg-gray-100 shadow-lg rounded-lg mx-auto w-5/6 m-5 p-5 group'>
                        <h1 className='text-gray-600 text-lg font-medium group-hover:text-white'>
                            Pregunta {props.id}
                        </h1>
                        <p className='text-gray-500 group-hover:text-white'>
                            {props.pregunta}
                        </p>
                        <Pencil/>
                        <Clock/>
                        <SelectComp id={id} puntaje={puntaje} joinAnswers={props.joinAnswers} puntos={puntos}/>
                    </div>
                )
            }
            else{
                if(ids.includes(id)){
                    return (
                        <div className='transition ease-in-out duration-700 hover:bg-violet-500 hover:scale-110 bg-gray-100 shadow-lg rounded-lg mx-auto w-5/6 m-5 p-5 group'>
                            <h1 className='text-gray-600 text-lg font-medium group-hover:text-white'>
                                N.A.
                            </h1>
                            <p className='text-gray-500 group-hover:text-white'>
                                N.A.
                            </p>
                        </div>
                    )
                }
                else{
                    return (
                        <div className='transition ease-in-out duration-700 hover:bg-violet-500 hover:scale-110 bg-gray-100 shadow-lg rounded-lg mx-auto w-5/6 m-5 p-5 group'>
                            <h1 className='text-gray-600 text-lg font-medium group-hover:text-white'>
                                Pregunta {props.id}
                            </h1>
                            <p className='text-gray-500 group-hover:text-white'>
                                {props.pregunta}
                            </p>
                            <SelectComp id={id} puntaje={puntaje} joinAnswers={props.joinAnswers} puntos={puntos}/>
                        </div>
                    )
                }
            }
        }
        else if(escolaridad > 3){
            if(id == 9){
                return (
                    <div className='transition ease-in-out duration-700 hover:bg-violet-500 bg-gray-100 shadow-lg rounded-lg mx-auto w-5/6 m-5 p-5 group'>
                        <h1 className='text-gray-600 text-lg font-medium group-hover:text-white'>
                            Pregunta {props.id}
                        </h1>
                        <p className='text-gray-500 group-hover:text-white'>
                            {props.pregunta}
                        </p>
                        <Draw/>
                        <SelectComp id={id} puntaje={puntaje} joinAnswers={props.joinAnswers} puntos={puntos}/>
                    </div>
                )
            }
            else if(id == 10){
                return (
                    <div className='transition ease-in-out duration-700 hover:bg-violet-500 hover:scale-105 bg-gray-100 shadow-lg rounded-lg mx-auto w-5/6 m-5 p-5 group'>
                        <h1 className='text-gray-600 text-lg font-medium group-hover:text-white'>
                            Pregunta {props.id}
                        </h1>
                        <p className='text-gray-500 group-hover:text-white'>
                            {props.pregunta}
                        </p>
                        <Pencil/>
                        <Clock/>
                        <SelectComp id={id} puntaje={puntaje} joinAnswers={props.joinAnswers} puntos={puntos}/>
                    </div>
                )
            }
            else{
                return (
                    <div className='transition ease-in-out duration-700 hover:bg-violet-500 hover:scale-110 bg-gray-100 shadow-lg rounded-lg mx-auto w-5/6 m-5 p-5 group'>
                        <h1 className='text-gray-600 text-lg font-medium group-hover:text-white'>
                            Pregunta {props.id}
                        </h1>
                        <p className='text-gray-500 group-hover:text-white'>
                            {props.pregunta}
                        </p>
                        <SelectComp id={id} puntaje={puntaje} joinAnswers={props.joinAnswers} puntos={puntos}/>
                    </div>
                )
            }
        }
        return null;
    }

    return (
        <div>
            <Display id={props.id} pregunta={props.pregunta} escolaridad={props.escolaridad} joinAnswers={props.joinAnswers}/>
        </div>    
    )
    
}

export default Cards