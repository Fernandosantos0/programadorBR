window.onload = function() { //Evento do carregamento da página

    //Constante para armazenar os elementos dos botões
    let tmp = null;
    const tempo = 1000;
    const divContainer = window.document.getElementById('cx-background');
    const containerResult = window.document.querySelector('div#result');
    const btnIniciar = window.document.querySelectorAll('button#btnIniciar')[0];
    const btnParar = window.document.querySelectorAll('button#btnParar')[0];
    const btnReset = window.document.querySelectorAll('button#btnReset')[0];

    function mostrarCor(r,g,b,a) {
        if(containerResult.style.display === 'block') {
            containerResult.classList.add('oculta');
            containerResult.innerText = `rgba(${r},${g},${b},${a})`;
        } else {
            containerResult.classList.remove('oculta');
            containerResult.innerText = `RGBA (${r},${g},${b},${a})`;
        }
    }

    function bgColor() {

        //Cores rgba
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let a = Math.floor(Math.random()*10);
        let background = `rgba(${r},${g},${b},${a})`;

        divContainer.style.backgroundColor = background;
        mostrarCor(r,g,b,a);
    }

    //Função para trocar a cor de fundo do elemento
    btnIniciar.addEventListener('click',function() {
        console.log('Evento click para iniciar a função de trocar de cores');
        window.alert('O show começou!');
        
        //Chamando a função
        tmp = setInterval(bgColor,tempo);
    });

    //Função para parar a trocar de cores do elemento
    btnParar.addEventListener('click',function() {
        console.log('Evento click para acionar a função de parar a trocar de cores');
        window.alert('O show parou!');
        clearInterval(tmp);
    });

    //Função para reset a cor de fundo do elemento
    btnReset.addEventListener('click',function() {
        console.log('Evento click para acionar a função de reset');
        window.alert('O show sofreu um reset!');
        clearInterval(tmp);
        containerResult.classList.add('oculta');
       divContainer.style.backgroundColor = 'rgba(255,255,255,1)'; 
    });

};