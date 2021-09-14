$( document ).ready(function(){

    //ocultar cards
    $(".card-title").on("click", function(){
        $(".card-text").toggle();
    });

    // Texto Rojo al hacer doble click
    $("h6").on("dblclick", function(){
        $(this).css("color", "red");
    });

    // tooltip
    $(function(){
        $('[datta-toogle="tooltip"]').tooltip()
    })

    $("#enviarCorreo").on("click", function (event) {
        alert("El correo fue enviado correctamente...")
    });

});
