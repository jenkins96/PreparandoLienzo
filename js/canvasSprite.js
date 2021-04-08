let frame = window.requestAnimationFrame || 
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame;
let canvas = document.querySelector("#lienzo");
let ctx = canvas.getContext("2d"); //getContext() retorna un contexto de dibujo en el lienzo, o null si el identificador del contexto no está soportado.

let numero = 0;
let ubicacionX = 0;
let animacion;

// Dibujar SPRITE
let sprite = new Image();
sprite.src = "img/opcion1.png";
/*sprite.onload = function(){
    ctx.drawImage(sprite, 0, 0, 100, 100, 0, 100, 100, 100) //(imagen, ubicacionX, ubicacionY, recorteX, recorteY, x1, y1, x2, y2)
}*/

tiempo = () => {
    
    if(numero >= 600){
        numero = 0;
    } else{

        numero +=20
    }

    for(let i =0; i <= numero; i+=100 ){
     if(numero >= i){ubicacionX = i}   
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.drawImage(sprite, ubicacionX, 0, 100, 100, 0, 100, 100, 100)

    animacion = frame(tiempo);
}


tiempo();

setTimeout(function(){
    cancelAnimationFrame(animacion);
}, 5000)
