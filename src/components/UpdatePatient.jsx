import Back from "./Back";
import { useState } from "react"
import Put from "../Hooks/Put";

const UpdatePatient = ({Patient,setUpdatePatient, setEvaluaciones}) =>{
    const [Nombre, setNombre] = useState("");
    const [Apellido, setApellido] = useState("");
    const [FechaNacimiento, setFechaNacimiento] = useState("");
    const [Escolaridad, setEscolaridad] = useState("");
    const apiUrl = `paciente/modificarPaciente`
    const [tokenAuth, setTokenAuth] = useState(localStorage.getItem("token"));
    const [Call] = Put(apiUrl, tokenAuth, Patient.idPaciente);

    const handleSubmit= async(e) => {
        e.preventDefault();
        await Call({'nombre':Nombre,'apellido':Apellido,'escolaridad':Escolaridad,'fechaNacimiento':FechaNacimiento,'sexo':"",'idDoctor':""});
        alert("El Paciente ha sido Modificado");
    }
    return(
        <div class = "absolute top-0 left-0 bg-gradient-to-t from-blue-700  w-screen h-screen">
            <Back setBackPage={setEvaluaciones} setActualPage={setUpdatePatient}/>
            {console.log("Si entre")}
            <div  class="bg-white rounded-lg mx-auto w-1/2 mt-32">
                
                <div class = "text-center text-xl font-bold py-5">
                    Actualización de datos de paciente
                </div>
                <hr class = "mb-5"/>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col w-11/12 m-auto ">
                        <label
                            htmlFor="Nombre"
                            >Nombre*</label>
                        <input
                            id="Nombre"
                            type="text"
                            placeholder="Ej: Juán"
                            class="rounded-br-full border"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-11/12 m-auto">
                        <label
                            htmlFor="Apellido "
                            >Apellido*</label>
                        <input
                            id="Apellido"
                            type="text"
                            placeholder="Ej: García"
                            class="rounded-br-full border "
                            onChange={(e) => setApellido(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-11/12 m-auto ">
                        <label
                            htmlFor="Nacimiento"
                            >Fecha de Nacimiento*</label>
                        <input
                            id="Nacimiento"
                            type="date"
                            class="rounded-br-full border "
                            onChange={(e) => setFechaNacimiento(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-11/12 m-auto">
                        <label
                            htmlFor="Escolaridad"
                            >Escolaridad*</label>
                        <input
                            id="Telefono"
                            type="tel"
                            class="rounded-br-full border "
                            onChange={(e) => setEscolaridad(e.target.value)}
                        />
                    </div>
                    <div class="flex justify-center text-white py-5">
                        <input
                            type="submit"
                            value="Actualizar"
                            class="mt-5 border rounded-full py-2 px-8 md:w-2/5 bg-gradient-to-r from-cyan-500 to-blue-500"
                        />
                    </div>
                </form>
            </div>
        </div>
    )



    

}

export default UpdatePatient