import React from "react";
import AnyChart from 'anychart-react'
import Sidebar from './Sidebar'

const Estadistics = ({setHome, setLogout, setEstadistics}) => {
    return(
        <div>
            <Sidebar setHome={setHome} setLogin={setLogout} setEstadistics={setEstadistics}/>
            <div class="absolute top-52 left-1/2 transform -translate-x-1/2">
            </div>
            <div class='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-y-6 mx-auto w-1/3'>
                <div id='Edad-Puntaje'>
                    <AnyChart
                    id='Edad-Puntaje-Grafica'
                    width={300}
                    height={300}
                    type="column"
                    data={
                        [
                            ['60-70',4],
                            ['70-80',2],
                            ['80-90',3],
                            ['90-100',3]
                        ]
                    }
                    title="Edad - Puntaje Promedio"/>
                </div>
                <div id='Sexo-Puntaje'>
                    <AnyChart
                    id='Sexo-Puntaje-Grafica'
                    width={300}
                    height={300}
                    type="column"
                    data={
                        [
                            ['Masculino',4],
                            ['Femenino',2]
                        ]
                    }
                    title="Sexo - Puntaje Promedio"/>
                </div>
                <div id='anios-Puntaje'>
                    <AnyChart
                    id='anios-Puntaje-Grafica'
                    width={300}
                    height={300}
                    type="column"
                    data={
                        [
                            ['2019',4],
                            ['2020',2],
                            ['2021',3],
                            ['2022',3]
                        ]
                    }
                    title="Años - Puntaje Promedio"/>
                </div>
                <div id='Sexo'>
                    <AnyChart
                    id='Sexo-Grafica'
                    width={300}
                    height={300}
                    type="pie"
                    data={
                        [
                            ['Masculino',16],
                            ['Femenino',22]
                        ]
                    }
                    title="Sexo Pacientes"/>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Estadistics