//Componente muestra els iguiente jugador y su símbolo
export const Turno = ({ jugador }) => {

  return (
    <section className="flex justify-center items-center mt-10">
      <span className="flex text-3xl font-extrabold  tracking-tight text-gray-900 mr-2">Es el turno del jugador</span>
      {
        jugador === "X" && <img className='h-20 w-20 ml-2' src='cruz.png' /> ||
        jugador === "O" && <img className='h-20 w-20 ml-2' src='circulo.png' />
      }
    </section>
  )
}
