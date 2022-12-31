const carregadoFull = function() {
    window.addEventListener('click', (event) => {
        const elemento = event.target;
        const video = document.querySelector('.video');

        if(elemento.classList.contains('play')) {
            video.play();
        }

        if(elemento.classList.contains('pausa')) {
            video.pause();
        }

        if(elemento.classList.contains('avanca')) {
            video.currentTime += 15;
        }

        if(elemento.classList.contains('retrocede')) {
            video.currentTime -= 15;
        }
    });
};

window.addEventListener('load', carregadoFull());