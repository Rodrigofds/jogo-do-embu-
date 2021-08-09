let canvas = document.getElementById("imbua");
let context = canvas.getContext("2d");
let box = 32;
let imbua = [];
imbua[0] = {
    x: 8 * box,
    y: 8 * box
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

criarBG();
criarImbua();