const Error = ({children}) => {
    return(
        //
        <div class="bg-[#ecc3ba] w-1/2 h-7 mx-auto rounded-lg flex justify-around xtraSm:justify-center my-2">
            <p class = "xtraSm:text-sm">
                {children}
               {/*Datos incorrectos*/}
            </p>
        </div>
    )
}

export default Error