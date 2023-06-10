/*
ARRAY
Os arrays em JavaScript são usados para armazenar vários valores
em uma única variavel. Diferente dos objetos, que funcionam com
propriedades ou 'nomes' que dá para os itens dentro dele, os arrays
não possuem propriedades. Item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle,
 por ordem de posição dentro dele.

 Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

 lista[0] (lista na posição 0) vai conter o valor "arroz".
 lista[1] (lista na posição 1) vai conter o valor "feijão".

 E assim por diante...
*/ 
const pessoa = ["Dimitri", "Teixeira", 30]; // array
pessoa.push("brasileiro");

console.log(pessoa);