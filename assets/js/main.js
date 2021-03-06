let canvas = document.getElementById("imbua");
let context = canvas.getContext("2d");
let box = 32;
let imbua = [];
imbua[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let comida = {
    x: Math.floor(Math.random() * 15 + 1)* box,
    y: Math.floor(Math.random() * 15 + 1)* box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarImbua(){
    for(i = 0; i < imbua.length; i++){
        context.fillStyle = "brown";
        context.fillRect(imbua[i].x, imbua[i].y, box, box);
    }
}

function criarComida(){
    context.fillStyle = "red";
    context.fillRect(comida.x, comida.y, box, box);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
    if(imbua[0].x > 15 * box && direction == "right") imbua[0].x = 0;
    if(imbua[0].x < 0 && direction == "left") imbua[0].x = 16 * box;
    if(imbua[0].y > 15 * box && direction == "down") imbua[0].y = 0;
    if(imbua[0].y < 0 && direction == "up") imbua[0].y = 16 * box;

    for(i = 1; i < imbua.length; i++){
        if(imbua[0].x == imbua[i].x && imbua[0].y == imbua[i].y){
            clearInterval(jogo);
            alert('Fim de Jogo!');
        }
    }

    criarBG();
    criarImbua();
    criarComida();

    let imbuaX = imbua[0].x;
    let imbuaY = imbua[0].y;

    if(direction == "right") imbuaX += box;
    if(direction == "left") imbuaX -= box;
    if(direction == "up") imbuaY -= box;
    if(direction == "down") imbuaY += box;

    if(imbuaX != comida.x || imbuaY != comida.y){
        imbua.pop();
    }else{
        comida.x = Math.floor(Math.random() * 15 + 1)* box;
        comida.y = Math.floor(Math.random() * 15 + 1)* box;
    }

    let newHead = {
        x: imbuaX,
        y: imbuaY
    }

    imbua.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);

