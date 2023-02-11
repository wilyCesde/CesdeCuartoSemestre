const inmuebles = [{
        idinmueble: 1,
        direccion: "Calle 123",
        telefono: "1234567",
        precio: 200000000,
        estado: "disponible",
    },
    {
        idinmueble: 2,
        direccion: "Calle 456",
        telefono: "2345678",
        precio: 250000000,
        estado: "disponible",
    },
    {
        idinmueble: 3,
        direccion: "Calle 789",
        telefono: "3456789",
        precio: 300000000,
        estado: "disponible",
    },
    {
        idinmueble: 4,
        direccion: "Calle 101112",
        telefono: "4567890",
        precio: 350000000,
        estado: "no disponible",
    },
    {
        idinmueble: 5,
        direccion: "Calle 131415",
        telefono: "5678901",
        precio: 400000000,
        estado: "disponible",
    },
    {
        idinmueble: 6,
        direccion: "Calle 161718",
        telefono: "6789012",
        precio: 450000000,
        estado: "disponible",
    },
    {
        idinmueble: 7,
        direccion: "Calle 192021",
        telefono: "7890123",
        precio: 500000000,
        estado: "no disponible",
    },
    {
        idinmueble: 8,
        direccion: "Calle 222324",
        telefono: "8901234",
        precio: 550000000,
        estado: "disponible",
    },
    {
        idinmueble: 9,
        direccion: "Calle 252627",
        telefono: "9012345",
        precio: 600000000,
        estado: "disponible",
    },
    {
        idinmueble: 10,
        direccion: "Calle 282930",
        telefono: "0123456",
        precio: 650000000,
        estado: "disponible",
    },
    Ñ
];

const formulario = document.getElementById('formulario');
const idinmueble = document.getElementById('idinmueble');
const direccion = document.getElementById('direccion');
const precio = document.getElementById('precio');
const estado = document.getElementById('estado');
const validar = document.querySelector('.validar');

function validarEntero() {
    if (!Number.isInteger(parseInt(idinmueble.value))) {
        validar.innerHTML = 'Solo se aceptan números';
    } else {
        validar.innerHTML = '';
    }
}