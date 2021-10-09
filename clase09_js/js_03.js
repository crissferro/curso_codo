//funcion que muestra fecha y hora cada segundo
// function mostrarFechaHora() {
//     console.log(new Date());
// }
// setInterval(mostrarFechaHora, 1000);


//funcion cuestionario
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
//   );

  //otro ejemplo

  // Esta función devuelve una cadena rellenada con ceros a la izquierda
 
// function padZeros(num, totalLen) {
//     var numStr = num.toString();             // Inicializa un valor de retorno como cadena
//     var numZeros = totalLen - numStr.length; // Calcula el no. de ceros
//     for (var i = 1; i <= numZeros; i++) {
//        numStr = "0" + numStr;
//     }
//     return numStr;
//  }
//  Las siguientes sentencias llaman a la función padZeros.
 
  
 
//  var resultado;
//  resultado = padZeros(42,4); // retorna "0042"
//  resultado = pad

//funcion callback

// function saludar(nombre) {// ←-- definición de la función
//     alert('Hola ' + nombre);
//   }
   
//   function procesarEntradaUsuario(callback) {
//     var nombre = prompt('Por favor ingresa tu nombre.');
//     callback(nombre);
//   }
   
//   procesarEntradaUsuario(saludar);// ←-- función pasada como parámetro

//   function function1(fn){// ←-- definición de la función
//     setTimeout(function(){
//        console.log("mensaje 1!");
//        fn();
//     }, 1000);
 
//   }
//   function funct2(params) {
//  console.log("mensaje 2!");
    
//   }
//   function1(funct2);


  //closures...

//   function iniciar() {
//     var nombre = "internet";  // La variable nombre es una variable local creada por iniciar.
//     function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
//       alert(nombre);  // Usa una variable declarada en la función externa.
//     }
//     mostrarNombre();
//   }
//   iniciar();  

//cambiar tamaño de tipografia
    // function makeSizer(size) {
    //     return function() {
    //     document.body.style.fontSize = size + 'px';
    //     };
    // }
    // var size12 = makeSizer(12);
    // var size14 = makeSizer(14);
    // var size16 = makeSizer(16);

    // document.getElementById('size-12').onclick = size12;
    // document.getElementById('size-14').onclick = size14;
    // document.getElementById('size-16').onclick = size16;


//otra funcion para contar

// var Counter = (function() {
//     var privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
//     return {
//       increment: function() {
//         changeBy(1);
//       },
//       decrement: function() {
//         changeBy(-1);
//       },
//       value: function() {
//         return privateCounter;
//       }
//     }   
//   })();
   
//   alert(Counter.value()); /* Muestra 0 */
//   Counter.increment();
//   Counter.increment();
//   alert(Counter.value()); /* Muestra 2 */
//   Counter.decrement();
//   alert(Counter.value()); /* Muestra 1 */


//ejemplo de formularios

function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}
 
function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Dirección de correo electrónico'},
      {'id': 'name', 'help': 'Nombre completo'},
      {'id': 'age', 'help': 'Edad (debes tener más de 16 años)'}
    ];
 
  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}
 
setupHelp();

