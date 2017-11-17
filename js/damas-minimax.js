var VAZIO = 0;
var PRETO = 1;
var PRETO_REI = 1.1;
var VERMELHO = 2;
var VERMELHO_REI = 2.2;
var BRANCO = 3;
var LINHAS = 8;
var COLUNAS = 8;
var tabuleiro = document.getElementById("tabuleiro");
var contextoTabuleiro = tabuleiro.getContext("2d");
var pecas = new Array();
var celulas = new Array();

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
          contextoTabuleiro.beginPath();

            if(tabuleiroInicial[i][j] === 1  ){
                contextoTabuleiro.fillStyle = "black";

            }else{
                contextoTabuleiro.fillStyle = "white";

            }
            contextoTabuleiro.fillRect(70*i, 70*j, 70, 70);
            contextoTabuleiro.fill();
        }
    }
}

function criarPecas(){
  var tabuleiroPecas = [
        [2, 0, 2, 0, 2, 0, 2, 0],
        [0, 2, 0, 2, 0, 2, 0, 2],
        [2, 0, 2, 0, 2, 0, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1]
    ];

    var coordenadaX = 35;
    var coordenadaY = 35;
    pecas = new Array();
    celulas = new Array();

    for(var i = 0; i<LINHAS; i++){
      for(var j = 0; j<COLUNAS; j++){
        contextoTabuleiro.beginPath();
        var peca = {}
        if(tabuleiroPecas[i][j] === VERMELHO){
          contextoTabuleiro.arc(coordenadaX, coordenadaY, 30, 0, 2*Math.PI);
          contextoTabuleiro.fillStyle = "red";
          
          peca = {x:coordenadaX , y:coordenadaY , cor:VERMELHO};
          pecas.push(peca);
          celulas.push({x:coordenadaX , y:coordenadaY , cor:VERMELHO, peca:peca});

        }else if(tabuleiroPecas[i][j] === PRETO){
          contextoTabuleiro.arc(coordenadaX, coordenadaY, 30, 0, 2*Math.PI);
          contextoTabuleiro.fillStyle = "white";
          
          peca = {x:coordenadaX , y:coordenadaY , cor:PRETO}
          pecas.push(peca);
          celulas.push({x:coordenadaX , y:coordenadaY , cor:PRETO, peca:peca});

        }else{
          celulas.push({x:coordenadaX , y:coordenadaY , cor:BRANCO, peca:{}});

        }
        coordenadaX += 70;
        contextoTabuleiro.fill();

      }
      coordenadaY += 70;
      coordenadaX = 35;
    }
}

tabuleiro.addEventListener("click", function(event){
  var x = event.offsetX;
  var y = event.offsetY;
  var quadranteX = parseInt( (x/70)|0 );
  var quadranteY = parseInt( (y/70)|0 );

  //for(var i=0; i<LINHAS*COLUNAS; i++){
    //  if(x < pecas[j].x && y 
  //}


});
