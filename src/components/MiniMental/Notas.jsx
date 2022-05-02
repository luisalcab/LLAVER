import React from 'react'

const Notas = () => {
  return (
    <div className='w-[300px] h-[450px] fixed rounded-lg bg-violet-200 shadow-xl mx-auto my-auto inset-y-0'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-2xl font-bold mt-3'>
                Notas
            </h1>
            <hr className='w-2/3 border-b-2 border-gray-600'/>
            <textarea className='w-[250px] h-[350px] p-2 border-2 border-gray-600 rounded-lg mt-5' placeholder='Escribe aquí tu nota'></textarea>
        </div>
    </div>
  )
}

export default Notas
