let canvas = document.getElementById("snake"); 
let context = canvas.getContext("2d"); //desenha o que acontecerá dentro do canvas
let box = 32; // tamanho de cada quadrado
let snake = []; //arrray da cobra
snake[0] = { //array
    x: 8 * box,
    y: 8 *box
}
let direction = "rigth";
let food = { //criar a comida em varios lugares
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box

}


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

function drawFood() { //criar comida
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
    
}

//comando para reconhecer movimentos do teclado
document.addEventListener('keydown', update);

function update(event) { //evitar que a cobra nao bata nela mesma
    if (event.keyCode == 37 && direction != "rigth") direction = "left"; //se a direção não for right ela vai para left
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "rigth";
    if (event.keyCode == 40 && direction != "up") direction = "down";
     {
        
        
    }
    
}


function iniciarJogo() {

    if(snake[0].x > 15 * box && direction == "rigth") snake[0].x = 0; //comando para ela não ultrapassar tela
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0] .y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y =16 * box;

    for (let i = 1; i < snake.length; i++){
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Fim de Jogo!!!');
            
        }
1       
    }


    criarBG(); //chamr funçao
    criarCobra(); 
    drawFood();
   let snakeX = snake[0].x; //posicao x, y movimentos cobra
   let snakeY = snake[0].y; 
   //condicionais para posição dos quadrados de movimento
   if(direction == "rigth") snakeX += box;
   if(direction == "left") snakeX-= box;
   if(direction == "up") snakeY -= box;
   if(direction == "down") snakeY += box;

   if (snakeX != food.x || snakeY != food.y) {
       snake.pop(); //reiniciar novamente quando ela comer
   }
       else {food.x = Math.floor(Math.random() * 15 + 1) * box; //recebe posição aleatoria
            food.y = Math.floor(Math.random() * 15 + 1) * box; // recebe posicao aleatoria

       }

   //snake.pop();

   let newhead = { //criar uma nova cabeça, onde acrecenta um novo elemento a frente.
       x: snakeX,
       y: snakeY
   }

   snake.unshift(newhead);
   

}

let jogo = setInterval(iniciarJogo, 100); //intervalo de 100 ml/s para reiniciar jogo sem travar

