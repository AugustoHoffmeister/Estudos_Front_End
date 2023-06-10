/*Manipulação de datas no JS*/
//-------------------------------------------------------------------------------
//comando base
let data = new Date();
// console.log(data);
//-------------------------------------------------------------------------------
//ano atual 4 digitos
let ano = data.getFullYear();
// console.log(ano);
//-------------------------------------------------------------------------------
//mês atual - 0 sendo Janeiro e 11 Dezembro
let mes = data.getMonth();
// console.log(mes);
//mês por escrito
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro","Dezembro"];
let mesEscrito = meses[data.getMonth()];
// console.log(mesEscrito);
//-------------------------------------------------------------------------------
//dia do mês - 1 ao 31
let diaMes = data.getDate();
//-------------------------------------------------------------------------------
//dia da semana - 0 ao 6
let diaSemana = data.getDay();
//dia por escrito
const diasDaSemana = ["Domingo", "Segunda", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
// console.log(diaSemanaEscrito);
//-------------------------------------------------------------------------------
//hora - 0 ao 23
let hora = data.getHours();
//  console.log(hora);
//-------------------------------------------------------------------------------
//seguntos - 0 ao 59
let segundos = data.getMinutes();
// console.log(segundos);
//-------------------------------------------------------------------------------
//milisegundos - 0 ao 999
let milisegundos = data.getMilliseconds();
// console.log(milisegundos);
//-------------------------------------------------------------------------------
//data padão brasileiro - dia/mês/ano
let dataBr = data.toLocaleDateString('pt-br',);
// console.log(dataBr);
//-------------------------------------------------------------------------------
//hora padão brasileiro - hora:minutos:segundos
let horaBr = data.toLocaleString('pt-br', {timeStyle: 'medium'});
// console.log(horaBr);
//-------------------------------------------------------------------------------
//comparar datas. Ex: Vencimentos
var hoje = new Date();
var vencimento = new Date(2023, 4, 15);
if (hoje > vencimento) {
    // console.log("Conta Vencida!");
}else {
    // console.log("Conta a pagar!");
}
//-------------------------------------------------------------------------------
//diferença entre datas. Ex: quanto falta para o final do ano!
var dataHoje = new Date();
var dataFinal = new Date(2023, 11, 31);
var diferencaTempo = dataFinal.getTime() - dataHoje.getTime();
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log("Faltam " + diferencaDias + " dias para o ano novo!");
//-------------------------------------------------------------------------------