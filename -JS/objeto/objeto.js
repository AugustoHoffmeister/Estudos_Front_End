/*
Objetos:
Os objetos também são variáveis. Mas os objetos podem conter muitos valores.

Os valores dentro de um objeto são chamados propriedades.
Ex: const carro = {marca:"ford", modelo:"KA", cor:"prata", ano:2015}

Objetos tambem podem ter metodos.
Um método é uma função colocada dentro de uma propriedade.
Ex: 
carro.partida()
carro.acelera()
carro.freia()
*/
const carro = {
    marca: "ford",
    modelo: "Ka",
    cor: "Prata",
    ano: 2015,
    buzina: function () {alert('Biiiiiiiiiii')},
    completo: function(){
        return "A marca é "+ this.marca + "e o modelo é "+ this.modelo
    }


};
carro.buzina();

console.log(carro.completo());