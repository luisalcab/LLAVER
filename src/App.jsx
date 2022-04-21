import { useState } from "react"
import LogIn from "./components/LogIn"
import Logo from "./components/Logo"
import Error from "./components/Error"
import Draw from "./components/miniMentalGames/Draw"
import Pencil from "./components/miniMentalGames/Pencil"
import Clock from "./components/miniMentalGames/Clock"
import RegPacientes from "./components/RegPacientes"

function App() {
    const [logIn, setLogIn] = useState(true);
    const [regPacientes, setRegPacientes] = useState(false);
    const [draw, setDraw] = useState(false);
    const [pencil, setPencil] = useState(false);
    const [clock, setClock] = useState(false);
    return (
        <div class="bg-[#EEEEEE] h-screen">
            <Logo roudedCorner={true}/>      

            {(logIn && <LogIn setRegPacientes={setRegPacientes} setLogIn={setLogIn}/>)}
            {(regPacientes && <RegPacientes/>)}
            {(draw && <Draw/>)}
            {(pencil && <Pencil/>)}
            {(clock && <Clock/>)}
        </div>
    )
}

export default App
