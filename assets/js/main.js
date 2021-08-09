let canvas = document.getElementById("imbua");
let context = canvas.getContext("2d");
let box = 32;
let imbua = [];
imbua[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

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

function iniciarJogo(){
    criarBG();
    criarImbua();

    let imbuaX = imbua[0].x;
    let imbuaY = imbua[0].y;

    if(direction == "right") imbuaX += box;
    if(direction == "left") imbuaX -= box;
    if(direction == "up") imbuaY -= box;
    if(direction == "down") imbuaY += box;

    imbua.pop();

    let newHead = {
        x: imbuaX,
        y: imbuaY
    }

    imbua.unshift(newHead);
    
}

let jogo = setInterval(iniciarJogo, 100);

