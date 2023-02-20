// Generar el arreglo de objetos
let inmuebles = [
  {
    idinmueble: 1,
    direccion: "Calle 4 # 4-4",
    telefono: "34343434",
    precio: 250,
    estado: true,
  },
  {
    idinmueble: 2,
    direccion: "Carrera 4 # 4-4",
    telefono: "8522222",
    precio: 350,
    estado: true,
  },
  {
    idinmueble: 3,
    direccion: "Calle 40 # 40-40",
    telefono: "5454546",
    precio: 150,
    estado: false,
  },
  {
    idinmueble: 4,
    direccion: "Transv 4 # 14-41",
    telefono: "121212",
    precio: 180,
    estado: true,
  },
  {
    idinmueble: 5,
    direccion: "Calle 49 # 49-49",
    telefono: "34343434",
    precio: 270,
    estado: false,
  },
];
// Referenciar elementos de html
let idinmueble = document.getElementById("idinmueble");
let midinmueble = document.querySelector("#midinmueble");
let direccion = document.getElementById("direccion");
let mdireccion = document.querySelector("#mdireccion");
let telefono = document.getElementById("telefono");
let mtelefono = document.querySelector("#mtelefono");
let precio = document.getElementById("precio");
let mprecio = document.querySelector("#mprecio");
let disponible = document.getElementById("disponible");
let nodisponible = document.querySelector("#nodisponible");
let enviar = document.getElementById("enviar");
let buscar = document.getElementById("buscar");
let listar = document.getElementById("listar");
let alerta = document.getElementById("alerta");
let listado = document.getElementById("listado");
// Eventos
idinmueble.addEventListener("focus", function () {
  midinmueble.textContent = "Id. inmueble es obligatorio *";
});
idinmueble.addEventListener("blur", function () {
  midinmueble.textContent = "";
});
direccion.addEventListener("focus", function () {
  mdireccion.textContent = "Dirección es obligatoria *";
});
direccion.addEventListener("blur", function () {
  mdireccion.textContent = "";
});
telefono.addEventListener("focus", function () {
  mtelefono.textContent = "El teléfono es obligatorio *";
});
telefono.addEventListener("blur", function () {
  mtelefono.textContent = "";
});
precio.addEventListener("focus", function () {
  mprecio.textContent = "El precio es obligatorio *";
});
precio.addEventListener("blur", () => {
  mprecio.textContent = "";
});
// Enviar
enviar.addEventListener("click", () => {
  alerta.classList.remove("d-none");
  consid = inmuebles[inmuebles.length - 1].idinmueble + 1;
  inmuebles.push({
    idinmueble: consid,
    direccion: direccion.value,
    telefono: telefono.value,
    precio: precio.value,
    estado: disponible.checked,
  });
  alerta.classList.add("alert-success");
  alerta.textContent = "Inmueble guardado correctamente ...";
  setTimeout(() => {
    alerta.classList.add("d-none");
  }, 3000);
  idinmueble.value = consid;
});
// Buscar
buscar.addEventListener("click", () => {
  let inmBuscar = inmuebles.find(
    (inm) => inm.idinmueble == idinmueble.value
  );
  if (inmBuscar != undefined) {
    direccion.value = inmBuscar.direccion;
    telefono.value = inmBuscar.telefono;
    precio.value = inmBuscar.precio;
    inmBuscar.estado
      ? (disponible.checked = true)
      : (nodisponible.checked = true);
  } else {
    alerta.classList.remove("d-none");
    alerta.classList.add("alert-danger");
    alerta.textContent = "Id inmueble NO Existe ...";
    setTimeout(() => {
      alerta.classList.remove("alert-danger");
      alerta.classList.add("d-none");
    }, 3000);
  }
});
listar.addEventListener("click", () => {
  // Recorrer el arreglo de objetos y crear una variable para almacenar todos los objetos de este
  let linmuebles = "";
  inmuebles.map((inm) => {
    linmuebles += `${inm.idinmueble} - ${inm.direccion} - ${
      inm.telefono
    } - ${inm.precio} - ${
      inm.estado ? "Disponible" : "No Disponible"
    }<br>`;
  });
  listado.innerHTML = linmuebles;
});