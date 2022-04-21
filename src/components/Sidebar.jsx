import React from 'react'
import Inicio from '../img/INICIO.png'
import estadisticas from '../img/ESTADISTICAS.png'

const Sidebar = () => {
    return(
        <div class="bg-black container mx-auto w-max min-h-screen">
        <button>
            <img
            class="object-contain"
            src={Inicio}
            width="80"
            height="80"
            />
        </button>
        <br/>
        <button>
            <img
            class="object-contain"
            src={estadisticas}
            width="80"
            height="80"
            />
        </button>
        
            
            
        </div>
    )
}

export default Sidebar