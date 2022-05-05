import { MdDeleteSweep } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import UpdatePatient from "./UpdatePatient";
import { useState } from "react";
import moment from "moment";
import Put from "../Hooks/Put";
const PatientCard = ({ setevaluaciones, paciente, token }) => {
  const [updatePatient, setUpdatePatient] = useState(false);
  const apiUrl = `paciente/desactivarStatusPaciente`;
  const [Call] = Put(apiUrl, token, paciente.idPaciente);

  const handleClick = async () => {
    await Call();
    alert("El Paciente ha sido desactivado");
    console.log(":D");
  };
  const Update = () => {
    setUpdatePatient(true);
    setevaluaciones(true);
    
  };

  return (
    <div class=" bg-zinc-300 w-full h-6 rounded-xl mb-1">
      {updatePatient && (
        <UpdatePatient
          Patient={paciente}  
          setUpdatePatient={setUpdatePatient}
          setEvaluaciones={setevaluaciones}
        />
      )}
      <div class="flex flex-row justify-around text-center bg-zinc-300 rounded-xl mb-1">
        <div class="w-5/12"> {paciente.nombre + " " + paciente.apellido} </div>
        <div class="w-5/12">
          {" "}
          {moment(paciente.fechaNacimiento).format("DD/MM/YYYY")}{" "}
        </div>
        <div class="w-1/12 bg-red-600">
          {" "}
          <button onClick={handleClick}>
            {" "}
            <MdDeleteSweep />{" "}
          </button>
        </div>
        <div class="w-1/12 bg-purple-400 rounded-r-xl">
          {" "}
          <button onClick={Update}>
            {" "}
            <BsPencilSquare />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
