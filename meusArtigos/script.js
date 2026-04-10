let frameSlime = 0;
let estadoSlime = "idle";

let etapaComida = 0;
// 0 = cubomida21
// 1 = cubomida1
// 2 = cubomida6
// 3 = cubomida22

function animacao() {
    const slime = document.getElementById("slime");
    const comida = document.getElementById("comida");

    setInterval(() => {
        // animação do slime
        if (estadoSlime === "idle") {
            if (frameSlime === 0) {
                slime.src = "../animacao-relogio/data/Sprite-slime-idle1.png";
                frameSlime = 1;
            } else {
                slime.src = "../animacao-relogio/data/Sprite-slime-idle4.png";
                frameSlime = 0;
            }
        }

        if (estadoSlime === "comer") {
            if (frameSlime === 0) {
                slime.src = "../animacao-relogio/data/Sprite-slime-comendo1.png";
                frameSlime = 1;
            } else {
                slime.src = "../animacao-relogio/data/Sprite-slime-comendo5.png";
                frameSlime = 0;
            }
        }

        if (estadoSlime === "morto") {
            if (frameSlime === 0) {
                slime.src = "../animacao-relogio/data/Sprite-slime-morto1.png";
                frameSlime = 1;
            } else {
                slime.src = "../animacao-relogio/data/Sprite-slime-morto7.png";
                frameSlime = 0;
            }
        }

        // estado da comida
        if (etapaComida === 0) {
            comida.src = "../animacao-relogio/data/Sprite-cubomida21.png";
        } else if (etapaComida === 1) {
            comida.src = "../animacao-relogio/data/Sprite-cubomida1.png";
        } else if (etapaComida === 2) {
            comida.src = "../animacao-relogio/data/Sprite-cubomida6.png";
        } else if (etapaComida === 3) {
            comida.src = "../animacao-relogio/data/Sprite-cubomida22.png";
        }

    }, 500);
}

function comer() {
    estadoSlime = "comer";
    frameSlime = 0;
}

function idle() {
    estadoSlime = "idle";
    frameSlime = 0;
}

function morrer() {
    estadoSlime = "morto";
    frameSlime = 0;
}

// faz a comida avançar: 21 -> 1 -> 6 -> 22
function sequenciaComida() {
    etapaComida = 0;

    setTimeout(() => {
        etapaComida = 1;
    }, 500);

    setTimeout(() => {
        etapaComida = 2;
    }, 1000);

    setTimeout(() => {
        etapaComida = 3;
    }, 1500);
}

function comerPor3Segundos() {
    comer();
    sequenciaComida();

    setTimeout(() => {
        idle();
    }, 4000);
}

function morrer() {
    estadoSlime = "morto";
    frameSlime = 0;
    etapaComida = 3;
}

animacao();