
/*if / else*/
var interruptor = "on";

if (interruptor == "on"){
    console.log('Lampada ligada');
}else{
    console.log(interruptor);
}

var hora  = new Date().getHours();

if(hora < 12) {
    alert('Bom Dia');
}else if (hora < 18) {
    alert('Boa Tarde');
}else{
    alert('Boa Noite');
}

function verificar(){
    let nome = document.getElementById("nome").value;
    if (nome == "" || nome == null) {
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ser vazio.";
        p.style.color = "red";
    }else{
        let p = document.getElementById("teste");
        p.innerHTML = "Parabéns tudo certinho.";
        p.style.color = "green";
    }
}