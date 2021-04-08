let canvas = document.querySelector("#lienzo");
let ctx = canvas.getContext("2d"); //getContext() retorna un contexto de dibujo en el lienzo, o null si el identificador del contexto no está soportado.

// SIEMPRE ES LEIDO COMO MAPA DE BITS 
let imagenJPG = new Image();
imagenJPG.src = "img/ejemploJPG.jpg";

imagenJPG.onload = function(){
    
    ctx.drawImage(imagenJPG, 100, 100, imagenJPG.naturalWidth/2, imagenJPG.naturalHeight/2); // (variable, x1, y1, x2, y2)
}

let imagenPNG = new Image();
imagenPNG.src = "img/ejemploPNG.png";

imagenPNG.onload = function(){
    
    ctx.drawImage(imagenPNG, 400, 100, imagenPNG.naturalWidth/2, imagenPNG.naturalHeight/2); // (variable, x1, y1, x2, y2)
}

let imagenSVG = new Image();
// Pierde sus propiedades de svg
imagenSVG.src = "img/ejemploSVG.svg";

imagenSVG.onload = function(){
    
    ctx.drawImage(imagenSVG, 700, 100, imagenSVG.naturalWidth/2, imagenPNG.naturalHeight/2); // (variable, x1, y1, x2, y2)
}