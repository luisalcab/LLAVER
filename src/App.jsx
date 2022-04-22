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
    const [validation, setValidation] = useState(false);
    const [logIn, setLogIn] = useState(true);
    const [regPacientes, setRegPacientes] = useState(false);
    const [recPassword, setRecPassword] = useState(false);

    return (
        <div class="bg-[#EEEEEE] h-screen">
            <Logo roundedCenter={true}/>

            {(validation && <Validation>Contraseña cambiada con exito</Validation>)}
            {(logIn && <LogIn setRecPassword={setRecPassword} setLogIn={setLogIn}/>)}
            {(recPassword && <RecPassword setValidation={setValidation} setRecPassword={setRecPassword}/>)}
        </div>
    )
}

export default App
