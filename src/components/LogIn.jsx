import React from 'react'
import {useState} from 'react'
import Error from './Error';

const LogIn = ({setRegGeriatra, setRecPassword, setLogIn}) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    //Functions
    const handleSubmit = (e) => {
        e.preventDefault();

        //Validamos las inputs
        if([nombre,apellido,password].includes("")){
            //Activamos el mensaje de error por el tiempo especificado
            setErr(true);
            setTimeout(() => setErr(false),3000)

            return;
        }

        //Mandamos datos para guardar
        return;
    }

    //Navegacion
    const activaRecPassword = () =>{
        setRecPassword(true);
        setLogIn(false);
    }

    const activaRegGeriatra = () =>{
        setRegGeriatra(true);
        setLogIn(false);
    }

  return (
    <div class="bg-white rounded-lg mx-auto mt-32 w-1/2">
        <form 
            class="py-1"
            onSubmit={handleSubmit}
            >
            {(err && <Error>Datos incorrectos</Error>)}
            <div>
                <label
                    htmlFor="nombre"
                    class={`block mx-5 ${(err & nombre == "") ? 'text-red-700' : ""}`}
                    >Nombre(s)</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Ej: Francisco"
                    class="rounded-br-full border mx-5 w-4/5"
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label
                    htmlFor="apellido"
                    class={`block mx-5 ${(err & apellido == "") ? 'text-red-700' : ""}`}
                    >Apellidos</label>
                <input
                    id="apellido"
                    type="text"
                    placeholder="Ej:    García"
                    class="rounded-br-full border mx-5 w-4/5"
                    onChange={(e) => setApellido(e.target.value)}
                />
            </div>
            <div>
                <label
                    htmlFor="contraseña"
                    class={`block mx-5 mt-5 ${(err & password == "") ? 'text-red-700' : ""}`}
                >Contraseña</label>
                <input
                    id="contraseña"
                    type="password"
                    class="rounded-br-full border mx-5 w-4/5"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div class="mx-5 flex justify-between mr-35">
                <button
                    class="text-blue-700 text-sm"
                    type = "button"
                    onClick={activaRegGeriatra}
                >Crear cuenta
                </button>
                <button
                    class="text-blue-700 text-sm"
                    onClick={activaRecPassword}
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