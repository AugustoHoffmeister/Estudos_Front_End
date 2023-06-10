/*
Funções 
Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena 'fabrica' onde voçê faz uma entrada de uma informação (valor) e ele te dá uma saída.

Pode ser encarado como 'mini-programas' projetados para fazer uma tarefa que vai contribuir para todo código.

Uma função JavaScript é executada quando 'algo' a invoca (chamada).
*/

// função soma 
function soma (valor1, valor2){
    return valor1 + valor2;
}
// atribuição de valores
var real = 10;
var dolar = 5.37
// função cotação do dolar
function realDolar(real, dolar){
    return real * dolar;
}
//função do botão
function hello(){
    alert("Olá Pessoal");
}

// saidas: soma 
document.getElementById("texto").innerHTML = soma(5, 5);

var total = soma(2, 2);
alert(total);
// saidas: cotação do dolar dia 28-11-22
document.getElementById("texto").innerHTML = realDolar(real, dolar);

var total = realDolar(real, dolar);
alert("R$: "+ real +" vale $: " + total +" dolares.");

//chama uma função usando o nome atribuida a ela
hello();