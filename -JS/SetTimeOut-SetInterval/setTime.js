/* Eventos de Tempo com JS

Os eventos de tempo permitem a execução do cidigo em intervalos de tempo especificos. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois metodos-chaves para usar no JavaScript são: setTimeout e setInterval

-> setTimeout (function, tempo em milisegundos)
"Executa uma função, depois de esperar um número especifico de milisegundos.

-> setInterval (function, milisegundos)
"É o mesmo que setTimeout(), mas repete a execução da função continuamente."

*/

function ativar1(){
    document.getElementById('tempo1').innerHTML = "Começou acontagem!";
    //Ativa apenas uma vez após o tempo determinado.
    tempo1 = setTimeout(function(){
        document.getElementById('tempo1').innerHTML = "Executou o setTimeout!";
        document.body.style.backgroundColor = "gray"
    }, 3000);
}
function parar1(){
    clearTimeout(tempo1);
    document.getElementById('tempo1').innerHTML = "Parou a contagem!";
}
//-----------------------------------------------------------------------------

function ativar2(){
    tempo2 = setInterval(function(){
        var cronometro = document.getElementById('tempo2').innerHTML;
        var soma = parseInt(cronometro) -1;

        if(soma === 0) {
            document.getElementById('tempo2').innerHTML = "Boom";
            document.body.style.backgroundColor = "grey"
        parar2()
        } else {
            document.getElementById('tempo2').innerHTML = soma;
        }
    }, 1000);
}
function parar2(){
    clearInterval(tempo2);
}