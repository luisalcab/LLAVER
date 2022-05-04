import React from "react";
import { useState } from "react";
import AnyChart from "anychart-react";
import Sidebar from "./Sidebar";
import Spinner from "./Spinner";
import Get from "../Hooks/Get";

const Estadistics = ({ setHome, setLogout, setEstadistics }) => {
    const [tokenAuth, setTokenAuth] = useState(localStorage.getItem("token"));
    const URLSEXO = `estadistica/NumPorSexo`;
    const URLEDAD = `estadistica/promedioPuntajeIntervaloEdad`;
    const URLANIOS = `estadistica/promedioGeneralIntervaloAnual`;

    const [yeison, setYeison] = useState({ startDate: '2019', finishDate: '2022' })
    const [dataSexop, errorSexop, setDataSexop] = Get(URLSEXO, tokenAuth);
    const [dataEdad,errorEdad,setDataEdad] = Get(URLEDAD,tokenAuth);
    const [dataAnios,errorAnios,setDataAnios] = Get(URLANIOS,tokenAuth,yeison);
    
    console.log(dataAnios);

  return (
    <>
      {(dataSexop && dataEdad && dataAnios) ? (
        <div>
          <Sidebar
            setHome={setHome}
            setLogin={setLogout}
            setEstadistics={setEstadistics}
          />
          <div class="absolute top-52 left-1/2 transform -translate-x-1/2"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-y-6 mx-auto w-1/3">
            <div id="Edad-Puntaje">
              <AnyChart
                id="Edad-Puntaje-Grafica"
                width={300}
                height={300}
                type="column"
                data={[
                  ["60-70", dataEdad.data[0].anualIntervalAvg],
                  ["70-80", dataEdad.data[1].anualIntervalAvg],
                  ["80-90", dataEdad.data[2].anualIntervalAvg],
                  ["90-100", dataEdad.data[3].anualIntervalAvg],
                ]}
                title="Edad - Puntaje Promedio"
              />
            </div>
            <div id="Sexo-Puntaje">
              <AnyChart
                id="Sexo-Puntaje-Grafica"
                width={300}
                height={300}
                type="column"
                data={[
                  ["Masculino", dataSexop.hombres],
                  ["Femenino", dataSexop.mujeres],
                ]}
                title="Sexo - Puntaje Promedio"
              />
            </div>
            <div id="anios-Puntaje">
              <AnyChart
                id="anios-Puntaje-Grafica"
                width={300}
                height={300}
                type="column"
                data={[
                  ["2019", 4],
                  ["2020", 2],
                  ["2021", 3],
                  ["2022", 3],
                ]}
                title="Años - Puntaje Promedio"
              />
            </div>
            <div id="Sexo">
              <AnyChart
                id="Sexo-Grafica"
                width={300}
                height={300}
                type="pie"
                data={[
                  ["Masculino", 16],
                  ["Femenino", 22],
                ]}
                title="Sexo Pacientes"
              />
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Estadistics;
