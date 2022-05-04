import React,{useEffect, useState} from 'react'

const SelectComp = (props) => {
    const[puntaje, setPuntaje] = useState(props.puntaje);

    useEffect(() => {
        props.joinAnswers(parseInt(puntaje), props.id);
    },[puntaje])

    return (
        <div>
            <select 
                class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 mt-5" name="points"
                onChange={(e) => {e.preventDefault(); setPuntaje(e.target.value);}}
                value={puntaje}
                >
                {props.puntos.map((point) => (
                    <option value={point}>
                    {point}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectComp
