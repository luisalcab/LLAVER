import react from "react";
import Sidebar from "./Sidebar"
import Card from "./Card";
import { useState } from "react";
import Get from "../Hooks/Get"
import Spinner from "./Spinner";

const PagInicio = ({setPaginicio, setestadistics, setLogout,setEvaluaciones,setRegPacientes}) =>{
    const [tokenAuth, setTokenAuth] = useState(localStorage.getItem("token"));
    const [consultas, error, setData] = Get("/consultaGeriatrica/obtenerConsultaGeriatrica/Pendiente", tokenAuth);

    console.log(consultas)

    return(
        <>
            {consultas ? (
                <div class="bg-[#EEEEEE] w-screen h-screen">
                    <Sidebar
                        setHome={setPaginicio} 
                        setEstadistics={setestadistics}
                        setLogin={setLogout}/>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div class="text-xl font-medium border-b-2 border-black my-10 pt-10">
                            Hola Dra. Gabriela
                        </div>
                        <div class="grid grid-cols-2 gap-4 text-center place-content-center mx-auto w-full">
                            <Card
                                resumen={true}
                                text={"Resumen"}
                                data={`* NO. Pacientes: ${consultas.data.length}
                                    *Futuras Citas:
                                        *Juan
                                        *Renet`}
                            />
                            <Card
                                resumen={false}
                                text={"Historial Medico"}
                                data={`* NO. Pacientes
                                    *Futuras Citas:
                                        *Juan
                                        *Renet`}
                            />
                            <Card
                                resumen={false}
                                text={"Alta Pacientes"}
                                data={`* NO. Pacientes
                                    *Futuras Citas:
                                        *Juan
                                        *Renet`}
                                componentePrevio={setPaginicio}
                                componenteSiguiente={setRegPacientes}
                            />
                            <Card
                                resumen={false} 
                                text={"Realizar Examen"}
                                data={`* NO. Pacientes
                                    *Futuras Citas:
                                        *Juan
                                        *Renet`}
                                componenteSiguiente={setEvaluaciones}
                                componentePrevio={setPaginicio}
                            />
                        </div>

                    </div>
                    
                </div>

                ):(
                    <Spinner/>
                )
            }
        </>
    )
}

export default PagInicio