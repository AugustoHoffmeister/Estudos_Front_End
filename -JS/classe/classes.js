/* Classes em JavaScript

Em 2015 foi introduzido no JS as classes.
Classes são um conceito antigo em programação.

Basicamente, as classes são como 'fabricas' para criar objetos.
Pode ser dizer que são 'funções especiais' para criação de objetos.

Assim como uma fabrica precisa das máquinas para construir, as classes usam métodos chamados constructor() para criar os objetos.
*/
//------------------------------------------------------------------------------------
//Objeto Carro
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}
//------------------------------------------------------------------------------------
//Fabrica de Carros
class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        // return "Biiiiiiiii";
        return this.modelo + " Buzinou: Biiiiiiiii";
    }
}
const uno = new Carro("Fiat", "Uno", 2001);
const fusca = new Carro("Volkswagen", "Fusca", 1983);
//------------------------------------------------------------------------------------
console.log(fusca.buzina());