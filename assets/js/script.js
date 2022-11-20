//Cambio de color en texto con favicon

$(document).ready(function() {
    var toggle = true; // Toggle state
    $("#QuienesSomos").on({
        click: function () {
            if (toggle) {
              
                // cambio de texto a color aquamerine
                $(this).css("color", "aquamarine");
                toggle = false;
            } else {

                // cambio de texto a color de defecto
                $(this).css("color", "bisque");
                toggle = true;
            }
        }
    });

});

//Tooltip con background-color personalizado
$(document).ready(function(){
$('[data-toogle="tooltip"]').tooltip(   {
    boundary: "window",
    template:'<div class="tooltip tooltip-custom" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
   });
    

});

