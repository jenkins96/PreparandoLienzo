/*====================================
ANIMACION REQUEST ANIMATION FRAME
=====================================*/
let frame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

let canvas = document.querySelector("#lienzo");
let ctx = canvas.getContext("2d"); //getContext() retorna un contexto de dibujo en el lienzo, o null si el identificador del contexto no está soportado.


/*====================================
PROPIEDADES DEL OBJETO JUGADOR
=====================================*/
let jugador = {
    x: 280,
    y: 55,
    width: 10,
    height: 10,
    color: "red",
    movimientoX: 0,
    movimientoY: 0,
    velocidad: 3,
    x1: null,
    x2: null,
    y1: null,
    y2: null

}

/*====================================
PROPIEDADES DEL OBJETO BLOQUES
=====================================*/

let bloques = [{
        x: 288,
        y: 37.52,
        width: 425,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null,
        color: "black"
    },
    {
        x: 703.65,
        y: 37.521,
        width: 9.35,
        height: 424.999,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 288,
        y: 453.17,
        width: 425,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 288.001,
        y: 84.82,
        width: 9.35,
        height: 303.749,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 288.001,
        y: 418.32,
        width: 9.35,
        height: 34.851,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 297.351,
        y: 418.32,
        width: 35.955,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 323.956,
        y: 343.144,
        width: 9.35,
        height: 75.175,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 362.467,
        y: 84.82,
        width: 9.35,
        height: 113.802,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 362.467,
        y: 312.723,
        width: 9.35,
        height: 112.884,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 297.351,
        y: 303.373,
        width: 110.283,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 448.769,
        y: 303.373,
        width: 27.511,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 478.108,
        y: 341.226,
        width: 46.21,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 402.559,
        y: 341.226,
        width: 46.21,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 629.481,
        y: 341.226,
        width: 81.701,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 629.108,
        y: 264.949,
        width: 46.21,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 629.108,
        y: 189.688,
        width: 46.21,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 590.149,
        y: 228.647,
        width: 46.21,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 514.89,
        y: 113.543,
        width: 188.761,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 590.785,
        y: 75.47,
        width: 83.649,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 486.801,
        y: 151.615,
        width: 179.167,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 447.844,
        y: 75.47,
        width: 72.994,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 362.467,
        y: 75.47,
        width: 46.04,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 288.001,
        y: 75.47,
        width: 46.04,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 297.351,
        y: 151.616,
        width: 36.691,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 325.188,
        y: 114.43,
        width: 37.279,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 324.303,
        y: 189.272,
        width: 38.165,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 371.817,
        y: 379.074,
        width: 69.098,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 487.125,
        y: 379.074,
        width: 64.46,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 439.42,
        y: 303.373,
        width: 9.35,
        height: 37.852,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 440.915,
        y: 379.074,
        width: 9.35,
        height: 36.86,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 551.584,
        y: 191.088,
        width: 9.35,
        height: 224.847,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 477.775,
        y: 379.074,
        width: 9.35,
        height: 36.86,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 400.24,
        y: 414.932,
        width: 9.35,
        height: 38.238,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 513.794,
        y: 414.932,
        width: 9.35,
        height: 38.238,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 628.154,
        y: 389.328,
        width: 9.35,
        height: 71.814,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 666.466,
        y: 350.575,
        width: 9.35,
        height: 74.56,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 514.969,
        y: 160.994,
        width: 9.35,
        height: 180.232,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 590.149,
        y: 228.647,
        width: 9.35,
        height: 46.21,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 629.108,
        y: 189.688,
        width: 9.35,
        height: 48.362,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 665.969,
        y: 151.615,
        width: 9.35,
        height: 38.073,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 665.969,
        y: 228.952,
        width: 9.35,
        height: 83.217,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 476.28,
        y: 200.437,
        width: 9.35,
        height: 112.285,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 437.101,
        y: 152.833,
        width: 9.35,
        height: 114.681,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 400.63,
        y: 124.697,
        width: 9.35,
        height: 112.025,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 591.294,
        y: 304.517,
        width: 9.35,
        height: 75.462,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 600.644,
        y: 304.517,
        width: 37.814,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 560.934,
        y: 265.507,
        width: 29.215,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 560.934,
        y: 191.088,
        width: 36.861,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 446.45,
        y: 191.088,
        width: 39.18,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 591.294,
        y: 379.978,
        width: 46.21,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 551.584,
        y: 415.934,
        width: 46.21,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 440.915,
        y: 415.934,
        width: 46.21,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 590.785,
        y: 46.871,
        width: 9.35,
        height: 28.599,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 552.601,
        y: 75.79,
        width: 9.35,
        height: 37.753,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 399.158,
        y: 46.871,
        width: 9.35,
        height: 28.599,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 438.48,
        y: 75.47,
        width: 9.35,
        height: 39.878,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 477.452,
        y: 84.82,
        width: 9.35,
        height: 76.174,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 629.108,
        y: 274.298,
        width: 9.35,
        height: 30.218,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 398.284,
        y: 276.864,
        width: 9.35,
        height: 26.51,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 325.237,
        y: 228.501,
        width: 9.35,
        height: 48.363,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 325.237,
        y: 228.501,
        width: 83.818,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 325.237,
        y: 267.514,
        width: 45.902,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 398.284,
        y: 267.514,
        width: 48.167,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    },
    {
        x: 400.63,
        y: 115.348,
        width: 47.2,
        height: 9.35,
        x1: null,
        x2: null,
        y1: null,
        y2: null
    }
];

/*====================================
PROPIEDADES DEL OBJETO DATOS
=====================================*/
let datos = {
    left: false,
    right: false,
    up: false,
    down: false
}
/*====================================
METODOS DEL OBJETO JUEGO
=====================================*/
let juego = {

    teclado() {

        document.addEventListener("keydown", juego.oprimir);
        document.addEventListener("keyup", juego.soltar);

    },
    oprimir(key) {

        key.preventDefault();

        switch (key.keyCode) {
            case 37:
                datos.left = true
                break;
            case 38:
                datos.up = true
                break;
            case 39:
                datos.right = true
                break;
            case 40:
                datos.down = true
                break;
        }

    },
    soltar(key) {
        key.preventDefault();

        switch (key.keyCode) {
            case 37:
                datos.left = false
                break;
            case 38:
                datos.up = false
                break;
            case 39:
                datos.right = false
                break;
            case 40:
                datos.down = false
                break;
        }

    },

    tiempo() {

        /*====================================
         MOVIMIENTO HORIZONTAL DEL JUGADOR
         =====================================*/
        jugador.x += jugador.movimientoX;

        if (datos.left) {
            jugador.movimientoX = -jugador.velocidad;
            jugador.movimientoY = 0;
        }
        if (datos.right) {
            jugador.movimientoX = jugador.velocidad;
            jugador.movimientoY = 0;
        }
        if (!datos.left && !datos.right) {
            jugador.movimientoX = 0;
        }
        /*====================================
        MOVIMIENTO VERTICAL DEL JUGADOR
        =====================================*/
        jugador.y += jugador.movimientoY;

        if (datos.up) {
            jugador.movimientoY = -jugador.velocidad;
            jugador.movimientoX = 0;
        }
        if (datos.down) {
            jugador.movimientoY = jugador.velocidad;
            jugador.movimientoX = 0;
        }
        if (!datos.up && !datos.down) {
            jugador.movimientoY = 0;
        }
        /*====================================
        COLISIONES
        =====================================*/

        for (let i = 0; i < bloques.length; i++) {



            jugador.x1 = jugador.x;
            jugador.x2 = jugador.x + jugador.width;
            jugador.y1 = jugador.y;
            jugador.y2 = jugador.y + jugador.height;

            bloques[i].x1 = bloques[i].x;
            bloques[i].x2 = bloques[i].x + bloques[i].width;
            bloques[i].y1 = bloques[i].y;
            bloques[i].y2 = bloques[i].y + bloques[i].height;

            colisiones = () => {

                // Cuando NO existen coliciones de IZQ a DER
                if (jugador.x2 < bloques[i].x1) {
                    return false;
                }
                // Cuando NO existen coliciones de DER a IZQ
                if (jugador.x1 > bloques[i].x2) {
                    return false;
                }
                // Cuando NO existen coliciones de Arriba hacia Abajo
                if (jugador.y2 < bloques[i].y1) {
                    return false;
                }
                // Cuando NO existen coliciones de Abajo hacia Arriba
                if (jugador.y1 > bloques[i].y2) {
                    return false;
                }
                return true;

            }
            colisiones();

            // COLISIONES DE IZQ A DER
            if (colisiones() && jugador.x2 < bloques[i].x1 + jugador.movimientoX) {
                
                jugador.x = 280;
                jugador.y = 55;
                jugador.movimientoX = 0;
            }
            // COLISIONES DE DER A IZQ
            if (colisiones() && jugador.x1 - jugador.movimientoX > bloques[i].x2) {
                
                jugador.x = 280;
                jugador.y = 55;
                jugador.movimientoX = 0;
            }
            // COLISIONES DE ARRIBA HACIA ABAJO
            if (colisiones() && jugador.y2 < bloques[i].y1 + jugador.movimientoY) {
                
                jugador.x = 280;
                jugador.y = 55;
                jugador.movimientoY = 0;
            }
            // COLISIONES DE ABAJO HACIA ARRIBA
            if (colisiones() && jugador.y1 - jugador.movimientoY > bloques[i].y2) {
                
                jugador.x = 280;
                jugador.y = 55;
                jugador.movimientoY = 0;
            }

        }

        /*====================================
            CANVAS
        =====================================*/

        juego.canvas();
        frame(juego.tiempo)

    },
    canvas() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = jugador.color;
        ctx.fillRect(jugador.x, jugador.y, jugador.width, jugador.height);

        ctx.fillStyle = bloques[0].color;

        for (let i = 0; i < bloques.length; i++) {

            ctx.fillRect(bloques[i].x, bloques[i].y, bloques[i].width, bloques[i].height);

        }
    }

}
juego.teclado();
juego.tiempo();