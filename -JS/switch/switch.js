/* Switch
É usado paea realizar diferentes ações com base em diferentes condições 
no mesmo bloco de verificação.
Caso a condição não seja compativel não será executada e o valor padão será acionado.*/

function verificaDia(){
    var dia  = new Date().getDay();

    switch (dia) {
        case 0:
            //o que acontece
            document.getElementById("teste").innerHTML = "Domingo";
            break;
        case 1:
            //o que acontece
            document.getElementById("teste").innerHTML = "Segunda";
            break;
        case 2:
            //o que acontece
            document.getElementById("teste").innerHTML = "Terça";
            break;
        case 3:
            //o que acontece
            document.getElementById("teste").innerHTML = "Quarta";
            break;
        case 4:
            //o que acontece
            document.getElementById("teste").innerHTML = "Quinta";
            break;
        case 5:
            //o que acontece
            document.getElementById("teste").innerHTML = "Sexta";
            break;
        case 6:
            //o que acontece
            document.getElementById("teste").innerHTML = "Sabado";
            break;
        default:
        //o que acontece
        document.getElementById("teste").innerHTML = "Não sei que dia é... " + dia;
    }
}