//#region while 	Bucles simples.
i = 0; // Inicialización de la variable contador

// Condición: Mientras la variable contador sea menor de 5
while (i < 5) {
  console.log("Valor de i:", i);

  i = i + 1; // Incrementamos el valor de i
}

// explicacion
/*
Antes del bucle 	i = undefined 	Antes de comenzar el programa.
Iteración #1 	i = 0 	¿(0 < 5)? Verdadero. Mostramos 0 por pantalla. 	i = 0 + 1
Iteración #2 	i = 1 	¿(1 < 5)? Verdadero. Mostramos 1 por pantalla. 	i = 1 + 1
Iteración #3 	i = 2 	¿(2 < 5)? Verdadero. Mostramos 2 por pantalla. 	i = 2 + 1
Iteración #4 	i = 3 	¿(3 < 5)? Verdadero. Mostramos 3 por pantalla. 	i = 3 + 1
Iteración #5 	i = 4 	¿(4 < 5)? Verdadero. Mostramos 4 por pantalla. 	i = 4 + 1
Iteración #6 	i = 5 	¿(5 < 5)? Falso. Salimos del bucle.
*/
//#endregion

//#region for 	Bucles clásicos por excelencia.
// for (inicialización; condición; incremento)
for (i = 0; i < 5; i++) {
  console.log("Valor de i:", i);
}

// multiple
for (i = 0, j = 5; i < 5; i++, j--) {
  console.log("Valor de i y j:", i, j);
}
//#endregion

//#region do..while 	Bucles simples que se realizan siempre como mínimo una vez.
//#endregion

//#region for..in 	Bucles sobre posiciones de un array. Los veremos más adelante.
//#endregion

//#region for..of 	Bucles sobre elementos de un array. Los veremos más adelante.
//#endregion

//#region Array functions 	Bucles específicos sobre arrays. Los veremos más adelante.
//#endregion
