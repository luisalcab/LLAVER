import react from "react";
import Sidebar from "./Sidebar"
import Logo from "./Logo"

const PagInicio = () =>{
    return(
        <div class="bg-[#EEEEEE] w-screen h-screen">      

            
            <Sidebar/>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div class="m-10">
                    Hola Dra. Gabriela
                </div>
                <div class="grid grid-cols-2 gap-4 text-center place-content-center mx-auto w-1/3">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                </div>

            </div>
            
        </div>
    )
}

export default PagInicio