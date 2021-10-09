var form = document.forms['form']
var user = document.getElementById('usuario')
var pass = document.getElementById('clave')

form.onsubmit = function (ev) {
    console.log(ev)
    // Si bien hago un control por formulario, tambien hago un control de los campos por funcion
    if (user.value == "" || pass.value == "") {
        ev.preventDefault()
        alert('Falta completar algún dato')
    } else {
        textoname = user.value
        if (textoname.indexOf('@') == -1) {
            alert('El nombre debe contener un caracter @')
            ev.preventDefault()
        }
    }
}