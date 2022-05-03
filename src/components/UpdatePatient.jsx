import Back from "./Back";

const UpdatePatient = ({setUpdatePatient, setEvaluaciones}) =>{
    return(
        <div class = "absolute top-0 left-0 bg-gradient-to-t from-blue-700  w-screen h-screen">
            <Back setBackPage={setEvaluaciones} setActualPage={setUpdatePatient}/>
            <div  class="bg-white rounded-lg mx-auto w-1/2 mt-32">
                
                <div class = "text-center text-xl font-bold">
                    Actualización de datos de <br/> paciente <br/><br/>
                </div>

                <form>
                    <div className="flex flex-col w-11/12 m-auto ">
                        <label
                            htmlFor="Nombre"
                            >Nombre*</label>
                        <input
                            id="Nombre"
                            type="text"
                            placeholder="Ej: Juán"
                            class="rounded-br-full border"
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
                        />
                    </div>
                    <div className="flex flex-col w-11/12 m-auto">
                        <label
                            htmlFor="Telefono"
                            >Telefono*</label>
                        <input
                            id="Telefono"
                            type="tel"
                            class="rounded-br-full border "
                        />
                    </div>
                    <div class="flex justify-center text-white">
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