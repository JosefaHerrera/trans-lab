$(document).ready(function() {
    $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=123456',
            //El único método soportado por la API es GET
            type: 'GET',
            datatype: 'JSON',
        })

});