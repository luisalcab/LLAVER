const PatientCard = ({nombre,fecha}) =>{
    const handleClick = () => {
        console.log(":D")
    }

    return(
        <div class = " bg-zinc-300 w-full h-6 rounded-xl mb-1">
            <div class = "flex flex-row justify-around bg-zinc-300 rounded-xl mb-1">
                <p> {nombre}  </p>
                <p> {fecha} </p>
            </div>
        </div>
    )
}

export default PatientCard