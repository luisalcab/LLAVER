import React from 'react'
import {useState} from 'react'
import Error from './Error';

const LogIn = () => {
    const [user, useUser] = useState("");
    const [password, usePassword] = useState("");

  return (
    <div class="bg-white rounded-lg mx-auto mt-32 w-1/2">
        <form class="py-1">
            {/*<Error>xdxdxd</Error>*/}
            <div>
                <label
                    htmlFor="usuario"
                    class="block mx-5"
                    >Nombre de Usuario</label>
                <input
                    id="usuario"
                    type="text"
                    placeholder="Ej: Francisco García"
                    class="rounded-br-full border mx-5 w-4/5"
                />
            </div>
            <div>
                <label
                    htmlFor="contraseña"
                    class="block mx-5 mt-5"
                >Contraseña</label>
                <input
                    id="contraseña"
                    type="password"
                    class="rounded-br-full border mx-5 w-4/5"
                />
            </div>
            <div class="mx-5 flex justify-between mr-35">
                <button
                    class="text-blue-700 text-sm"
                >Crear cuenta
                </button>
                <button
                    class="text-blue-700 text-sm"
                >¿Olvidó la Contraseña?
                </button>
            </div>
            <div class="flex justify-center">
                <input
                    type="submit"
                    value="Ingresar"
                    class="mt-5 border rounded-full py-2 px-8 md:w-2/5 hover:shadow-lg hover:scale-110 transition ease-in-out duration-500 bg-gradient-to-r from-cyan-500 to-blue-500"
                />
            </div>
            
        </form>
    </div>
  )
}

export default LogIn