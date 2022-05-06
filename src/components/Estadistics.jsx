import React from "react";
import { useState } from "react";
import AnyChart from "anychart-react";
import Sidebar from "./Sidebar";
import Spinner from "./Spinner";
import Get from "../Hooks/Get";
import Postanio from "../Hooks/PostAnio";
import { useEffect } from "react/cjs/react.production.min";

const Estadistics = ({ setHome, setLogout, setEstadistics }) => {
    const [tokenAuth, setTokenAuth] = useState(localStorage.getItem("token"));
    const URLSEXO = `estadistica/NumPorSexo`;
    const URLEDAD = `estadistica/promedioPuntajeIntervaloEdad`;
    const URLANIOS = `estadistica/promedioGeneralIntervaloAnual`;
    const URLSEXOP = `estadistica/promedioSexoPuntaje`;
    const [yeison, setYeison] = useState({ startDate: '2019', finishDate: '2022' })
    const [dataSexo, errorSexo, setDataSexo] = Get(URLSEXO, tokenAuth);
    const [dataEdad,errorEdad,setDataEdad] = Get(URLEDAD,tokenAuth);
    const [dataAnio, errorAnio, setDataAnio] = Postanio(URLANIOS,tokenAuth,yeison);
    const [dataSexop, errorSexop, setDataSexop] = Get(URLSEXOP,tokenAuth);
    console.log(dataSexop);

  return (
    <>
      {(dataSexo && dataEdad && dataAnio) ? (
        <div>
          <Sidebar
            setHome={setHome}
            setLogin={setLogout}
            setEstadistics={setEstadistics}
          />
          <div class="grid grid-cols-2 gap-y-6 mx-auto w-2/4 py-5">
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
                  ["Masculino", 0],
                  ["Femenino", dataSexop.data[0].promedioTotal],
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
                  ["2019", dataAnio.data[0].anualAvg],
                  ["2020", dataAnio.data[1].anualAvg],
                  ["2021", dataAnio.data[2].anualAvg],
                  ["2022", dataAnio.data[3].anualAvg],
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
                  ["Masculino", dataSexo.hombres],
                  ["Femenino", dataSexo.mujeres],
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
