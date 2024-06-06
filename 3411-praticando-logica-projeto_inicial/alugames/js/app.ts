function alterarStatus(id: string): void {
    let gameClicado: HTMLElement = document.getElementById(`game-${id}`);
    let imagem: HTMLImageElement = gameClicado.querySelector('.dashboard__item__img');
    let botao: HTMLButtonElement = gameClicado.querySelector('.dashboard__item__button');
    

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        alert("para devolver o jogo, clique em OK");
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = "Alugar";
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver";
    }

}
