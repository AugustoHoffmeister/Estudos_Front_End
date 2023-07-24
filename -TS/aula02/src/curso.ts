/**Tipos Básicos, Simples e Primitivos de dados */

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

/** Há também 2 tipos primitivos menos comuns, encontrados em versões mais recentes de JS e TS - bigint e symbol */

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

/**Tipos Avançados ou Especiais */

//union type - quando um valor pode ser mais do que um único tipo
let myVariable: string | number;
myVariable = "Hello";
myVariable = 43;
// myVariable = true; //erro

/** any (qualquer) - é um tipo que desabilita a verificação de tipos e permite efetivamente que todos os tipos sejam usados. */
let teste: any = 100;
// teste = "texto";
// console.log(teste.length); //5

let convert = teste as string;
// console.log(convert.length); //5

/**
 * Alerta: any pode ser uma maneira útil de evitar erro, uma vez que desabilita a verificação de tipos, mas o TypeScript não será capaz de fornecer segurança de tipo e ferramentas que dependem em dados e tipos,
 * como preenchimento automático, não funcionarão.
 * Lembre-se, deve ser evitado a "qualquer" custo...
 */

/* unknown (desconhecido) - é uma alternativa semelhante e mais segura que o any.
Esse tipo exige verificação ou conversão explicita para garantir a segurança de tipo durante as operações. */
let valor: unknown = 100;
valor = "texto";

let converte = valor as string;
// console.log(converte.length); //5

/* never (nunca) - lança um erro sempre que ele é definido.
never é raramente usado, seu uso primario é em Genéricos avançados. */
// let b: never = true;

// array - TS tem uma sintaxe específica para matrizes.
const names: string[] = [];
names.push("Augusto"); // sem erro
// names.push(43); // erro

// readonly (somente leitura) - impede que a matriz sejá alterada.
const nomes: readonly string[] = ["Augusto", "Juliana"];
// nomes.push("Maria"); // erro

/* Inferência de Tipo 
TS pode inferir o tipo de uma matriz se ela tiver valores. */
const numbers = [1, 2, 3]; // infere tipo number[]
numbers.push(4); // sem erro
// numbers.push("5") // erro
let y:number = numbers[0]; // sem erro, pega o valor 1

/* tuplas - é um array (matriz) tipada com um comprimento e tipos predefinidos para cada índice. 
As tuplas são otimas porque permitem que cada elemento na matriz seja um tipo conhecido de valor.*/
/* Uma boa prática é fazer sua tupla sempre readonly. Por que? 
As tuplas só tem tipos fortemente definidoa para os valores iniciais. */
let nossaTupla: readonly [string, number, boolean];
nossaTupla = ["Augusto", 43, true];
// nossaTupla = [true, "Augusto", 43]; // erro
// nossaTupla.push("M"); // erro

