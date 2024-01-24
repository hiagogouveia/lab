alert("Boas vindas a jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100) + 1;
console.log(numeroSecreto)
let numeroEscolhido;
let tentativas = 1;

while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = prompt("Escolha um número entre 1 e 100");
    if (numeroEscolhido == numeroSecreto) {
        break
    } else{
        if (numeroEscolhido > numeroSecreto){
            alert(`O número Secreto é menor que ${numeroEscolhido}`);
        }
        else {
            alert(`o número secreto é maior que o ${numeroEscolhido}`)
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
console.log(`Você descobriu o número Secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)
