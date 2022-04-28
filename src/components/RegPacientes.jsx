import React from 'react'
import Back from './Back'

const RegPacientes = ({setRegpacientes, setlogin}) => {

    return(
        <div class="bg-white rounded-lg mx-auto w-1/2 mt-32">
            <Back setBackPage={setlogin} setActualPage={setRegpacientes}/>
            <form class="py-8">
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
                <p class= "text-sm">  *Datos requeridos</p>
                <div class="flex justify-center text-white">
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
