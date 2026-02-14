function relogio() {
    function criaHora(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHora(segundos);
        }, 1000);
    }

    //mais otimizado para codes grandes
    document.addEventListener('click', function (event) {
        const el = event.target;

        if (el.classList.contains('resetar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    });
   
    /*  menos otmz para codes grandes 
    iniciar.addEventListener('click', function(event){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    });
    
    pausar.addEventListener('click', function(event){
        clearInterval(timer);
        relogio.classList.add('pausado');
    });
    
    resetar.addEventListener('click', function(event){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    });
    */

}
relogio();