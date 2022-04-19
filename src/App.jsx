import { useState } from "react"
import LogIn from "./components/LogIn"
import Logo from "./components/Logo"
import Error from "./components/Error"
import RegPacientes from "./components/RegPacientes"

function App() {
    const [logIn, setLogIn] = useState(true);
    const [regPacientes, setRegPacientes] = useState(false);
    return (
        <div class="bg-[#EEEEEE] h-screen">
            <Logo roudedCorner={true}/>      

            {(logIn && <LogIn setRegPacientes={setRegPacientes} setLogIn={setLogIn}/>)}
            {(regPacientes && <RegPacientes/>)}
        </div>
    )
}

export default App
