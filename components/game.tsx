import Image from 'next/image'

const Game = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col items-center justify-center p-4">
    <div className="bg-white shadow-2xl rounded-lg max-w-xl w-full p-4 md:p-6 ">
      <div className="flex justify-between items-center mb-4 gap-2">
        <button 
          className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition duration-300">
          Atrás
        </button>
        <span className="text-gray-700 text-center font-bold">
          Pregunta 3 de 10
        </span>
        <button 
          className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition duration-300">
          Adelante
        </button>
      </div>

      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        ¿Cómo se clasifican los dientes por morfología?
      </h1>
      
      <div className="flex justify-center mb-6">
        <Image 
          src="https://cdn.asemptaxis.co/cambios-sociales-01.webp" 
          alt="Imagen relacionada con la pregunta"
          width={400} 
          height={200} 
          className="rounded-lg shadow-md"
        />
      </div>

      <ul className="space-y-4">
        <li>
          <button className="w-full py-4 px-6 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-green-500 hover:to-teal-600 transition-all duration-300">
            A - Incisivos, caninos, premolares y molares
          </button>
        </li>
        <li>
          <button className="w-full py-4 px-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
            B - Centrales, superiores, premolares caninos
          </button>
        </li>
        <li>
          <button className="w-full py-4 px-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-orange-600 transition-all duration-300">
            C - Caninos, incisivos y molares
          </button>
        </li>
      </ul>

      <div className="mt-6">
        <p className="text-center text-gray-600 font-semibold">
          Correctas: 3 | Incorrectas: 2 | Faltantes: 5
        </p>
      </div>
    </div>
  </div>
  )
}

export default Game