//Logica de el tateti muestra si alguna linea es ganadora
export const tateti = (tablero) => {
  //Definiendo linead horizontales
  if (tablero.A1 !== undefined && (tablero.A1 === tablero.A2) && (tablero.A2 === tablero.A3)) return true
  if (tablero.B2 !== undefined && (tablero.B1 === tablero.B2) && (tablero.B2 === tablero.B3)) return true
  if (tablero.C1 !== undefined && (tablero.C1 === tablero.C2) && (tablero.C2 === tablero.C3)) return true
  //Definiendo lineas Verticales
  if (tablero.A1 !== undefined && (tablero.A1 === tablero.B1) && (tablero.B1 === tablero.C1)) return true
  if (tablero.A2 !== undefined && (tablero.A2 === tablero.B2) && (tablero.B2 === tablero.C2)) return true
  if (tablero.A3 !== undefined && (tablero.A3 === tablero.B3) && (tablero.B3 === tablero.C3)) return true
  //Definiendo lieneas horizontales
  if (tablero.A1 !== undefined && (tablero.A1 === tablero.B2) && (tablero.B2 === tablero.C3)) return true
  if (tablero.A3 !== undefined && (tablero.A3 === tablero.B2) && (tablero.B2 === tablero.C1)) return true

  return false
}


