//Componente que muestra si hay un ganador
export const Ganador = ({ jugador }) => {
  return (
    <section className="flex justify-center items-center mt-10">
      <span className="text-3xl font-extrabold  tracking-tight text-gray-900 mr-2">El ganador es:</span>
      {
        jugador === "X" && <img className='h-20 w-20 ml-2' src='circulo.png' /> ||
        jugador === "O" && <img className='h-20 w-20 ml-2' src='cruz.png' />
      }
    </section>
  )
}

