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
    {
        Idinmuebles: 6,
        direccion: "Calle 161718",
        telefono: "6789012",
        precio: 450000000,
        estado: "disponible",
    },
    {
        Idinmuebles: 7,
        direccion: "Calle 192021",
        telefono: "7890123",
        precio: 500000000,
        estado: "no disponible",
    },
    {
        Idinmuebles: 8,
        direccion: "Calle 222324",
        telefono: "8901234",
        precio: 550000000,
        estado: "disponible",
    },
    {
        Idinmuebles: 9,
        direccion: "Calle 252627",
        telefono: "9012345",
        precio: 600000000,
        estado: "disponible",
    },
    {
        Idinmuebles: 10,
        direccion: "Calle 282930",
        telefono: "0123456",
        precio: 650000000,
        estado: "disponible",
    },
];

const form = document.getElementById("formulario");
form.addEventListener("submit", async(event) => {
    event.preventDefault();

    const Idinmuebles = document.getElementById("Idinmueble").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const precio = document.getElementById("precio").value;
    const estado = document.getElementById("estado").value;

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

    alert("Inmueble agregado con éxito");

    //  agregar el inmueble al arreglo
});

document.getElementById("btnBuscarInmueble").addEventListener("click", () => {
    const id = parseInt(document.getElementById("Idinmuebles").value);
    const inmueble = inmuebles.find((inm) => inm.Idinmuebles === id);

    if (!inmueble) {
        alert("No se ha encontrado un inmueble con ese ID");
        return;
    }

    console.log(inmueble);
});

document.getElementById("btnBuscarInmueble").addEventListener("click", () => {
    const id = parseInt(document.getElementById("Idinmuebles").value);
    const inmueble = inmuebles.find((inm) => inm.Idinmuebles === id);

    if (inmueble != undefined) {
        const {
            direccion,
            telefono,
            precio,
            estado
        } = inmueble;
        document.querySelector('#direccion').value = direccion;
        document.querySelector('#telefono').value = telefono;
        document.querySelector('#precio').value = precio;
        document.querySelector('#estado').value = estado;
    }

});