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
    y: 70,
    width: 10,
    height: 10,
    color: "red",
    movimientoX: 0,
    movimientoY: 0,
    velocidad: 5
}

/*====================================
PROPIEDADES DEL OBJETO BLOQUES
=====================================*/
let bloques = [{
        x: 300,
        y: 50,
        width: 400,
        height: 10,
        color: "black"
    },
    {
        x: 300,
        y: 90,
        width: 10,
        height: 360
    },
    {
        x: 300,
        y: 440,
        width: 400,
        height: 10
    },
    {
        x: 690,
        y: 90,
        width: 10,
        height: 360
    },
    {
        x: 365,
        y: 50,
        width: 10,
        height: 350
    },
    {
        x: 430,
        y: 100,
        width: 10,
        height: 350
    },
    {
        x: 495,
        y: 50,
        width: 10,
        height: 350
    },
    {
        x: 560,
        y: 100,
        width: 10,
        height: 350
    },
    {
        x: 625,
        y: 50,
        width: 10,
        height: 350
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

    teclado(){

        document.addEventListener("keydown", juego.oprimir);
        document.addEventListener("keyup", juego.soltar);

    },
    oprimir(key){

        key.preventDefault();

        switch(key.keyCode){
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
    soltar(key){
         key.preventDefault();

         switch(key.keyCode){
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

        

        //MOVIMIENTO HORIZONTAL
        jugador.x += jugador.movimientoX;

        if(datos.left){
            jugador.movimientoX = -jugador.velocidad;
            jugador.movimientoY = 0;
        }
        if(datos.right){
            jugador.movimientoX = jugador.velocidad;
            jugador.movimientoY = 0;
        }
        if(!datos.left && !datos.right){
            jugador.movimientoX = 0;
        }
        // MOVIMIENTO VERTICAL
        jugador.y += jugador.movimientoY;
        
        if(datos.up){
            jugador.movimientoY = -jugador.velocidad;
            jugador.movimientoX = 0;
        }
        if(datos.down){
            jugador.movimientoY = jugador.velocidad;
            jugador.movimientoX = 0;
        }
        if(!datos.up && !datos.down){
            jugador.movimientoY = 0;
        }


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