let valor = 30000;
let domicilio = 7800;
let descuentoMadres = 10000;
let valorTotal = valor + domicilio - descuentoMadres;
$("#comprar").click(function() {
    Swal.fire({
        title: 'Resumen de tu pedido:',
        html: "<p>Torta Chocolate: " + valor + "</p>" +
            "<p> + " + "Domicilio: " + domicilio + "</p>" +
            "<p> - " + "Descuento día de Madres: " + descuentoMadres + "</p>" +
            "<i><b>Valor Total: " + valorTotal + "</b></i>",
        icon: 'warning',
        showCancelButton: true,
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
        }
    })
});