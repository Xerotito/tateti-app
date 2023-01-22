import { useState } from "react"
import { Cuadro, Ganador, Turno } from "./index.js"
import { tateti } from "../helpers/game.js"


let tablero = {} //Objeto que se actualiza con los valores (círculo o cruz) marcado en cada casilla

export const Tablero = () => {

  const [ player, setPlayer ] = useState('X') //El estado determina que jugador debe seguir

  const setValue = ({ id, player }) => tablero = { ...tablero, [ id ]: player } //Recibimos id y player desde cada casillero y los insertamos en tablero

  return (
    <main id="app" className="h-screen  ">
      <h1 className='text-5xl text-blue-500 text-center mb-5 font-extrabold leading-none tracking-tight'>TATETI</h1>
      <div className="container mx-auto flex justify-center " >

        {/* Cuando hay un ganador se despliega el siguiente div (sombra) invisible que no deja interactuar mas con el tablero */ }
        <div id="sombra" className="h-96 w-96 absolute" hidden={ !tateti(tablero) }></div>
        <article id="tablero" className="">
          <section id="filaA" className='flex'>
            <Cuadro id='A1' player={ player } change={ setPlayer } seteado={ setValue } />
            <Cuadro id='A2' player={ player } change={ setPlayer } seteado={ setValue } />
            <Cuadro id='A3' player={ player } change={ setPlayer } seteado={ setValue } />
          </section>
          <section id="filaB" className='flex'>
            <Cuadro id='B1' player={ player } change={ setPlayer } seteado={ setValue } />
            <Cuadro id='B2' player={ player } change={ setPlayer } seteado={ setValue } />
            <Cuadro id='B3' player={ player } change={ setPlayer } seteado={ setValue } />
          </section>
          <section id="filaC" className='flex'>
            <Cuadro id='C1' player={ player } change={ setPlayer } seteado={ setValue } />
            <Cuadro id='C2' player={ player } change={ setPlayer } seteado={ setValue } />
            <Cuadro id='C3' player={ player } change={ setPlayer } seteado={ setValue } />
          </section>
        </article>
      </div>
      <footer className="flex justify-center mt-4">
        { tateti(tablero) ? <Ganador jugador={ player } /> : <Turno jugador={ player } /> }
      </footer>
    </main>
  )
}