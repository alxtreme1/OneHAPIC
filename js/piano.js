const teclas = document.querySelectorAll(".oitava > div");
const dictTeclas = {'c':0, 'cs':1, 'd':2, 'ds':3, 'e':4, 'f':5, 'fs':6, 'g':7, 'gs':8, 'a':9, 'as':10, 'b':11};
let teclasTocando = [];

let AudioContextFunc = window.AudioContext || window.webkitAudioContext;
let audioContext = new AudioContextFunc();

// opening fullscreen on mobile devices automatic
// if(deviceIsMobile()){
//     openFullscreen();
// }

function tocar(tecla){
	let player = new WebAudioFontPlayer();
    let parentOitava = tecla.parentNode;
    let oitava = Number(parentOitava.classList[1][parentOitava.classList[1].length-1]);
    let nota = dictTeclas[tecla.getAttributeNames()[1]];
    let listaTeclaUnica = [nota, oitava];
    let listaSomUnico = [player, audioContext];
  
    tecla.classList.add("selecionada");
  
	player.loader.decodeAfterLoading(audioContext, '_tone_0000_SBLive_sf2');
  
    player.queueWaveTable(audioContext, audioContext.destination, _tone_0000_SBLive_sf2, 0, 12*oitava+nota, 2);
  
    teclasTocando.push({
        key: listaTeclaUnica,
        value: listaSomUnico});
    // teclasTocando.forEach(function(tocando) {
    //   if(tocando.key == listaTeclaUnica)
    //     console.log(tocando.key);
    // });
    // console.log(teclasTocando);
    // console.log(teclasTocando.[listaTeclaUnica[0], listaTeclaUnica[1]]);
    // console.log([nota, oitava]+", "+player)
    // play(dictTeclas[tecla.getAttributeNames()[1]],oitava);
    // return false;
    console.log("toca...");
}

function parar(tecla){
    let parentOitava = tecla.parentNode;
    let oitava = Number(parentOitava.classList[1][parentOitava.classList[1].length-1]);
    let nota = dictTeclas[tecla.getAttributeNames()[1]];
    let listaTeclaUnica = [nota, oitava];
    teclasTocando.forEach(function(tocando) {
        if(tocando.key[0] == listaTeclaUnica[0] && tocando.key[1] == listaTeclaUnica[1]){
            tocando.value[0].cancelQueue(tocando.value[1]); 
            delete teclasTocando[nota, oitava];
        }
    });
  
    tecla.classList.remove("selecionada");
    // return false;
  
    console.log("parando...");
}

teclas.forEach(function(tecla){
    let parentOitava = tecla.parentNode;
    let oitava = Number(parentOitava.classList[1][parentOitava.classList[1].length-1]);
    let nota = dictTeclas[tecla.getAttributeNames()[1]];
    console.log(12+' * '+oitava+' + '+nota+' = '+(12*oitava+nota));
    if(deviceIsMobile()){
        tecla.ontouchstart = ()=> tocar(tecla);

        tecla.ontouchend = ()=> parar(tecla);
        tecla.ontouchcancel = ()=> parar(tecla);
    }
    else{
        tecla.onmousedown = ()=> tocar(tecla);

        tecla.onmouseup = ()=> parar(tecla);
        tecla.onmouseleave = ()=> parar(tecla);
    }
    // console.log("tecla");
});

function deviceIsMobile() {
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true; // está utilizando celular
    }
    else {
        return false; // não é celular
    }
}