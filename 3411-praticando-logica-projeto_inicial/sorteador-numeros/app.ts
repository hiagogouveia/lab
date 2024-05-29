
function sortear(): void {
    let quantidade: number = parseInt((document.getElementById('quantidade') as HTMLInputElement).value);
    let de: number = parseInt((document.getElementById('de') as HTMLInputElement).value);
    let ate: number = parseInt((document.getElementById('ate') as HTMLInputElement).value);
    let resultado = (document.getElementById("resultado") as HTMLAnchorElement);
    
    // alert(`O número aleatório foi ${numero}`);
    
    let sorteados: number[] = [];
    let numero: number;
    let intervaloDaListaDenumeros: number = ate - de + 1;

    if( !quantidade || !de || !ate) {
        alert("por favor, insira dados nos campos");
    }

    if(de >= ate){
        alert(`O número inicial não pode ser maior ou igual ao valor do último número`);
        reiniciar();
        return;
    } 
    if (quantidade > intervaloDaListaDenumeros ) {
        alert(`Você quer sortear ${quantidade} números, porém a lista tem apenas ${intervaloDaListaDenumeros}, por favor, coloque um intervalo maior`);
        reiniciar();
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate)

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`; //copiei essa label do index.html
    alterarStatusBotaoReiniciar();
}

function reiniciar(){
    alterarStatusBotaoReiniciar();
    (document.getElementById('quantidade') as HTMLInputElement).value = '';
    (document.getElementById('de') as HTMLInputElement).value = '';
    (document.getElementById('ate') as HTMLInputElement).value = '';
    (document.getElementById('resultado') as HTMLInputElement).innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora </label>';
}
  
function obterNumeroAleatorio(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar(){
    let botao = (document.getElementById("btn-reiniciar") as HTMLAnchorElement);
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.add('container__botao');
        botao.classList.remove('container__botao-desabilitado');
    }
}
