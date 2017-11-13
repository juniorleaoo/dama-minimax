var VAZIO = 0;
var PRETO = 1;
var PRETO_REI = 1.1;
var VERMELHO = 2;
var VERMELHO_REI = 2.2;
var LINHAS = 8;
var COLUNAS = 8;
var tabuleiro = document.getElementById("tabuleiro");
var contextoTabuleiro = tabuleiro.getContext("2d");

function iniciarJogo(){
    criarTabuleiro();
    criarPecas();
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

    for(var i = 0; i<LINHAS; i++){
        for(var j = 0; j<COLUNAS; j++){

            if(tabuleiroInicial[i][j] === 1  ){
                contextoTabuleiro.fillStyle = "black";

            }else{
                contextoTabuleiro.fillStyle = "white";

            }
            contextoTabuleiro.fillRect(70*i, 70*j, 70, 70);
        }
    }
}

function criarPecas(){

}