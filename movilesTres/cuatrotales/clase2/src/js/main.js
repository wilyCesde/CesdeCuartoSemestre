//#region Atributos
let inmuebles = [
  {
    idInmueble: "00",
    direccion: "Cl 9a",
    telefono: "31282838889",
    precio: 220000000,
    estado: true,
  },
  {
    idInmueble: "01",
    direccion: "Cl 9a",
    telefono: "31282838889",
    precio: 280000000,
    estado: false,
  },
  {
    idInmueble: "02",
    direccion: "Cl 9a",
    telefono: "31282838889",
    precio: 300000000,
    estado: true,
  },
  {
    idInmueble: "03",
    direccion: "Cl 9a",
    telefono: "31282838889",
    precio: 200000000,
    estado: false,
  },
  {
    idInmueble: "04",
    direccion: "Cl 9a",
    telefono: "31282838889",
    precio: 250000000,
    estado: true,
  },
];

//alerta
const alerta = document.getElementById("alert");

//form
const formInmuebles = document.getElementById("formInmuebles");

const idInmueble = document.getElementById("idInmueble");
const messageIdInmueble = document.getElementById("messageIdInmueble");

const direccion = document.getElementById("direccion");
const messageDireccion = document.getElementById("messageDireccion");

const telefono = document.getElementById("telefono");
const messageTelefono = document.getElementById("messageTelefono");

const precio = document.getElementById("precio");
const messagePrecio = document.getElementById("messagePrecio");

const disponible = document.getElementById("disponible");
const noDisponible = document.getElementById("noDisponible");

// buttons
const enviar = document.getElementById("enviar");
const buscar = document.getElementById("buscar");
const listar = document.getElementById("listar");
//#endregion

//#region eventos
// window.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     if (idInmueble.value != "") {
//       direccion.focus();
//     }
//     if (direccion.value != "") {
//       telefono.focus();
//     }
//     if (telefono.value != "") {
//       precio.focus();
//     }
//     if (precio.value != "") {
//       disponible.focus();
//     }
//   }
// });
// idInmueble
idInmueble.addEventListener("focus", function () {
  MessageIdInmueble.textContent = "El id del inmueble es obligatorio";
});

idInmueble.addEventListener("blur", function () {
  MessageIdInmueble.textContent = "";
});

//direccion
direccion.addEventListener("focus", function () {
  Messagedireccion.textContent = "La direccion";
});

direccion.addEventListener("blur", function () {
  Messagedireccion.textContent = "";
});

//telefono
telefono.addEventListener("focus", function () {
  Messagetelefono.textContent = "La telefono";
});

telefono.addEventListener("blur", function () {
  Messagetelefono.textContent = "";
});

//precio
precio.addEventListener("focus", function () {
  Messageprecio.textContent = "La precio";
});

precio.addEventListener("blur", function () {
  Messageprecio.textContent = "";
});

// buttons
// Enviar
enviar.addEventListener("click", () => {
  let result = inmuebles.find((item) => item.idInmueble === idInmueble.value);
  if (!result) {
    inmuebles.push({
      idInmueble: idInmueble.value,
      direccion: direccion.value,
      telefono: telefono.value,
      precio: precio.value,
      estado: disponible.checked,
    });
    alerta.classList.remove("d-none");
    alerta.classList.remove("alert-warning");
    alerta.classList.add("alert-success");
    alerta.textContent = "Inmueble guardado correctamente";
    console.log(inmuebles);
  } else {
    alerta.classList.remove("d-none");
    alerta.classList.remove("alert-success");
    alerta.classList.add("alert-warning");
    alerta.textContent = "Inmueble existente";
  }

  setTimeout(() => {
    alerta.classList.add("d-none");
  }, 5000);
});
//#endregion
