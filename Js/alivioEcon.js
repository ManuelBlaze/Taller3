$("#consultar").click(function(evt) {
    evt.preventDefault();
    let cedula = $("#cedula").val();
    let estrato = $("#estrato").val();
    let descuento;

    if (cedula.length == 0 && estrato == null) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese Todos los Datos',
        })
    } else if (cedula.length == 0 && estrato != null) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un número de cedula',
        })
    } else if (estrato == null && cedula.length != 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese su Estrato',
        })
    } else if (esNumero(cedula) && numeroValido(cedula) && estrato != null) {
        switch (estrato) {
            case "1":
                descuento = "40%";
                break;
            case "2":
                descuento = "30%";
                break;
            case "3":
                descuento = "20%";
                break;
            default:
                descuento = "Usted no tiene descuento"
                break;
        }
        if (estrato > 3) {
            Swal.fire({
                title: '<strong>Usuario: </strong>' + cedula,
                icon: 'info',
                html: descuento,
                showCloseButton: true,
                confirmButtonText: 'Otra Consulta',
                confirmButtonColor: '#3ec951'
            })
        } else {
            Swal.fire({
                title: '<strong>Usuario: </strong>' + cedula,
                icon: 'info',
                html: 'Usted cuenta con ' + descuento + ' de descuento!',
                showCloseButton: true,
                confirmButtonText: 'Otra Consulta',
                confirmButtonColor: '#3ec951'
            })
        }
        document.getElementById("cedula").value = ""
        document.getElementById("estrato").value = "Seleccionar"
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

function numeroValido(numero) {
    if (numero.length < 8) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un número de cedula válido',
        })
        return false;
    } else {
        return true;
    }
}