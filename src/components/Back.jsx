import React from "react";
import { BiArrowBack } from 'react-icons/bi';
import { IconContext } from "react-icons";



const Back = ({setBackPage, setActualPage}) => {
    const temp = () =>{
        setBackPage(true);
        setActualPage(false);
    }
    
    return(
            <button onClick={() => temp()} className="bg-white rounded-lg p-2 absolute top-20 right-20 text-gray-500 
            transition ease-in-out duration-700 hover:-translate-y-2 hover:bg-purple-800 hover:shadow-xl hover:text-cyan-400">
                <IconContext.Provider value={{size:40 }}>
                    <BiArrowBack/>
                </IconContext.Provider>
            </button>
    )
}

export default Back