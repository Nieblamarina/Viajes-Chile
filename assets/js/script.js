
$(document).ready(function() {

    $(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("bg-inverse");
        } else {
            $("#menu").removeClass("bg-inverse");
        }
      
    });

});


//Cambio de color en texto con Quienes Somos

$(document).ready(function() {
    var toggle = true; // Toggle state
    $("#QuienesSomos").on({
        click: function () {
            if (toggle) {
              
// cambio de texto a color lightblue
$(this).css("color", "lightblue");
    toggle = false;
    } else {

    // cambio de texto a color de defecto
    $(this).css("color", "bisque");
    toggle = true;
            }
        }
    });

});

//Tooltip que se activa al pasar cursos en img de cards, con background-color personalizado
$(document).ready(function(){
    $('[data-toogle="tooltip"]').tooltip(   {
        boundary: "window",
        template:'<div class="tooltip tooltip-custom" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
       });
        
    
    });

//evento click boton enviar
$(document).ready(function(){

    $("#boton").click(function(){
        alert("Gracias por tu correo.¡Nos contacteremos a la brevedad!");
        });

    });








    //popover Destino del mes

    $(function() {
        $('[data-toggle="popover"]').popover()

        var popoverTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
          return new bootstrap.Popover(popoverTriggerEl)
        })

        var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
            trigger: 'focus'
          });




        });

          
          
        
        