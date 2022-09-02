function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    
    console.log("Elemento não encontrado");
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function () {
        if (tecla.code === "Enter" || tecla.code === "Space") {
            tecla.classList.add("ativa");
        }
    };

    tecla.

    tecla.onkeyup = function () {
        tecla.classList.remove("ativa");
    };
}