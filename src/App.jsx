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
    const [logIn, setLogIn] = useState(true);
    const [recPassword, setRecPassword] = useState(false);
    const [regGeriatra, setRegGeriatra] = useState(false);
    const [validation, setValidation] = useState(false);
    const [estadistics, setEstadistics] = useState(false);
    const [validationMessage, setValidationMessage] = useState("");
    const [paginicio, setPagInicio] = useState(false);
    const [miniMental, setMiniMental] = useState(false);
    //gulag
    const [regPacientes, setRegPacientes] = useState(false);

    // Token
    const [tokenAuth, setTokenAuth] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWREb2N0b3IiOjEwNCwiaWF0IjoxNjUxNzkzMDYzLCJleHAiOjE2NTE4MDc1MDN9.L1goXhxXdXHutnFo_yDA6BZN7LskLXNjY9Vk2BF_Keg");
    localStorage.setItem("token", tokenAuth);

    return (
        <div class="bg-[#EEEEEE] h-screen w-full">
            <Logo roundedCenter={true}/>

            {(miniMental && <MiniMental
                setMiniMental={setMiniMental}/>)}
            {(evalauaciones && <Evaluaciones
                setevaluaciones={setEvaluaciones}
                setHome={setPagInicio}
                setLogout={setLogIn}
                setEstadistics={setEstadistics}/>)}
            {(validation && <Validation 
                setValidation={setValidation}
                pastComponent={setLogIn}
            >{validationMessage}</Validation>)}
            {(logIn && <LogIn
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
                setRegpacientes={setRegPacientes}
                setlogin={setLogIn}/>)}
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
