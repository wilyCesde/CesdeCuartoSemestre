//#region if
// If 	Condición simple: Si ocurre algo, haz lo siguiente...
var nota = 7;
console.log("He realizado mi examen.");

// Condición (si nota es mayor o igual a 5)
if (nota >= 5) {
  console.log("¡Estoy aprobado!");
}
//#endregion

//#region else if
// If/else 	Condición con alternativa: Si ocurre algo, haz esto, sino, haz lo esto otro...
// uno
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Condición
if (nota < 5) {
  // Acción A (nota es menor que 5)
  calificacion = "suspendido";
} else {
  // Acción B: Cualquier otro caso a A (nota es mayor o igual que 5)
  calificacion = "aprobado";
}

console.log("Estoy", calificacion);

// dos
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Condición
if (nota < 5) {
  // Acción A (nota es menor que 5)
  calificacion = "suspendido";
}
if (nota >= 5) {
  // Acción B (nota es mayor o igual que 5)
  calificacion = "aprobado";
}

console.log("Estoy", calificacion);

// if multiple
var nota = 7;
console.log("He realizado mi examen.");

// Condición
if (nota < 5) {
  calificacion = "Insuficiente";
} else if (nota < 6) {
  calificación = "Suficiente";
} else if (nota < 8) {
  calificacion = "Bien";
} else if (nota <= 9) {
  calificacion = "Notable";
} else {
  calificacion = "Sobresaliente";
}

console.log("He obtenido un", calificacion);
//#endregion

//#region operador ternario
// ?: 	Operador ternario: Equivalente a If/else, método abreviado.
// uno
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Operador ternario: (condición ? verdadero : falso)
var calificacion = nota < 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);
//#endregion

//#region Switch
// Switch 	Estructura para casos específicos: Similar a varios If/else anidados.
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

switch (nota) {
  case 10:
    calificacion = "Sobresaliente";
    break;
  case 9:
  case 8:
    calificacion = "Notable";
    break;
  case 7:
  case 6:
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacion = "Insuficiente";
    break;
  default:
    // Cualquier otro caso
    calificacion = "Nota errónea";
    break;
}

console.log("He obtenido un", calificacion);
//#endregion