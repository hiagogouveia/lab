// console.log("Boas-vindas");
// let nome = ("Hiago");
// console.log(`Olá ${nome}`);
// linguagemDeProgramacaoPreferida = prompt("Qual é a linguagem de programação que você mais gosta?");
// console.log(`sua linguagem preferida é ${linguagemDeProgramacaoPreferida}`);

// let valor1 = 4;
// let valor2 = 9;

// resultado = valor1 + valor2;
// console.log(`A soma dos valores é: ${resultado}`);

// idade = prompt("Qual a sua idade?");
// let palavraAnos = idade > 1 ? 'anos, é maior de idade' : 'ano, é menor de idade'

// if (idade >= 18){
//     console.log(`Você tem ${idade} ${palavraAnos}`)
// }else{
//     console.log(`Você tem ${idade} ${palavraAnos}`)
// }

//=============
// numero = prompt("Coloque qualquer número");

// let palavraPositivoOuNegativo = numero < 0 ? 'número negativo' : 'número positivo'

// if (numero == 0){
//     console.log(`Você escolheuo número 0`);
// }else{
//     console.log(`Você escolheu um ${palavraPositivoOuNegativo}`);
// }
//================

numero = parseInt(Math.random() * 100) -50;
console.log(`${numero}`);

let palavraPositivoOuNegativo = numero < 0 ? 'número negativo' : 'número positivo'

if (numero == 0){
    console.log(`Você escolheuo número 0`);
}else{
    console.log(`Você escolheu um ${palavraPositivoOuNegativo}`);
}