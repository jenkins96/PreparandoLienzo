let canvas = document.querySelector("#lienzo");
let ctx = canvas.getContext("2d"); //getContext() retorna un contexto de dibujo en el lienzo, o null si el identificador del contexto no está soportado.


 

/*=====================================================

    CUADRADOS
======================================================*/

// Relleno
ctx.fillStyle = "#613F75";
ctx.fillRect(10, 10, 100, 100); // (x1, y1, x2, y2)

// Contorno
ctx.lineWidth = 5;
ctx.strokeStyle = "rgba(113, 180, 141, 1)";
ctx.rect(10, 10, 100, 100);
ctx.stroke();

/*=====================================================

    CIRCULOS
======================================================*/
ctx.beginPath();
ctx.arc(300, 300, 80, 0, 2 * Math.PI); //(x1, y1, r, startAngle, endAngle)

// Relleno Circulo
ctx.fillStyle = "#404E7C";
ctx.fill();

// Contorno Circulo
ctx.lineWidth = 5;
ctx.strokeStyle = "#FE5E41";
ctx.stroke();


/*=====================================================

    LINEAS
======================================================*/
ctx.beginPath();
ctx.moveTo(0, 0); //(x1, y1)
ctx.lineTo(200, 200); //(x2, y2)
ctx.lineTo(400, 200);
ctx.lineTo(600, 400);
ctx.lineTo(800, 200);
ctx.lineTo(1000, 200);
ctx.lineTo(1000, 0);


// Contorno Linea
ctx.lineWidth = 5;
ctx.stroke();

// Relleno Linea
ctx.fillStyle = "rgba(216, 241, 160, .6)";
ctx.fill();


/*=====================================================

    CURVAS
======================================================*/
ctx.beginPath();
ctx.moveTo(0, 500);

ctx.bezierCurveTo(200, 300, 400, 400, 500, 500); //(cpx1, cpy1, cpx2, cpy2, x2, y2 )

//Contono de la curva
ctx.lineWidth = 5;
ctx.strokeStyle = "rgba(200, 29, 37, 1)";
ctx.stroke();

// Relleno de la curva
ctx.fillStyle = "rgba(216, 241, 160, .6)";
ctx.fill()


/*=====================================================

    DEGRADADOS
======================================================*/
//ctx.createLinearGradient(x1, y1, x2, y2) ;
const grd = ctx.createLinearGradient(0, 300, 100, 400);
grd.addColorStop(0, "red");
grd.addColorStop(1, "yellow");
ctx.fillStyle = grd;
ctx.fillRect(0, 300, 100, 100);

//ctx.createRadialGradient(x1, y1,r1, x2, y2, r2) ;
let grd2 = ctx.createRadialGradient(890, 350, 5, 900, 350, 120);
grd2.addColorStop(0, "white");
grd2.addColorStop(1, "black");
ctx.beginPath();
ctx.arc(900, 400, 100, 0, 7);
ctx.fillStyle = grd2;
ctx.fill();

