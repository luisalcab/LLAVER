import React from 'react'
// import {useState} from 'react'
// import Error from './Error';


// const RecPassword = ({setValidation, setRecPassword}) => {
//     const [nombre, setNombre] = useState("");
//     const [newPassword, setNewPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [err, setErr] = useState(false);

//     //Functions
//     const validate = () =>{
//         setRecPassword(false);
//         setValidation(true);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         //Validamos las inputs
//         if([nombre,newPassword,confirmPassword].includes("") ){
//             setErr(true);
//             setTimeout(() => setErr(false),3000)
//             return;
//         }

//         validate();

//         //Mandamos datos para guardar
//         return;
//     }

const RecPassword = () =>{
    
    return(
        <div class="bg-white rounded-lg container mx-auto w-1/2 h-4/6">
            <form class="py-8">
            {/* {(err && <Error>El usuario no existe o las contraseñas no coinciden</Error>)}                 */}
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
                        // onChange = {(e) => setNombre(e.target.value)} 
                    />
                </div>
                    <div>
                        <label
                            htmlFor="NewPassword"
                            class="block mx-5 mt-5"
                        >Nuevo Password*</label>
                        <input
                            id="NewPassword"
                            type="text"
                            class="rounded-br-full border mx-5 w-4/5"
                            // onChange = {(e) => setNewPassword(e.target.value)}
                        />
                        <label
                            htmlFor="ConfirmPassword"
                            class="block mx-5 mt-5"
                        >Confirme Password*</label>
                        <input
                            id="ConfirmPassword"
                            type="text"
                            class="rounded-br-full border mx-5 w-4/5"
                            // onChange = {(e) => setConfirmPassword(e.target.value)}
                        />
                        
                        <p class= "text-sm">  *Datos requeridos</p>
                        <div class="flex justify-center">
                            <input
                                type="submit"
                                value="Cambiar contraseña"
                                class="mt-5 border rounded-full py-2 px-8 md:w-2/5 hover:shadow-lg hover:scale-110 transition ease-in-out duration-500 bg-gradient-to-r from-cyan-500 to-blue-500"
                            />
                    </div>
                </div>
            </form>
        </div>
    )
}


export default RecPassword
