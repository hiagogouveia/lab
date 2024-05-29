"use strict";
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let resultado = document.getElementById("resultado");
    // alert(`O número aleatório foi ${numero}`);
    let sorteados = [];
    let numero;
    let intervaloDaListaDenumeros = ate - de + 1;
    if (!quantidade || !de || !ate) {
        alert("por favor, insira dados nos campos");
    }
    if (de >= ate) {
        alert(`O número inicial não pode ser maior ou igual ao valor do último número`);
        reiniciar();
        return;
    }
    if (quantidade > intervaloDaListaDenumeros) {
        alert(`Você quer sortear ${quantidade} números, porém a lista tem apenas ${intervaloDaListaDenumeros}, por favor, coloque um intervalo maior`);
        reiniciar();
        return;
    }
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`; //copiei essa label do index.html
    alterarStatusBotaoReiniciar();
}
function reiniciar() {
    alterarStatusBotaoReiniciar();
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora </label>';
}
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function alterarStatusBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else {
        botao.classList.add('container__botao');
        botao.classList.remove('container__botao-desabilitado');
    }
}
