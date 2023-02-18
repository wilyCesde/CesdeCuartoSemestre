const inmuebles = [{
        Idinmuebles: 1,
        direccion: "Calle 123",
        telefono: "1234567",
        precio: 200000000,
        estado: "disponible",
    },
    {
        Idinmuebles: 2,
        direccion: "Calle 456",
        telefono: "2345678",
        precio: 250000000,
        estado: "disponible",
    },
    {
        Idinmuebles: 3,
        direccion: "Calle 789",
        telefono: "3456789",
        precio: 300000000,
        estado: "disponible",
    },
    {
        Idinmuebles: 4,
        direccion: "Calle 101112",
        telefono: "4567890",
        precio: 350000000,
        estado: "no disponible",
    },
    {
        Idinmuebles: 5,
        direccion: "Calle 131415",
        telefono: "5678901",
        precio: 400000000,
        estado: "disponible",
    },
];

const form = document.getElementById("formulario");
form.addEventListener("submit", async(event) => {
    event.preventDefault();

    const Idinmuebles = document.getElementById("Idinmuebles").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const precio = document.getElementById("precio").value;
    const estado = document.getElementById("estado").value;
    const tablaInmuebles = document.getElementById("tablaInmuebles").value;

    if (!Idinmuebles || !direccion || !precio) {
        alert("Todos los campos son obligatorios");
        return;
    }

    if (isNaN(Idinmuebles)) {
        alert("El id debe ser un número");
        return;
    }

    if (precio < 100000000 || precio > 500000000) {
        alert("El precio debe estar entre 100 millones y 500 millones");
        return;
    }

    //  proceso asíncrono con setTimeout
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });

    const nuevoInmueble = {
        Idinmuebles: parseInt(Idinmuebles),
        direccion: direccion,
        telefono: telefono,
        precio: parseInt(precio),
        estado: estado,
    };

    inmuebles.push(nuevoInmueble);

    console.log(inmuebles);
    alert("Inmueble agregado con éxito");
    return nuevoInmueble;
});

document.getElementById("btnBuscarInmueble").addEventListener("click", () => {
    const id = parseInt(document.getElementById("Idinmuebles").value);
    const inmueble = inmuebles.find((inm) => inm.Idinmuebles === id);

    if (!inmueble) {
        alert("No se ha encontrado un inmueble con ese ID");
        return;
    }

    console.log(inmueble);

    const { direccion, telefono, precio, estado } = inmueble;
    document.querySelector("#direccion").value = direccion;
    document.querySelector("#telefono").value = telefono;
    document.querySelector("#precio").value = precio;
    document.querySelector("#estado").value = estado;
});
document.getElementById("btnLimpiar").addEventListener("click", () => {
    document.getElementById("Idinmuebles").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("tablaInmuebles") = "";
});
const listarInmuebles = () => {
    const inmueblesDisponibles = inmuebles.filter(
        (inmueble) => inmueble.estado === "disponible"
    );
    let tabla =
        "<table class='table table-striped my-5'><tr><th>ID</th><th>Dirección</th><th>Teléfono</th><th>Precio</th><th>Estado</th></tr>";

    for (let i = 0; i < inmueblesDisponibles.length; i++) {
        tabla += `<tr><td>${inmueblesDisponibles[i].Idinmuebles}</td><td>${inmueblesDisponibles[i].direccion}</td><td>${inmueblesDisponibles[i].telefono}</td><td>${inmueblesDisponibles[i].precio}</td><td>${inmueblesDisponibles[i].estado}</td></tr>`;
    }
    tabla += "</table>";
    document.getElementById("tablaInmuebles").innerHTML = tabla;
};
document
    .getElementById("btnListarInmuebles")
    .addEventListener("click", listarInmuebles);