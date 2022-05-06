import React from "react";
import Back from "./Back";
import axios from "axios";
import Error from "./Error";
import { useState } from "react";
import RegPacienteFormat from "../data/RegPacienteFormat.json";
import PostPaciente from "../Hooks/PostPaciente";

const RegPacientes = ({
  setRegpacientes,
  setlogin,
  setValidationMessage,
  setValidation,
}) => {
  const [tokenAuth, setTokenAuth] = useState(localStorage.getItem("token"));
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [FechaNacimiento, setFechaNacimiento] = useState("");
  const [Escolaridad, setEscolaridad] = useState("");
  const [Sexo, setSexo] = useState("1");
  const [mensajeErr, setMensajeErr] = useState("");
  const [err, setErr] = useState(false);
  const [idDoctor, setidDoctor] = useState(localStorage.getItem("idDoctor"));
  const [Postpaciente] = PostPaciente(RegPacienteFormat, tokenAuth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([Nombre, Apellido, FechaNacimiento, Escolaridad].includes("")) {
      setErr(true);
      setTimeout(() => setErr(false), 3000);
      setMensajeErr("No se permiten campos vacios");

      return;
    }
    RegPacienteFormat.nombre = Nombre;
    RegPacienteFormat.apellido = Apellido;
    RegPacienteFormat.escolaridad = Escolaridad;
    RegPacienteFormat.fechaNacimiento = FechaNacimiento;
    RegPacienteFormat.sexo = Sexo;
    RegPacienteFormat.idDoctor = idDoctor;

    await Postpaciente().then((res) => console.log(res));

    setRegpacientes(false);
    setValidationMessage("Paciente registrado con exito");
    setValidation(true);
  };

  return (
    <div class="bg-white rounded-lg mx-auto w-1/2 mt-20">
      <Back setBackPage={setlogin} setActualPage={setRegpacientes} />
      <div class="text-center text-xl font-bold py-5">
        Registro de pacientes
      </div>
      <hr class="mb-5" />
      <form onSubmit={handleSubmit}>
        {err && <Error>{mensajeErr}</Error>}
        <div>
          <label htmlFor="Nombre" class="block mx-5">
            Nombre*
          </label>
          <input
            id="Nombre"
            type="text"
            placeholder="Ej: Francisco"
            value={Nombre}
            class="rounded-br-full border mx-5 w-4/5"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Apellido" class="block mx-5 mt-5">
            Apellido*
          </label>
          <input
            id="Apellido"
            type="text"
            value={Apellido}
            placeholder="Ej: García"
            class="rounded-br-full border mx-5 w-4/5"
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Nacimiento" class="block mx-5 mt-5">
            Fecha de Nacimiento*
          </label>
          <input
            id="Nacimiento"
            type="date"
            value={FechaNacimiento}
            class="rounded-br-full border mx-5 w-4/5"
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
          <label htmlFor="Sexo" class="block mx-5 mt-5">
            Sexo*
          </label>
          <select
            id="Sexo"
            class="rounded-br-full border mx-5 w-4/5"
            value={Sexo}
            onChange={(e) => setSexo(e.target.value)}
          >
            <option value="1">Masculino</option>
            <option value="0">Femenino</option>
          </select>
          <label htmlFor="Escolaridad" class="block mx-5 mt-5">
            Escolaridad*
          </label>
          <input
            id="Escolaridad"
            type="text"
            value={Escolaridad}
            class="rounded-br-full border mx-5 w-4/5"
            onChange={(e) => setEscolaridad(e.target.value)}
          />
          <p class="text-sm mx-5"> *Datos requeridos</p>
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
  );
};

export default RegPacientes;
