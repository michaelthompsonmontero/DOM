/* Ejercicio 4 Punto 1
fetch(URL)
.then(convertir a formato JSON)
.then(instrucciones de lo que se quiere hacer mientras se cumpla la promesa)

.catch(en caso contrario mandar error)

*/

/* Ejercicio 1 Punto 2
function puntoUno(){
  //document.getElementById("container").style.backgroundColor = "red"

  //document.querySelector("#container").style.backgroundColor = "red";  

  document.querySelectorAll(".second");
}
*/

/* Ejercicio 1 Punto 3
function puntoUno(){
  var x;
  x = document.querySelectorAll(".second");
  
      x[0].style.backgroundColor = "blue";
      x[1].style.backgroundColor = "blue";
  }*/


 /* Ejercicio 1 Punto 4
 function puntoUno(){
    var x;
    x = document.querySelectorAll(".third");
    
        x[1].style.backgroundColor = "blue";
    }*/
  
/* Ejercicio 4 Punto 5
    function puntoUno(){
    
        document.getElementById("container").innerHTML = "Hello";
        
        }
*/

/* Ejercicio 4 Punto 5
function puntoSeis() {
    let main = document.querySelectorAll("#container");
    for (let i = 0; i < main.length; i++) {
        document.querySelector(".footer").innerHTML = main[i].innerHTML;
    }
}
*/

/* Punto 7
function puntoSiete() {
    let main = document.querySelectorAll("#container");
    for (let i = 0; i < main.length; i++) {
        main[1].remove();
    }
}
*/