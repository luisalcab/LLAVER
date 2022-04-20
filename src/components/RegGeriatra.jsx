import React from 'react'

const RegGeriatra = () => {

    return(
        <div class="bg-white rounded-lg container mx-auto w-1/2 h-4/6">
            <form class="py-8">
                <div>
                    <label
                        htmlFor="Nombre"
                        class="block mx-5"
                        >Nombre*</label>
                    <input
                    id="Nombre"
                    type="text"
                    placeholder="Ej: Francisco García"
                    class="rounded-br-full border mx-5 w-4/5"
                    />
                </div>
                <div>
                <label
                    htmlFor="Password"
                    class="block mx-5 mt-5"
                >Password*</label>
                <input
                    id="Password"
                    type="text"
                    class="rounded-br-full border mx-5 w-4/5"
                />
                <label
                    htmlFor="PasswordCheck"
                    class="block mx-5 mt-5"
                >Confirme Password*</label>
                <input
                    id="PasswordCheck"
                    type="text"
                    class="rounded-br-full border mx-5 w-4/5"
                />
                <label
                    htmlFor="Correo"
                    class="block mx-5 mt-5"
                >Correo electronico*</label>
                <input
                    id="Correo"
                    type="text"
                    class="rounded-br-full border mx-5 w-4/5"
                />
                <label
                    htmlFor="Institucion"
                    class="block mx-5 mt-5"
                >Institucion*</label>
                <input
                    id="Institucion"
                    type="text"
                    class="rounded-br-full border mx-5 w-4/5"
                />
                <p class= "text-sm">  *Datos requeridos</p>
                <div class="flex justify-center text-white">
                    <input
                        type="submit"
                        value="Sign in"
                        class="mt-5 border rounded-full py-2 px-8 md:w-2/5 bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                </div>
            </div>
            </form>
        </div>
    )
}

export default RegGeriatra
