import { useState } from "react"
import LogIn from "./components/LogIn"
import Logo from "./components/Logo"
import RegPacientes from "./components/RegPacientes"

function App() {

  return (
    <div class="bg-[#EEEEEE] h-screen">
      <Logo
        roundedCenter={true}
      />
      <LogIn/>
      <RegPacientes/>
    </div>
  )
}

export default App
