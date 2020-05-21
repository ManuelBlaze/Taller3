let surNorte = 144000;
let oriental = 215000;
let occidental = 444000;
let aux = 0;
$("#comprar").click(function(evt) {
    evt.preventDefault();

    let nombres = $("#nombre").val();
    let apellidos = $("#apellidos").val();
    let telefono = $("#telefono").val();
    let cantidad = $("#cantidad").val();
    let tribuna = $("#tribuna").val();
    let usuario = nombres + " " + apellidos;
    let valor;

    switch (tribuna) {
        case "Sur-Norte":
            valor = surNorte;
            break;
        case "Oriental":
            valor = oriental;
            break;
        case "Occidental":
            valor = occidental;
            break;
    }

    if (nombres.length == 0 && apellidos.length == 0 && cantidad.length == 0 && telefono.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son Obligatorios!',
        })
    } else if (nombres.length == 0 && apellidos.length != 0 && cantidad.length != 0 && telefono.length != 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa tu Nombre!',
        })
    } else if (nombres.length != 0 && apellidos.length == 0 && cantidad.length != 0 && telefono.length != 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa tus Apellidos!',
        })
    } else if (nombres.length != 0 && apellidos.length != 0 && cantidad.length == 0 && telefono.length != 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa la cantidad de Abonos!',
        })
    } else if (nombres.length != 0 && apellidos.length != 0 && cantidad.length != 0 && telefono.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa tu Télefono!',
        })
    } else if (nombres.length != 0 && apellidos.length != 0 && cantidad.length != 0 && telefono.length != 0) {
        if (esNumero(telefono) && esNumero(cantidad)) {
            Swal.fire({
                title: 'Resumen de tu pedido:',
                html: "<p>Usuario: " + usuario + "</p>" +
                    "<p>Teléfono: " + telefono + "</p>" +
                    "<p>Tribuna: " + tribuna + "</p>" +
                    "<p>Valor: $ " + valor + "</p>" +
                    "<p>Cantidad: " + cantidad + "</p>" +
                    "<i><b>Valor Total: $ " + (valor *= cantidad) + "</b></i>",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmar'
            }).then((result) => {
                if (result.value) {
                    Swal.fire(
                        'Hecho!',
                        'Tu orden ha sido procesada.',
                        'success'
                    )
                    document.getElementById("nombre").value = ""
                    document.getElementById("apellidos").value = ""
                    document.getElementById("telefono").value = ""
                    document.getElementById("cantidad").value = ""
                    document.getElementById("tribuna").value = "Sur-Norte"
                }
            })
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son Obligatorios!',
        })
    }
})

function esNumero(numero) {
    if (isNaN(numero)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '"' + numero + '"' + ' No es un número',
        })
        return false;
    } else {
        return true;
    }
}