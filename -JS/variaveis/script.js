/*
Variaveis:
São 'recipientes' onde podemos armazenar informação que podem variar, 
ou seja, podem ter qualquer tipo de valor.

No JavaScript temos 3 palavras reservadas para declarar variaveis:
-> var: permite redeclaração de variavel. Valido no escopo.
-> let: não permite redeclaração de variavel.Valido no escopo.
-> const: não permite redeclaração de variavel. Nunca muda.
*/

var pote = "Bombom";
alert(pote);

//Declaração de Variaveis
var a, b, c;
//Atribuição dos Valores
a = 2;
b = 3;
c = a + b ;
alert(c);

//Declaração de Variaveis
var nome, sobrenome, nomeCompleto, idade;
//Atribuição dos Valores
nome = "Augusto";
sobrenome = "Flores"
idade = 43;
nomeCompleto = nome + " " + sobrenome;
pessoa = nome + idade;
document.getElementById("texto1").innerHTML = nomeCompleto;
document.getElementById("texto2").innerHTML = pessoa;
