// Tipos Básicos, Simples e Primitivos de dados

// string - valores de texto
let nome: string = "Augusto";

// number - números inteiros e valores de ponto flutuante
let idade: number = 43;

// boolean - valores verdadeiros (true) ou falsos (false)
let ativo: boolean = true;

// undefined (indefinido)
let bizarro: undefined = undefined;

// null (nulo)
let nada: null = null;

/* Há também 2 tipos primitivos menos comuns, encontrados em versões mais recentes de JS e TS - bigint e symbol */

/** Ao criar uma varíavel, há duas maneiras principais de o TS atribuir um tipo:
 * Explicito
 * Implicito
 */
/** Tipo Explicito - quando você atribui o tipo de dado na declaração. */
let sobrenome: string = "Hoffmeister";
// sobrenome = 30; // TS aponta erro

/** Tipo Implicito - quando o TS ira "adivinhar" inferir o tipo com base no valor atribuido */
let profissao = "programador";
// profissao = 100; TS aponta erro
