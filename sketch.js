let larguraTela = 600;
let comprimentoTela = 800;
let xBolinha = comprimentoTela / 2;
let yBolinha = larguraTela / 2;
let diametroBolinha = 20;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raioBolinha = diametroBolinha/2;
let comprimentoRaquete = 80;
let larguraRaquete = 15;
let xMinhaRaquete = 15;
let yRaquete = 300;
let colidiu = false;

let xRaqueteOponente = comprimentoTela - larguraRaquete - 15;
let yRaqueteOponente = 300

function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background("#ff1493");
  criaBolinha();
  moveBolinha();
  colideBolinha();
  criaRaquete(xMinhaRaquete, yRaquete);
  moveMinhaRaquete();
  colideRaquete();
  criaRaquete(xRaqueteOponente, yRaqueteOponente);
  colisaoRaquete()
}

function criaBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
}

function moveBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colideBolinha(){
  if (xBolinha + raioBolinha > comprimentoTela || xBolinha  - raioBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
 
  if (yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0) {
    velocidadeYBolinha *= -1;
    }
}

function criaRaquete(posicaoX, posicaoY){
  rect(posicaoX, posicaoY, larguraRaquete, comprimentoRaquete);
}

function moveMinhaRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
  yRaqueteOponente = yBolinha - comprimentoRaquete / 2
}

function colideRaquete(){
  if(xBolinha - raioBolinha < xMinhaRaquete + larguraRaquete && yBolinha - raioBolinha< yRaquete + comprimentoRaquete && yBolinha +raioBolinha > yRaquete){
    velocidadeXBolinha *= -1;
  }
}
function colisaoRaquete(){
  colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, larguraRaquete, comprimentoRaquete, xBolinha, yBolinha, diametroBolinha)

if(colidiu){
  velocidadeXBolinha *= -1;
}
}