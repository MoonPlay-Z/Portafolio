
var tituloOriginal = document.title;
        window.onblur = function () {
            document.title = "Hey, vuelve aquí 😁";
        }

        window.onfocus = function () {
            document.title = tituloOriginal;

        
        }