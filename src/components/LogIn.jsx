import React from 'react'
import {useState} from 'react'
import Error from './Error';

const LogIn = ({setRecPassword, setLogIn}) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);

    //Functions
    const handleSubmit = (e) => {
        e.preventDefault();

        //Validamos las inputs
        if([user,password].includes("")){
            //Activamos el mensaje de error por el tiempo especificado
            setErr(true);
            setTimeout(() => setErr(false),3000)

            return;
        }

        //Mandamos datos para guardar
        return;
    }

    const temp = () =>{
        setRecPassword(true);
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
                    htmlFor="usuario"
                    class="block mx-5"
                    >Nombre de Usuario</label>
                <input
                    id="usuario"
                    type="text"
                    placeholder="Ej: Francisco García"
                    class="rounded-br-full border mx-5 w-4/5"
                    onChange={(e) => setUser(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div class="mx-5 flex justify-between mr-35">
                <button
                    class="text-blue-700 text-sm"
                    type = "button"
                >Crear cuenta
                </button>
                <button
                    class="text-blue-700 text-sm"
                    onClick={() => temp()}
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