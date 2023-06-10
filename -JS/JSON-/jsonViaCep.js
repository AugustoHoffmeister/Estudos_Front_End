/*
JSON no Javascript utiliza 2 metodos:
 - JSON.parse() -> Converte texto em objetos.
 - JSON.stringify() -> Converte objeto em texto.
 */

function buscarCep(){
    let input = document.getElementById('cep').value;
    
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();
    
    ajax.onload = function () {
        // document.getElementById('texto').innerHTML = this.responseText;

        // transformei texto em objeto
        let obj = JSON.parse(this.responseText);

        //peguei alguns dos os valores
        let rua = obj.logradouro;
        let bairro = obj.bairro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "Rua: " + rua + "<br> Bairro: " + bairro + "<br> Cidade: " + cidade + "<br> Estado: " + estado;
    }
    
}
