import React, {useState, useEffect} from 'react'

const Notas = () => {
  
  const [text, setText] = useState("");

  useEffect(() => {
    setText(localStorage.getItem('notas') ?? "");
  },[])

  useEffect(() => {
      localStorage.setItem('notas', text);
  }, [text])
  
  return (
      <div className='w-[300px] h-[450px] rounded-lg bg-violet-200 shadow-xl mx-auto my-auto absolute inset-y-0 left-0'>
      
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-2xl font-bold mt-3'>
                Notas
            </h1>
            <hr className='w-2/3 border-b-2 border-gray-600'/>
            <textarea className='w-[250px] h-[350px] p-2 border-2 border-gray-600 rounded-lg mt-5' placeholder='Escribe aquí tu nota' onChange={(e) => setText(e.target.value)} value={text} type="text"></textarea>
        </div>

      </div>
  )
}

export default Notas
