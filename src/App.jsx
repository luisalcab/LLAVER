import { useState } from "react"
import Logo from "./components/Logo"
import LogIn from "./components/LogIn"
import RecPassword from "./components/RecPassword"
import RegGeriatra from "./components/RegGeriatra"
import Card from "./components/Card"
import Error from "./components/Error"
import RegPacientes from "./components/RegPacientes"
import Validation from "./components/Validation"

function App() {
    //States patra el control del flujo
    const [logIn, setLogIn] = useState(true);
    const [recPassword, setRecPassword] = useState(false);
    const [regGeriatra, setRegGeriatra] = useState(false);
    const [validation, setValidation] = useState(false);
    //gulag
    const [regPacientes, setRegPacientes] = useState(false);

    return (
        <div class="bg-[#EEEEEE] h-screen">
            <Logo roundedCenter={true}/>

            {(validation && <Validation>Contraseña cambiada con exito</Validation>)}
            {(logIn && <LogIn
                setRecPassword={setRecPassword} 
                setLogIn={setLogIn}
                setRegGeriatra={setRegGeriatra}/>)}
            {(recPassword && <RecPassword setValidation={setValidation} setRecPassword={setRecPassword}/>)}
            {(regGeriatra && <RegGeriatra/>)}
        </div>
    )
}

export default App
