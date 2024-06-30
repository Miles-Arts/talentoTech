/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

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
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
   console.log("-----------------------------------")

       /*  VECTOR DE EDADES PERSONA*/

   // const  edadesPersona = [2, 5, 40, 50, 80, 100, 35, 72, 18, 27 ];

 
   //    for ( let i = 0; i < edadesPersona.length; i++) {

   //     if ( i <=  10 && i >= 19  ){
   //             console.log("Menor de Edad " + i)
   //     }

   //     console.log(edadesPersona[i]);
   //    }
   // Array de edades predefinido

  /* PUNTO 2 */

const edadesPersona = [2, 5, 40, 50, 80, 100, 35, 72, 18, 27];

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
calcularEstadisticasEdades(edadesPersona);