let canvas = document.querySelector("#lienzo");
let ctx = canvas.getContext("2d"); //getContext() retorna un contexto de dibujo en el lienzo, o null si el identificador del contexto no está soportado.


/*====================================

=====================================*/
let jugador = {
    x: 280,
    y: 70,
    width: 10,
    height: 10,
    color: "red"
}

let bloques = [{x: 300, y: 50, width: 400, height: 10, color: "black"},
                {x: 300, y: 90, width: 10, height: 360}, 
                {x: 300, y: 440, width: 400, height: 10}, 
                {x: 690, y: 90, width: 10, height: 360},
                {x: 365, y: 50, width: 10, height: 350},
                {x: 430, y: 100, width: 10, height: 350},
                {x: 495, y: 50, width: 10, height: 350},
                {x: 560, y: 100, width: 10, height: 350},
                {x: 625, y: 50, width: 10, height: 350}]



ctx.fillStyle= jugador.color;
ctx.fillRect(jugador.x, jugador.y, jugador.width, jugador.height);

ctx.fillStyle = bloques[0].color;

for(let i = 0; i < bloques.length; i++){

    ctx.fillRect(bloques[i].x, bloques[i].y, bloques[i].width, bloques[i].height);

}

