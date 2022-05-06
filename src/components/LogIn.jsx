import React from "react";
import { useState } from "react";
import Error from "./Error";
import PostLogin from "../Hooks/PostLogin";

const LogIn = ({ setRegGeriatra, setRecPassword, setLogIn , setHome}) => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [Call] = PostLogin();
  const [err, setErr] = useState(false);



  //Functions
  const handleSubmit = (e) => {
    e.preventDefault();


    //Validamos las inputs
    if ([correo, password].includes("")) {
      //Activamos el mensaje de error por el tiempo especificado
      setErr(true);
      setTimeout(() => setErr(false), 3000);

      return;
    } else {
      Call({ email: correo, password: password })
        .then((res) => res.data.response.data)
        .then((token) => localStorage.setItem("token", token));
        setHome(true);
        setLogIn(false);
      
    }

    //Mandamos datos para guardar
    return;
  };

  //Navegacion
  const activaRecPassword = () => {
    setRecPassword(true);
    setLogIn(false);
  };

  const activaRegGeriatra = () => {
    setRegGeriatra(true);
    setLogIn(false);
  };

  return (
    <div class="bg-white rounded-lg mx-auto mt-32 w-1/2">

      <form class="py-1" onSubmit={handleSubmit}>
        {err && <Error>Datos incorrectos</Error>}
        <div>
          <label
            htmlFor="nombre"
            class={`block mx-5 ${err & (correo == "") ? "text-red-700" : ""}`}
          >
            Correo
          </label>
          <input
            id="correo"
            type="email"
            value={correo}
            placeholder="Ej: Francisco@gmail.com"
            class="rounded-br-full border mx-5 w-4/5"
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="contraseña"
            class={`block mx-5 mt-5 ${
              err & (password == "") ? "text-red-700" : ""
            }`}
          >
            Contraseña
          </label>
          <input
            id="contraseña"
            type="password"
            value={password}
            class="rounded-br-full border mx-5 w-4/5"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="mx-5 flex justify-between mr-35">
          <button
            class="text-blue-700 text-sm"
            type="button"
            onClick={activaRegGeriatra}
          >
            Crear cuenta
          </button>
          <button class="text-blue-700 text-sm" onClick={activaRecPassword}>
            ¿Olvidó la Contraseña?
          </button>
        </div>
        <div class="flex justify-center text-white">
          <input
            type="submit"
            value="Ingresar"
            class="mt-5 border rounded-full py-2 px-8 md:w-2/5 hover:shadow-lg hover:scale-110 transition ease-in-out duration-500 bg-gradient-to-r from-cyan-500 to-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default LogIn;
