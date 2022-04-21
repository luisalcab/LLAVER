import { useState } from "react"
import RegPacientes from "./components/RegPacientes"
import LogIn from "./components/LogIn"
import Card from "./components/Card"
import Logo from "./components/Logo"

function App() {
    //Estates de los componentes
    const [logIn, setLogIn] = useState(true);
    const [regPacientes, setRegPacientes] = useState(false);

    return (
        <div class="bg-[#EEEEEE] h-screen">
            <Logo roundedCenter={true}/>

            <Card resumen={true} text={"Resumen"}/>
            {/*Reenderizado de los componentes*/}
            {(logIn && <LogIn setRegPacientes={setRegPacientes} setLogIn={setLogIn}/>)}
            {(regPacientes && <RegPacientes/>)}
        </div>
    )
}

export default App
