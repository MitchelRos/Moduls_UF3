

function index() {
    var carc = document.getElementById("ARCOS");
    var ccircle = document.getElementById("CIRCULO");
    iris(carc);
    circo(ccircle);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min + 1;
}

function arco(xa, ya, ra, color, canvas) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(xa, ya, ra, Math.PI, 0);
    ctx.lineWidth = 40;
    ctx.strokeStyle = color;
    ctx.stroke();
}


function iris(canvas) {
    var xa = 500;
    var ya = 500;
    var ra = 200;
    const colores = ['pink', 'purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    for (let index = 0; index < colores.length; index++) {
        arco(xa, ya, ra, colores[index], canvas);
        ra += 40;
    }
}

function circulo(xc, yc, rc, color, canvass) {
    var ctx = canvass.getContext("2d");
    ctx.beginPath();
    ctx.arc(xc, yc, rc, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.strokeStyle = 'black';
    ctx.fill();
    ctx.stroke();
}
function circo(canvas) {
    for (let index = 0; index <= 10; index++) {
        var xc = randomNumber(1, 1000);
        var yc = randomNumber(1, 550);
        var rc = randomNumber(5, 100);
        var color = 'hsla(0, 10%, '+randomNumber(15,85)+'%)'
        circulo(xc, yc, rc, color, canvas)
    }
}

