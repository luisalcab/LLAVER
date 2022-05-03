import React, {useState} from 'react'

const Notas = () => {
  const [notas, setNotas] = useState(false)

  const loadNotes = () => {
    setNotas(true);
  }

  const Notes = () => {
    return(
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

  return (
    <>
    <div className='flex justify-center w-[50px] h-[200px] fixed rounded-lg bg-violet-300 shadow-xl mx-auto my-auto inset-y-0'>
      <button className = 'rotate-[270deg] font-bold text-xl' onClick={loadNotes}>NOTAS</button>
    </div>
    {(notas && <Notes/>)}
    </>
  )
}

export default Notas
