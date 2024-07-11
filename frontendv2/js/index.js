document.addEventListener('DOMContentLoaded', function () {

    const mostratAves= ()=>{

        const cardSection= document.getElementById("i-card-section")

        const aves= [
            {nombre: "Colibrí", especie:"Especie1", img: "colibri.webp", avistado: "Cundinamarca", fecha: new Date(2024, 3, 14)}, 
            {nombre: "Águila", especie:"Especie2", img: "aguila.webp", avistado: "Boyacá", fecha: new Date(2024, 5, 22)}
        ]

        aves.forEach(ave => {
            const div= document.createElement("div")
            div.className= "col-md-4 col-sm-6"
            div.innerHTML= ` 
                    <div class="card" style="width: 18rem;">
                        <img src="./img/${ave.img}" class="card-img-top" alt="Imagen de ${ave.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${ave.nombre}</h5>
                            <p class="card-text">${ave.especie}</p>                            
                            <p class="card-text">${ave.avistado}</p>                            
                            <p class="card-text">${ave.fecha.toLocaleDateString()}</p>                            
                        </div>
                    </div>
            `

            cardSection.appendChild(div)

        })   
    }

    mostratAves()

})