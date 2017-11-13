
var Dama = {
    VAZIO: 0,
    PRETO: 1,
    VERMELHO: 2,
    LINHAS: 8,
    COLUNAS: 8,
    tabuleiro: document.getElementById("tabuleiro"),
    contextoTabuleiro: tabuleiro.getContext("2d")
}

function criarTabuleiro() {
    var tabuleiroInicial = [
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1]
    ];

    for(var i = 0; i<Dama.LINHAS; i++){
        for(var j = 0; j<Dama.COLUNAS; j++){

            if(tabuleiroInicial[i][j] === 1  ){
                Dama.contextoTabuleiro.fillStyle = "black";

            }else{
                Dama.contextoTabuleiro.fillStyle = "white";

            }
            Dama.contextoTabuleiro.fillRect(70*i, 70*j, 70, 70);
        }
    }
}

function criarPecas(){

}