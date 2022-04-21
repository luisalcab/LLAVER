import { useState } from "react"
import LogIn from "./components/LogIn"
import Logo from "./components/Logo"
import Error from "./components/Error"
import RegPacientes from "./components/RegPacientes"
import Validation from "./components/Validation"
import RecPassword from "./components/RecPassword"

function App() {
    const [validation, setValidation] = useState(false);
    const [logIn, setLogIn] = useState(true);
    const [regPacientes, setRegPacientes] = useState(false);
    const [recPassword, setRecPassword] = useState(false);
    return (
        <div class="bg-[#EEEEEE] h-screen">
            <Logo roudedCorner={true}/>      
            {(validation && <Validation>Contraseña cambiada con exito</Validation>)}
            {(logIn && <LogIn setRecPassword={setRecPassword} setLogIn={setLogIn}/>)}
            {(recPassword && <RecPassword setValidation={setValidation} setRecPassword={setRecPassword}/>)}
        </div>
    )
}

export default App
