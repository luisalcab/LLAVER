import LogIn from "./components/LogIn"
import RegPacientes from "./components/RegPacientes"

function App() {

  return (
    <div class="bg-[#EEEEEE] h-screen">
      <p className="text-3xl font-bold underline text-cyan-800">Logo</p>
      <LogIn/>
      <RegPacientes/>
    </div>
  )
}

export default App
