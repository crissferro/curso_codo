cadena1 = "hola"

cadena2 = "mundo"

cadenaConcatenada = cadena1 + cadena2 //cadena concatenada vale "holamundo"
console.log(cadenaConcatenada);


// arracamos con los IF, siempre son verdaderos

var numero1=23
var numero2=63

if (numero1 == numero2){
document.write("Los dos números son iguales")
}else{
if (numero1 > numero2) {
document.write("El primer número es mayor que el segundo")
}else{
document.write("El primer número es menor que el segundo")
}
}


//estructura switch

let diaDeSemana = parseInt(prompt("Ingrese un día"));
var dia_de_la_semana = ""
// document.write("ingrese el dia de la semana")
{
    switch (dia_de_la_semana) {
    case 1:
       document.write("Es Lunes")
       break
    case 2:
       document.write("Es Martes")
       break
    case 3:
       document.write("Es Miércoles")
       break
    case 4:
       document.write("Es Jueves")
       break
    case 5:
       document.write("Es viernes")
       break
    case 6:
    case 7:
       document.write("Es fin de semana")
       break
    default:
       document.write("Ese día no existe")
 }
}


// bucle for, se repita n cantidad de veces


// bucle while y do while, se repite la secuencia infinitamente, se usa para guiar al usuario a realizar lo que tiene que seguir

var color = ""
while (color != "rojo"){
   color = prompt("dame un color (escribe rojo para salir)","")
}



var color
do {
   color = prompt("dame un color (escribe rojo para salir)","")
} while (color != "rojo")



//bucle con un break para salir


for (i=0;i<10;i++){
    document.write (i)
    escribe = prompt("dime si continuo preguntando...", "si")
    if (escribe == "no")
       break
 }


 //estructura for anidada basica, y es el que se usa para el ejercicio
//  for (i=0;i<10;i++){
//     for (j=0;j<10;j++) {
//     document.write(i + "-" + j)
//     }
//  }


 //para el ejercicio
 for (i=11;i>8;i--){
    document.write("<br><b>La tabla del " + i + ":</b><br>")
    for (j=1;j<10;j++) {
       document.write(i + " x " + j + ": ")
       document.write(i*j)
       document.write("<br>")
    }
 }
