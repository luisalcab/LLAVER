import React from 'react'
import Check from '../img/Check.png'

const Validation = ({children}) => {
    return(
        //"bg-white rounded-lg mx-auto mt-32 w-1/2"
        <div class="bg-white w-1/2 h-60 mx-auto rounded-lg flex flex-col justify-center items-center my-20 ">
            <div class = "w-10" >
                <img
                    class=""
                    src={Check}
                    width="50"
                    height="50"
                />
            </div>

            <p class = "xtraSm:text-l">
                {children}
            </p>
            <div class="flex justify-center">
                <input
                    type="submit"
                    value="Aceptar"
                    class="mt-5 border rounded-full py-2 px-8 md:w-2/5 hover:shadow-lg hover:scale-110 transition ease-in-out duration-500 bg-gradient-to-r from-cyan-500 to-blue-500"
                />
            </div>
        </div>
    )
}

export default Validation