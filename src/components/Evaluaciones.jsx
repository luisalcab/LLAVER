import react from "react";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import Card from "./Card";
import PatientCard from "./PatientCard";
import GetPacientes from "../Hooks/GetPacientes";
import Get from "../Hooks/Get";
import { useState } from "react";
import Spinner from "./Spinner";
import moment from "moment";

const Evaluaciones = ({setevaluaciones,setHome,setEstadistics,setLogout, setMiniMental}) => {
  const [tokenAuth, setTokenAuth] = useState(localStorage.getItem("token"));
  const [coincidence, setCoincidence] = useState("");
  const apiUrl = `/paciente/mostarTodosPacientes`;
  const filtroApiUrl = `paciente/obtenerPacientesNombre`;
  const [datos, error, setData] = Get(apiUrl, tokenAuth);
  const Filtro = GetPacientes(filtroApiUrl, tokenAuth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(datos);
    await Filtro(coincidence).then((res) => setData(res));
  };
  return (
    <>
      {datos ? (
        <div class="bg-[#EEEEEE] w-screen h-screen overflow-auto">
          <Sidebar setEvaluaciones={setevaluaciones} setLogin={setLogout} setHome={setHome} setEstadistics={setEstadistics}/>
          <div class="text-3xl text-center font-bold">
            <br />
            Evaluaciones
            <br />
          </div>
          <div class="flex flex-row h-60 mx-40">
            <div class="flex-grow-0 bg-white rounded-lg mx-40 mt-10 w-1/3">
              <form class="py-1" onSubmit={handleSubmit}>
                {/* {(err && <Error>Datos incorrectos</Error>)} */}
                <div>
                  <label htmlFor="usuario" class="block mx-5">
                    Nombre del paciente
                  </label>
                  <input
                    id="usuario"
                    type="text"
                    placeholder="Ej: Ana María Pérez Tovar"
                    class="rounded-br-full border mx-5 w-4/5"
                    onChange={(e) => setCoincidence(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="Nacimiento" class="block mx-5 mt-5">
                    Fecha de Nacimiento
                  </label>
                  <input
                    id="Nacimiento"
                    type="date"
                    class="rounded-br-full border mx-5 w-4/5"
                  />
                </div>
                <div class="flex justify-end text-white">
                  <input
                    type="submit"
                    value="Filtrar"
                    class="mt-5 border rounded-full py-2 px-8 md:w-2/5 hover:shadow-lg hover:scale-110 transition ease-in-out duration-500 bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                </div>
              </form>
            </div>
            <div class="bg-white rounded-[20px] mx-0 mt-10 w-1/2">
              <div class="flex flex-row justify-around text-center bg-[#aa5ae8]">
                <p class=" w-5/12"> Nombre </p>
                <p class=" w-5/12"> Fecha </p>
                <p class=" w-1/12"></p>
                <p class=" w-1/12"></p>
              </div>
              <div class="px-2 pt-2 h-4/5 flex-initial overflow-y-auto resize-none">
              {datos.map((paciente) => (
                  <PatientCard
                    setevaluaciones={setevaluaciones}
                    paciente={paciente}
                    token={tokenAuth}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <br />
            <br />
          </div>
          <div class=" top-90 grid grid-cols-3 gap-4 text-center place-content-center mx-auto w-1/2">
            <div>
              {" "}
              <Card
                text={" MINIMENTAL"}
                data={" Examen Mínimo de Estado Mental"}
                resumen={true}
                componentePrevio={setevaluaciones}
                componenteSiguiente={setMiniMental}
              />{" "}
            </div>
            <div>
              {" "}
              <Card
                text={" Actividades Funcionales"}
                data={"(Examen no disponible)"}
                resumen={true}
              />{" "}
            </div>
            <div>
              {" "}
              <Card
                text={" Actividades Diarias"}
                data={"(Examen no disponible)"}
                resumen={true}
              />{" "}
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Evaluaciones;
