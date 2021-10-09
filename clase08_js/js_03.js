/* Declarando la función 'myFunc' */
function myFunc(elobjeto)
{
  elobjeto.marca= "Toyota";
}
/*
 * Declarando la variable 'mycar';
 * Se crea e inicializa el nuevo objeto;
 * para hacer referencia a él mediante 'mycar'
 */
var mycar = {
  marca: "Honda",
  modelo: "Accord",
  año: 1998
};

/* Mostrando 'Honda' */
window.alert(mycar.marca);

/* Paso por referencia del objeto 'mycar' a la función 'myFunc'*/
myFunc(mycar);

/*
 * Muestra 'Toyota' como valor de la propiedad 'marca'
 * del objeto, que ha sido cambiado por la función.
 */
window.alert(mycar.marca);