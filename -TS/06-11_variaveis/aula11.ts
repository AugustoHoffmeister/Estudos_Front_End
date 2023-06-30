// Aula 11 - Passagem Por Valor e Referência
/**
 * imprime em tela o conteúdo das variáveis
 * @param {string} descritivo Qual é o descritivo que será impresso
 * @param {number | string | boolean} oque Conteudo que será impresso
 */
/*
function imprimir(descritivo: string, oque: number | string | boolean): void {
    console.log(descritivo, oque);
  }
  /**
   * Soma dois numeros e retorna o resultado
   * @param numero Primeiro número sa soma
   * @param soma Valor a ser acrescentado
   * @returns
   */
  /*
  function somar(numero: number, soma: number): number {
    let x: number;
    //recebe o valor
    numero = 50
    x = numero + soma;
    return x;
  }
  // duas variaveis
  var x: number = 10;
  var y: number = 20;
  
  /**
   * Recebe Objeto com x e y e retorna a soma
   * @param objeto Objeto com x e y
   * @returns Soma de x + y
   */
  /*
  function somarObj(objeto: {x: number, y: number}): number {
    // recebe por referencia
    objeto.x = 100
    objeto.y = 200
    return objeto.x + objeto.y
  }
  
  // um obj contendo 2 propriedades do tipo numero
  var numeros: {x: number, y: number} = {
    x: 1,
    y: 2
  }
  
  // var empresa: string = "Fiat";
  // var ativo: boolean = true;
  
  // imprimir("Valor de x", x);
  // imprimir("Valor de empresa", empresa);
  // imprimir("Valor de Ativo", ativo);
  
  var somatoria: number = somar(x, y);
  imprimir("Valor da variável x: ", x);
  imprimir("Valor da variável y: ", y);
  imprimir("Soma das variáveis: ", somatoria,);
  
  imprimir("\nValor do objeto x: ", numeros.x);
  imprimir("Valor do objeto y: ", numeros.y);
  imprimir ("Soma do Objeto: ", somarObj(numeros))
  */