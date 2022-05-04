import { MdDeleteSweep } from 'react-icons/md'
import { BsPencilSquare } from 'react-icons/bs'
import Put from '../Hooks/Put';
const PatientCard = ({nombre,fecha,token,ID}) =>{
    const apiUrl = `paciente/desactivarStatusPaciente`;
    const [Call] = Put(apiUrl,token,ID);
    const handleClick = async() => {
        await Call();
        alert("El Paciente ha sido desactivado");
            console.log(":D")
    }

    return(
        <div class = " bg-zinc-300 w-full h-6 rounded-xl mb-1">
            <div class = "flex flex-row justify-around text-center bg-zinc-300 rounded-xl mb-1">
                <div class="w-5/12"> {nombre}  </div>
                <div class="w-5/12"> {fecha} </div>
                <div class="w-1/12 bg-red-600"> <button onClick={handleClick}> <MdDeleteSweep/> </button></div>
                <div class="w-1/12 bg-purple-400 rounded-r-xl"> <button> <BsPencilSquare/> </button></div>
            </div>
        </div>
    )
}

export default PatientCard