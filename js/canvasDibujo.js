let canvas = document.querySelector("#lienzo");
let ctx = canvas.getContext("2d"); //getContext() retorna un contexto de dibujo en el lienzo, o null si el identificador del contexto no está soportado.
let alfa = 1;

// Cielo
let grd = ctx.createLinearGradient(0, 0, 0, 500);
grd.addColorStop(0, `rgba(232, 72, 85, ${alfa})`);
grd.addColorStop(1, "#FF9B71");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 500);


// Oceano
let grd2 = ctx.createLinearGradient(0, 400, 0, 500);
grd2.addColorStop(0, `rgba(30, 150, 252, ${alfa})`);
grd2.addColorStop(1, "white");
ctx.fillStyle = grd2;
ctx.fillRect(0, 400, 1000, 100);

// Montaña 1
ctx.beginPath();
ctx.fillStyle = `rgba(29, 52, 97, ${alfa})`;
ctx.moveTo(0, 400);
ctx.lineTo(200, 100);
ctx.lineTo(400, 400);
ctx.fill();

// Montaña 2
ctx.beginPath();
ctx.fillStyle = `rgba(30, 150, 252, ${alfa})`;
ctx.moveTo(200, 400);
ctx.lineTo(400, 100);
ctx.lineTo(600, 400);
ctx.fill();

// Montaña 3
ctx.beginPath();
ctx.fillStyle = `rgba(29, 52, 97, ${alfa})`;
ctx.moveTo(400, 400);
ctx.lineTo(600, 100);
ctx.lineTo(800, 400);
ctx.fill();

// Montaña 4
ctx.beginPath();
ctx.fillStyle = `rgba(30, 150, 252, ${alfa})`;
ctx.moveTo(600, 400);
ctx.lineTo(800, 100);
ctx.lineTo(1000, 400);
ctx.fill();


// Nieve Montaña 1
ctx.beginPath();
ctx.fillStyle = `rgba(255, 255, 255, ${alfa})`;
ctx.moveTo(133, 200);
ctx.lineTo(200, 100);
ctx.lineTo(200, 300);
ctx.fill();
// Nieve Montaña 1 Espejo
ctx.beginPath();
ctx.fillStyle = `rgba(210, 210, 255, ${alfa})`;
ctx.moveTo(200, 300);
ctx.lineTo(200, 100);
ctx.lineTo(267, 200);
ctx.fill();


// Nieve Montaña 2
ctx.beginPath();
ctx.fillStyle = `rgba(255, 255, 255, ${alfa})`;
ctx.moveTo(333, 200);
ctx.lineTo(400, 100);
ctx.lineTo(400, 300);
ctx.fill();
// Nieve Montaña 2 Espejo
ctx.beginPath();
ctx.fillStyle = `rgba(210, 210, 255, ${alfa})`;
ctx.moveTo(400, 300);
ctx.lineTo(400, 100);
ctx.lineTo(467, 200);
ctx.fill();


// Nieve Montaña 3
ctx.beginPath();
ctx.fillStyle = `rgba(255, 255, 255, ${alfa})`;
ctx.moveTo(533, 200);
ctx.lineTo(600, 100);
ctx.lineTo(600, 300);
ctx.fill();
// Nieve Montaña 3 Espejo
ctx.beginPath();
ctx.fillStyle = `rgba(210, 210, 255, ${alfa})`;
ctx.moveTo(600, 300);
ctx.lineTo(600, 100);
ctx.lineTo(667, 200);
ctx.fill();

// Nieve Montaña 4
ctx.beginPath();
ctx.fillStyle = `rgba(255, 255, 255, ${alfa})`;
ctx.moveTo(733, 200);
ctx.lineTo(800, 100);
ctx.lineTo(800, 300);
ctx.fill();
// Nieve Montaña 4 Espejo
ctx.beginPath();
ctx.fillStyle = `rgba(210, 210, 255, ${alfa})`;
ctx.moveTo(800, 300);
ctx.lineTo(800, 100);
ctx.lineTo(867, 200);
ctx.fill();


// Monte 1
ctx.beginPath();
ctx.fillStyle = `rgba(113, 91, 100, ${alfa})`;
ctx.moveTo(0, 400);
ctx.lineTo(200, 300);
ctx.lineTo(200, 450);
ctx.fill();
// Monte 1 Espejo
ctx.beginPath();
ctx.fillStyle = `rgba(109, 61, 20, ${alfa})`;
ctx.moveTo(200, 450);
ctx.lineTo(200, 300);
ctx.lineTo(400, 400);
ctx.fill();

// Monte 2
ctx.beginPath();
ctx.fillStyle = `rgba(113, 91, 100, ${alfa})`;
ctx.moveTo(600, 400);
ctx.lineTo(800, 300);
ctx.lineTo(800, 450);
ctx.fill();
// Monte 2 Espejo
ctx.beginPath();
ctx.fillStyle = `rgba(109, 61, 20, ${alfa})`;
ctx.moveTo(800, 450);
ctx.lineTo(800, 300);
ctx.lineTo(1000, 400);
ctx.fill();


// Arbol 1
ctx.fillStyle = `rgba(109, 61, 20, ${alfa})`;
ctx.fillRect(100, 200, 20, 150);

ctx.beginPath()
ctx.fillStyle = `rgba(27, 153, 139, ${alfa})`;
ctx.arc(140, 180, 40, 0, 2*Math.PI);
ctx.fill();

ctx.beginPath()
ctx.fillStyle = `rgba(132, 195, 24, ${alfa})`;
ctx.arc(80, 190, 30, 0, 2*Math.PI);
ctx.fill();

ctx.beginPath()
ctx.fillStyle = `rgba(43, 151, 32, ${alfa})`;
ctx.arc(110, 200, 50, 0, 2*Math.PI);
ctx.fill();

ctx.beginPath()
ctx.fillStyle = `rgba(16, 73, 17, ${alfa})`;
ctx.arc(120, 230, 30, 0, 2*Math.PI);
ctx.fill();
 
// Arbol 2
ctx.fillStyle = `rgba(109, 61, 20, ${alfa})`;
ctx.fillRect(900, 200, 20, 150);


ctx.beginPath()
ctx.fillStyle = `rgba(16, 73, 17, ${alfa})`;
ctx.moveTo(850, 300);
ctx.lineTo(910, 200);
ctx.lineTo(970, 300);
ctx.fill();

ctx.beginPath()
ctx.fillStyle = `rgba(132, 195, 24, ${alfa})`;
ctx.moveTo(850, 250);
ctx.lineTo(910, 150);
ctx.lineTo(970, 250);
ctx.fill();

ctx.beginPath()
ctx.fillStyle = `rgba(43, 151, 32, ${alfa})`; 
ctx.moveTo(850, 200);
ctx.lineTo(910, 100);
ctx.lineTo(970, 200);
ctx.fill();

// Tierra 1
ctx.beginPath();
ctx.fillStyle = `rgba(132, 195, 24, ${alfa})`;
ctx.arc(0, 500, 250, 3.15, 2*Math.PI);
ctx.fill();

//Lineas Curvas
ctx.beginPath();
ctx.fillStyle =`rgba(0, 100, 10, ${alfa})`;
ctx.moveTo(0, 500);
ctx.bezierCurveTo(0, 470, 50, 470, 50, 500);
ctx.bezierCurveTo(50, 470, 100, 470, 100, 500);
ctx.bezierCurveTo(100, 470, 150, 470, 150, 500);
ctx.bezierCurveTo(150, 470, 200, 470, 200, 500);
ctx.bezierCurveTo(200, 470, 250, 470, 250, 500);
ctx.fill();


// Tierra 2
ctx.beginPath();
ctx.fillStyle = `rgba(16, 73, 17, ${alfa})`;
ctx.arc(900, 600, 250, 3.15, 2*Math.PI);
ctx.fill();
 
 