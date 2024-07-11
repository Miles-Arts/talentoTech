document.addEventListener("DOMContentLoaded", function () {


    function nombre() {

    }

    const nombre2 = function() {

    }

    const mostrarBosque =  () => {

        const cardSection = document.getElementById("i-card-section")

        const bosques = [
             {nombre: "Pino", especia: "arbolis", img: "pino.jpg", visto: "Tuta", fecha: new Date(2024, 3, 14 )  }, 
             {nombre: "Árbol Agua", especia: "arbolos", img:"agua.jpg", visto: "Paipa", fecha: new Date(2024, 5, 22 )}
            ] 

           bosques.forEach( bosque => { 
            const bosqueElemento = document.createElement("div")
            div.className = "col-md-4 "
            div.innerHTML =  "<p>Hola</p>"

            cardSection.appendChild(div);

           } ) 

    }

    mostrarBosque()

});