import React from 'react'
import {useState} from 'react'
import Error from './Error';
import Back from './Back'

const RecPassword = ({setRecPassword, setValidation, setValidationMessage, setLogin}) =>{

    const [nombre, setNombre] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [err, setErr] = useState(false);
    const [mensajeErr, setMensajeErr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        //Validamos las inputs
        if([nombre,newPassword,confirmPassword].includes("")){
            setErr(true);
            setTimeout(() => setErr(false),3000)
            setMensajeErr("No se permiten campos vacios");
            
            return;
        }else if(newPassword !== confirmPassword){
            setErr(true);
            setTimeout(() => setErr(false),3000)
            setMensajeErr("Las contraseñas no coinciden");
            
            return;
        } 

        console.log("Exito")
        //Limpiamos los estates
        setNombre("");
        setNewPassword("");
        setConfirmPassword("");
        setMensajeErr("");

        //Regresa al menu principal
        setValidation(true);
        setRecPassword(false);
        setValidationMessage("Contraseña Recuperada con exito");

        //Mandamos datos para guardar
        return;
    }

    return(
        <div class="bg-white rounded-lg mx-auto w-1/2 mt-20 py-3">
            <Back setBackPage={setLogin} setActualPage={setRecPassword}/>
            <div class = "text-center text-xl font-bold py-3">
                Recuperación de contraseña
            </div>
            <hr class = "mb-5"/>
            <form 
                onSubmit={handleSubmit}
            >
            {(err && <Error>{mensajeErr}</Error>)}
                <div> 
                    <label
                        htmlFor="Nombre"
                        class="block mx-5">
                        Correo*
                    </label>
                    <input
                        id="Nombre"
                        type="email"
                        placeholder="Ej: filimino@gmail.com"
                        class="rounded-br-full border mx-5 w-4/5"
                        value={nombre}
                        onChange = {(e) => setNombre(e.target.value)} 
                    />
                </div>
                    <div>
                        <label
                            htmlFor="NewPassword"
                            class={`block mx-5 mt-5 ${err ? "text-red-500" : ""}`}
                        >Nuevo Password*
                        </label>
                        <input
                            id="NewPassword"
                            type="password"
                            class="rounded-br-full border mx-5 w-4/5"
                            value={newPassword}
                            onChange = {(e) => setNewPassword(e.target.value)}
                        />
                        <label
                            htmlFor="ConfirmPassword"
                            class={`block mx-5 mt-5 ${err ? "text-red-500" : ""}`}
                        >Confirme Password*</label>
                        <input
                            id="ConfirmPassword"
                            type="password"
                            class="rounded-br-full border mx-5 w-4/5"
                            value={confirmPassword}
                            onChange = {(e) => setConfirmPassword(e.target.value)}
                        />
                        
                        <p class= "text-sm mx-5">  *Datos requeridos</p>
                        <div class="flex justify-center text-white">
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
