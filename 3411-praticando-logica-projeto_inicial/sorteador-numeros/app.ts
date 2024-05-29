
function sortear(): void {
    let quantidade: number = parseInt((document.getElementById('quantidade') as HTMLInputElement).value);
    let de: number = parseInt((document.getElementById('de') as HTMLInputElement).value);
    let ate: number = parseInt((document.getElementById('ate') as HTMLInputElement).value);
    
    // alert(`O número aleatório foi ${numero}`);
    
    let sorteados: number[] = [];
    let numero: number;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate)
        sorteados.push(numero);
    }
    alert(`O número aleatório foi ${sorteados}`);

}
  

function obterNumeroAleatorio(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}