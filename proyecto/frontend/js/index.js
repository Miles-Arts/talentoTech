document.addEventListener('DOMContentLoaded', function () {

    const mostrarBosque =  () => {

        const cardSection = document.getElementById("i-card-section")

        const bosques = [
             {nombre: "Pino", especie: "arbolis", img: "pino.jpg", visto: "Tuta", fecha: new Date(2024, 3, 14 )  }, 
             {nombre: "Árbol Agua", especie: "arbolos", img:"agua.jpg", visto: "Paipa", fecha: new Date(2024, 5, 22 )}
            ] 

           bosques.forEach( bosque => { 
            const verBosque = document.createElement("div")
            verBosque.className = "col-lg-4 col-md-6 col-sm-6 "
            verBosque.innerHTML =  `  
                    <div class="card" style="width: 18rem;">
                        <img src="./img/${bosque.img}" class="card-img-top" alt="Imagen de Bosque de ${bosque.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${bosque.nombre }</h5>
                            <p class="card-text">${bosque.especie}</p>
                            <p class="card-text">${bosque.visto}</p>
                            <p class="card-text">${bosque.fecha.toLocaleDateString()}</p>
                            <a href="#" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
            ` 

            cardSection.appendChild(verBosque)

        }) 

    }

    mostrarBosque()

})