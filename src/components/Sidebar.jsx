import React from 'react'
import Inicio from '../img/INICIO.png'
import estadisticas from '../img/ESTADISTICAS.png'
import logout from '../img/LOGOUT.png'
import {BiLogOut} from 'react-icons/bi'
import { IconContext } from "react-icons"
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineBarChart } from 'react-icons/ai'

const Sidebar = ({setLogin, setEstadistics, setHome}) => {
    const Home = () => {
        setLogin(false);
        setEstadistics(false);
        setHome(true);
    }

    const Estadistics = () => {
        setLogin(false);
        setEstadistics(true);
        setHome(false);
    }

    const Logout = () => {
        setLogin(true);
        setEstadistics(false);
        setHome(false);
    }
    return(
        <div class="absolute top-0 left-0 z-50 flex flex-col place-content-between items-end bg-black w-24 min-h-screen text-white">
            <div>
                <div class='w-20 rounded-l-lg  transition ease-in-out duration-700 hover:bg-[#EEEEEE] hover:text-black'>
                    <button onClick={() => Home()}class='left-4'>
                    <IconContext.Provider value={{size:60}}>
                        <AiOutlineHome/>
                    </IconContext.Provider>
                    </button>
                </div>
                
                <br/>
                <div class='w-20 rounded-l-lg  transition ease-in-out duration-700 hover:bg-[#EEEEEE] hover:text-black'>
                    <button onClick={() => Estadistics()}>
                    <IconContext.Provider value={{size:60}}>
                        <AiOutlineBarChart/>
                    </IconContext.Provider>
                    </button>
                </div>
                
            </div>
        
            <br/>
            <div class='w-20 rounded-l-lg  transition ease-in-out duration-700 hover:bg-[#EEEEEE] hover:text-black'>
                <button onClick={() => Logout()}>
                    <IconContext.Provider value={{size:60}}>
                        <BiLogOut/>
                    </IconContext.Provider>
                </button>
            </div>
            

        </div>
    )
}

export default Sidebar