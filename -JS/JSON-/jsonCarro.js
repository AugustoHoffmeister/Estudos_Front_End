/* JSON
 
 JSON siginifica JavaScript Object Notation que traduzido pro portugues fica algo como notação de objeto Javascript.

 JSON é uma forma de converter objeto em texto e texto em objeto.

 É usado para transmitir daods entre sistemas de forma simples, pois texto é lido por praticamente todas as linguagens de programação.

 JSON no Javascript utiliza 2 metodos:
 - JSON.parse() -> Converte texto em objetos.
 - JSON.stringify() -> Converte objeto em texto.
 */

 // objeto carro
 const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.0","1.6","2.0"],
    ano: 2001
}
// objeto -> texto
let texto = JSON.stringify(carro);

// colocou o texto no nosso html
 document.getElementById('area').innerHTML = texto;

 // texto -> objeto
let obj = JSON.parse(texto);

// pegamos um valor deste objeto
 console.log(obj.motor[1]);