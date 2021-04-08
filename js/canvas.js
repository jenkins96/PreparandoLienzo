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




 