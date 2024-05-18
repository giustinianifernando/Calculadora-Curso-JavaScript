
//Esto agrega a la pantalla el valor del botón de la calculadora
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

//Esta accion vacía la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}

//esta acción ejecuta la cuenta y muestra resultado
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado
}