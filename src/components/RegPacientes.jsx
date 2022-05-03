import React from 'react'
import Back from './Back'
import axios from 'axios'

const RegPacientes = ({setRegpacientes, setlogin}) => {

    return(
        <div class="bg-white rounded-lg mx-auto w-1/2 mt-20">
            <Back setBackPage={setlogin} setActualPage={setRegpacientes}/>
            <div class = "text-center text-xl font-bold py-5">
                Registro de pacientes
            </div>
            <hr class = "mb-5"/>
            <form >
                <div>
                    <label
                        htmlFor="Nombre"
                        class="block mx-5"
                        >Nombre*</label>
                    <input
                    id="Nombre"
                    type="text"
                    placeholder="Ej: Francisco García"
                    class="rounded-br-full border mx-5 w-4/5"
                    />
                </div>
                <div>
                <label
                    htmlFor="Nacimiento"
                    class="block mx-5 mt-5"
                >Fecha de Nacimiento*</label>
                <input
                    id="Nacimiento"
                    type="date"
                    class="rounded-br-full border mx-5 w-4/5"
                />
                <label
                    htmlFor="Sexo"
                    class="block mx-5 mt-5"
                >Sexo*</label>
                <select id="Sexo" class="rounded-br-full border mx-5 w-4/5">
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
                <label
                    htmlFor="Telefono"
                    class="block mx-5 mt-5"
                >Telefono*</label>
                <input
                    id="Telefono"
                    type="tel"
                    class="rounded-br-full border mx-5 w-4/5"
                />
                <p class= "text-sm mx-5">  *Datos requeridos</p>
                <div class="flex justify-center text-white py-4">
                    <input
                        type="submit"
                        value="Registrar"
                        class="mt-5 border rounded-full py-2 px-8 md:w-2/5 bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                </div>
            </div>
            </form>
        </div>
    )
}

export default RegPacientes
