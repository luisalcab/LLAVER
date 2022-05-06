import { useState } from "react"
import Logo from "./components/Logo"
import LogIn from "./components/LogIn"
import RecPassword from "./components/RecPassword"
import RegGeriatra from "./components/RegGeriatra"
import RegPacientes from "./components/RegPacientes"
import Validation from "./components/Validation"
import Estadistics from "./components/Estadistics"
import PagInicio from "./components/PagInicio"
import Evaluaciones from "./components/Evaluaciones"
import MiniMental from "./components/MiniMental/MiniMental"

function App() {
    //States patra el control del flujo
    const [evalauaciones, setEvaluaciones] = useState(false);
    const [logIn, setLogIn] = useState(false);

    const [recPassword, setRecPassword] = useState(false);
    const [regGeriatra, setRegGeriatra] = useState(false);
    const [validation, setValidation] = useState(false);
    const [estadistics, setEstadistics] = useState(false);
    const [validationMessage, setValidationMessage] = useState("");
    const [paginicio, setPagInicio] = useState(false);
    const [miniMental, setMiniMental] = useState(true);
    const [fromMini, setFromMini] = useState(false);
    //gulag
    const [regPacientes, setRegPacientes] = useState(false);


    return (
        <div class="bg-[#EEEEEE] h-screen w-full">
            <Logo roundedCenter={true}/>

            {(miniMental && <MiniMental
                setMiniMental={setMiniMental}
                setFromMini = {setFromMini}
                setValidation = {setValidation}
                setValidationMessage = {setValidationMessage}/>)}
            {(evalauaciones && <Evaluaciones
                setevaluaciones={setEvaluaciones}
                setHome={setPagInicio}
                setLogout={setLogIn}
                setEstadistics={setEstadistics}/>)}
            {(validation && <Validation 
                setValidation={setValidation}
                pastComponent={fromMini ? setPagInicio : setLogIn}
            >{validationMessage}</Validation>)}
            {(logIn && <LogIn
                setHome={setPagInicio}
                setRecPassword={setRecPassword} 
                setLogIn={setLogIn}
                setRegGeriatra={setRegGeriatra}/>)}
            {(recPassword && <RecPassword
                setValidation={setValidation} 
                setRecPassword={setRecPassword}
                setValidationMessage={setValidationMessage}
                setLogin={setLogIn}/>)}
            {(regGeriatra && <RegGeriatra
                setValidation={setValidation}   
                setRegGeriatra={setRegGeriatra}
                setValidationMessage={setValidationMessage}
                setLogin={setLogIn}/>)}
            {(regPacientes && <RegPacientes
                setfrommini={setFromMini}
                setRegpacientes={setRegPacientes}
                setlogin={setLogIn}
                setValidationMessage={setValidationMessage}
                setValidation={setValidation}/>)}
            {(paginicio && <PagInicio
                setPaginicio={setPagInicio}
                setLogout={setLogIn}
                setestadistics={setEstadistics}/>)} 
            {(estadistics && <Estadistics
                setHome={setPagInicio}
                setLogout={setLogIn}
                setEstadistics={setEstadistics}/>)}
        </div>
    )
}

export default App
