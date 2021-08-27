let canvas = document.getElementById("snake"); 
let context = canvas.getContext("2d"); //desenha o que acontecerá dentro do canvas
let box = 32; // tamanho de cada quadrado
let snake = []; //arrray da cobra
snake[0] = { //array
    x: 8 * box,
    y: 8 *box
}
let direction = "rigth";


function criarBG() {
    context.fillStyle = "lightgreen"; //cor 
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retangulo do jogo
    
}

function criarCobra() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
        
    }
}

function iniciarJogo() {
    criarBG();
    criarCobra();
   let cobrax = snake[0].x; //posicao x, y movimentos cobra
   let cobray = snake[0].y; 
   //condicionais para posição dos quadrados de movimento
   if(direction == "rigth") snakex += box;
   if(direction == "left") snakex -= box;
   if(direction == "up") snakey -= box;
   if(direction == "down") snakey += box;

   snake.pop();

   let newhead = { //criar uma nova cabeça, onde acrecenta um novo elemento a frente.
       x: snakex,
       y: snakey
   }

   snake.unshift(newhead);
   

}

let jogo = setInterval(iniciarJogo, 100); //intervalo de 100 ml/s para reiniciar jogo sem travar

