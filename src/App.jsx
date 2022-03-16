import { useState } from "react"
import LogIn from "./components/LogIn"
import Logo from "./components/Logo"

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
