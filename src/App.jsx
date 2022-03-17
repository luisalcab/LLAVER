import { useState } from "react"
import LogIn from "./components/LogIn"
import Logo from "./components/Logo"
import Error from "./components/Error"
import RegPacientes from "./components/RegPacientes"

function App() {

  return (
    <div class="bg-[#EEEEEE] h-screen">
      <Logo
        roundedCenter={true}
      />      
      
      <LogIn/>
    </div>
  )
}

export default App
