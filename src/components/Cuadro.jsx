import { useEffect } from "react"
import { useState } from "react"

export const Cuadro = ({ player, change, id, seteado, ganador }) => {

  const [ status, setStatus ] = useState({ value: '', used: false })

  const changePlayer = () => {
    player !== 'X' ? change('X') : change('O')
    setStatus({ value: player, used: true })
    seteado({ id, player })
  }

  return (
    <button
      type='button'
      className='casillero w-32 h-32 bg-gray-300 border-2 border-black flex justify-center items-center '
      onClick={ changePlayer }
      disabled={ status.used }
    >
      {
        status.value === "X" && <img className='h-20 w-20' src='cruz.png' /> ||
        status.value === "O" && <img className='h-20 w-20' src='circulo.png' />
      }
    </button>
  )
}
