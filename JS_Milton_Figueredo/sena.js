/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
     /* PERÍMETROS Y ÁREAS */


     /* Triangulo     */
     /* PERÍMETRO  */
     var a = 15;
     var b = 10;
     var c = 8;
 
     var perimetroTriangulo = a + b + c;
 
     console.log("El perímetro del triángulo es de: " + perimetroTriangulo );
 
     /* AREA  */
     var s = perimetroTriangulo / 2;
 
     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
 
     console.log("El área del triángulo es: " + Math.round(area) + " m2");   
 /*------------------------------------------------------------------*/
 
     /* Rectangulo  */
     
     /* PERÍMETRO  */
     var altoRec = 20;
     var ladoRec = 40;
     var muntiplicarLadosRec = altoRec + ladoRec * 2;
 
     console.log("El perímetro del Rectángulo es de: " + muntiplicarLadosRec );
 
     /* ÁREA */
     var areaRectangulo = altoRec * ladoRec; 
     console.log("El área del Rectángulo es de: " + areaRectangulo );
 /*------------------------------------------------------------------*/
 
     /* CUADRADO */
     
     /* PERÍMETRO  */
     var ladosCuadrado = 20;
     var perimetroCuadrado = ladosCuadrado * 4;   
 
     console.log("El perímetro del Cuadrado es: " + perimetroCuadrado)
         
     /* ÁREA  */
     var areaCuadrado = ladosCuadrado * ladosCuadrado;
 
     console.log("El área del Cuadrado es: " + areaCuadrado)
 /*------------------------------------------------------------------*/
 
     /* CÍRCULO */
     
     /* PERÍMETRO  */
     var radioCirculo = 10
     var perimetroCirculo = 2 * Math.PI * radioCirculo;
 
     console.log("El perímetro del Círculo es: " + Math.round(perimetroCirculo) );
    
     /* ÁREA  */
    
     var areaCirculo = Math.PI * Math.pow(radioCirculo, 2);
   
     console.log("El perímetro del Círculo es: " + Math.round(areaCirculo) );
     
     console.log("-----------------------------------")
 
 /*------------------------------------------------------------------*/
 /*------------------------------------------------------------------*/
     /*  VECTOR DE EDADES PERSONA*/
     /*  PUNTO 2 */
 
     const edades = [2, 5, 40, 50, 80, 100, 35, 72, 18, 27];
 
     // Función para calcular las estadísticas
     function calcularEstadisticasEdades(edades) {
     // Inicializar variables para cálculos
     let menoresDeEdad = 0;
     let mayoresDeEdad = 0;
     let adultosMayores = 0;
     let edadMinima = edades[0];
     let edadMaxima = edades[0];
     let sumaEdades = 0;
 
     // Calcular estadísticas
     for (const edad of edades) {
         if (edad <= 18) {
         menoresDeEdad++;
         } else {
         mayoresDeEdad++;
         }
 
         if (edad >= 60) {
         adultosMayores++;
         }
 
         if (edad < edadMinima) {
         edadMinima = edad;
         }
 
         if (edad > edadMaxima) {
         edadMaxima = edad;
         }
 
         sumaEdades += edad;
     }
 
     const promedioEdades = sumaEdades / edades.length;
 
     // Mostrar resultados
     console.log(`Cantidad de personas menores de edad: ${menoresDeEdad}`);
     console.log(`Cantidad de personas mayores de edad: ${mayoresDeEdad}`);
     console.log(`Cantidad de adultos mayores: ${adultosMayores}`);
     console.log(`Edad más baja: ${edadMinima}`);
     console.log(`Edad más alta: ${edadMaxima}`);
     console.log(`Promedio de edades: ${promedioEdades.toFixed(2)}`);
     }
 
     // Ejecutar la función con el array de edades predefinido
     // calcularEstadisticasEdades(edadesPersona);
 
     console.log("-----------------------------------")
 /*------------------------------------------------------------------*/
 /*------------------------------------------------------------------*/
     /*  VECTOR DE LECTURA NUMEROS*/
     /*  PUNTO 3 */
 
         function validarVector(vector) {
             for (let i = 1; i < vector.length; i++) {
                 if (vector[i] < vector[i - 1]) {
                     return false;
                 }
             }
             return true;
         }
 
         function fusionarVectores(vector1, vector2) {
             const fusion = [];
             let i = 0, j = 0;
 
             while (i < vector1.length && j < vector2.length) {
                 if (vector1[i] < vector2[j]) {
                     fusion.push(vector1[i]);
                     i++;
                 } else {
                     fusion.push(vector2[j]);
                     j++;
                 }
             }
 
             while (i < vector1.length) {
                 fusion.push(vector1[i]);
                 i++;
             }
 
             while (j < vector2.length) {
                 fusion.push(vector2[j]);
                 j++;
             }
 
             return fusion;
         }
 
         const vector1 = [2, 5, 40, 50, 80];
         const vector2 = [4, 4, 53, 70, 5];
 
         if (validarVector(vector1) && validarVector(vector2)) {
             const vectorFusionado = fusionarVectores(vector1, vector2);
             console.log("Vector fusionado y ordenado: " + vectorFusionado.join(', '));
         } else {
             console.log("Uno o ambos vectores no están en orden ascendente.");
         }
 
 
     console.log("-----------------------------------")
 /*------------------------------------------------------------------*/
 /*------------------------------------------------------------------*/
     /*  EMISORA RATIG*/
     /*  PUNTO 4 */
 
         var usuariosEmisora = 
             [ 
             { 
                 id: 1, 
                 nombre: "Luisa España", 
                 identificacion:  1220, 
                 nacimiento: 1999, 
                 email: "luisa@ciudad.com", 
                 ciudad: "Cartagena", 
                 ciudadOrigen: "Cartagena", 
                 artistaFavorito: { 
                     artista: "ZOE", 
                     titulo: [ "amarillo", "azul", "morado"] 
                 }
             },
 
             { 
                 id: 2, 
                 nombre: "José Maradona", 
                 identificacion:  2020, 
                 nacimiento: 1995, 
                 email: "jose@ciudad.com", 
                 ciudad: "Tunja", 
                 ciudadOrigen: "Bogotá",  
                 artistaFavorito: { 
                     artista: "Lucas", 
                     titulo: ["planta", "piedra", "casa"]  
                 }},
 
             { 
                 id: 3, 
                 nombre: "Lina Palma", 
                 identificacion:  9090, 
                 nacimiento: 1998, 
                 email: "lina@ciudad.com", 
                 ciudad: "Medellín", 
                 ciudadOrigen: "Miami",  
                 artistaFavorito: { 
                     artista: "ZOE", 
                     titulo: ["negro", "amarillo", "morado"]  
                 }},
 
             { 
                 id: 4, 
                 nombre: "Claudia Lopez", 
                 identificacion:  1324, 
                 nacimiento: 1970, 
                 email: "@ciudad.com", 
                 ciudad: "Italia", 
                 ciudadOrigen: "Madrid",  
                 artistaFavorito: { 
                     artista: "Lucas", 
                     titulo: ["planta", "árbol", "nube"]  
                 }},
 
             { 
                 id: 4, 
                 nombre: "Diego Espitia", 
                 identificacion:  1515, 
                 nacimiento: 1991, 
                 email: "@ciudad.com", 
                 ciudad: "Tulua", 
                 ciudadOrigen: "Chia",  
                 artistaFavorito: { 
                     artista: "Lili", 
                     titulo: ["viento",  "agua",  "marea" ] 
                 }},
 
             { 
                 id: 5, 
                 nombre: "Fernanda Medina", 
                 identificacion:  9060, 
                 nacimiento: 1989, 
                 email: "@ciudad.com", 
                 ciudad: "Cali", 
                 ciudadOrigen: "Leticia",  
                 artistaFavorito: { 
                     artista: "Lili", 
                     titulo: ["marea", "agua",  "viento"]  
                 }}
 
             ]
 
             // usuariosEmisora.sort((a, b) => {
             //         return b.nombre - a.nombre;
             // });
 
             console.log("Persona " + usuariosEmisora[1]);
             console.log("Emisora");
 
 
 
 console.log("-----------------------------------")
 /*------------------------------------------------------------------*/
 /*------------------------------------------------------------------*/
   