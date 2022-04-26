import React from 'react'
import Inicio from '../img/INICIO.png'
import estadisticas from '../img/ESTADISTICAS.png'
import logout from '../img/LOGOUT.png'

const Sidebar = () => {
    return(
        <div class="absolute top-0 flex flex-col place-content-between bg-black container w-max min-h-screen">
            <div>
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
        
            <br/>
            <button>
                <img
                class="object-contain"
                src={logout}
                width="70"
                height="70"
                />
            </button>
        
            
            
        </div>
    )
}

export default Sidebar