import React, {useState} from 'react'
import Notes from './Notas'

const textArea = () => {
    const [notas, setNotas] = useState(false);

    const loadNotes = (bol) => {
        setNotas(bol);
    }

    return (
        <div className={`${notas && "transition ease-in-out delay-50 duration-300 translate-x-[300px]"} transition ease-in-out delay-50 duration-300 fixed w-[350px] inset-y-0 left-[-300px]`} >
        <div className='flex justify-center w-[50px] h-[200px] rounded-lg bg-violet-300 shadow-xl mx-auto my-auto absolute inset-y-0 right-0'>
            <button className = 'rotate-[270deg] font-bold text-xl' onClick={()=>{loadNotes(!notas);}}>NOTAS</button>
        </div>
        <Notes/>
        </div>
    )
}

export default textArea
