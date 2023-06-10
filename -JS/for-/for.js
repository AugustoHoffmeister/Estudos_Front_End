/* Laço de Repetição: For
Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.

*/
//    for(ponto inicial, condição, ação)
//    for ( let i = 0;  i < 1001; i++) {
//     document.getElementById("teste").innerHTML += i + ", ";
// }
// ------------------------------------------------------

const carro = ["Fusca", "Brasilia", "Del Rey", "Chevette", "Maverick"];

var quant = carro.length;

for (let i = 0; i < quant; i++){
    document.getElementById("teste").innerHTML += carro[i] + " - ";
}

// ----------------------------------------------------

var anoAtual = new Date().getFullYear();

for (let i = anoAtual; i >= 1900; i--){
    document.getElementById("ano").innerHTML += 
    "<option value='" + i + "'>" + i + "</option>";
}