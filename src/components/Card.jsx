import React from 'react'

const Card = ({resumen,data,text,color}) => {
    const handleClick = () =>{
        console.log("XD")
    }

    return (
        <div 
            class={`transition-all ease-in-out delay-75 duration-500 bg-white mx-auto w-1/4 h-60 rounded-lg group hover:bg-sky-700 hover:-translate-y-4 hover:scale-110 hover:shadow-xl`}
            onClick={handleClick}    
        >
            {resumen ? (
            <>
                <div class="transition ease-in-out delay-75 duration-500 font-bold text-xl border-b-2 pb-3 card_min:mx-8 border-black group-hover:text-white group-hover:border-sky-200">
                    {text}
                </div>
                <div class="transition ease-in-out delay-75 duration-1000 opacity-100 text-white mx-8 group-hover:visible gruop-hover:opacity-0 group-hover:translate-y-6">
                    Prosigo a ._.XD
                </div>
            </>)
                :(
                <div>
                    
                </div>)}
            
        </div>
    )
}

export default Card