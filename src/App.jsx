import { useState } from "react"
import Logo from "./components/Logo"
import LogIn from "./components/LogIn"
import RecPassword from "./components/RecPassword"
import RegGeriatra from "./components/RegGeriatra"
import Card from "./components/Card"
import Error from "./components/Error"
import Draw from "./components/miniMentalGames/Draw"
import Pencil from "./components/miniMentalGames/Pencil"
import Clock from "./components/miniMentalGames/Clock"
import RegPacientes from "./components/RegPacientes"
import Validation from "./components/Validation"
import Estadistics from "./components/Estadistics"
import PagInicio from "./components/PagInicio"
import Evaluaciones from "./components/Evaluaciones"
import MiniMental from "./components/MiniMental/MiniMental"
import UpdatePatient from "./components/UpdatePatient"

function App() {
    //States patra el control del flujo
    const [evalauaciones, setEvaluaciones] = useState(true);
    const [logIn, setLogIn] = useState(false);
    const [recPassword, setRecPassword] = useState(false);
    const [regGeriatra, setRegGeriatra] = useState(false);
    const [validation, setValidation] = useState(false);
    const [estadistics, setEstadistics] = useState(false);
    const [validationMessage, setValidationMessage] = useState("");
    const [paginicio, setPagInicio] = useState("");
    const [miniMental, setMiniMental] = useState(false);
    //gulag
    const [regPacientes, setRegPacientes] = useState(false);

    // Token
<<<<<<< Updated upstream
    const [tokenAuth, setTokenAuth] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWREb2N0b3IiOjk0LCJpYXQiOjE2NTE3NjA4MTAsImV4cCI6MTY1MTc3NTI1MH0.q4CHYU4vAm0p_6-ZcGdgTm6HwHdzrDNj_r7aOb45F3w");
=======
    const [tokenAuth, setTokenAuth] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWREb2N0b3IiOjEwNCwiaWF0IjoxNjUxNzc0MDc5LCJleHAiOjE2NTE3ODg1MTl9.EBCnzYk46NmdKmwWEIJgfitgsRJMss2VdaBzfnwhYC8");
>>>>>>> Stashed changes
    localStorage.setItem("token", tokenAuth);

    return (
        <div class="bg-[#EEEEEE] h-screen w-full">
            <Logo roundedCenter={true}/>

<<<<<<< Updated upstream
=======
            {(miniMental && <MiniMental
                setMiniMental={setMiniMental}/>)}
            {(evalauaciones && <Evaluaciones/>)}
            {(updatePatient && <UpdatePatient
                setUpdatePatient={setUpdatePatient}
                setEvaluaciones={setEvaluaciones}/>)}
>>>>>>> Stashed changes
            {(miniMental && <MiniMental/>)}
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
