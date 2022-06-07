let piano = document.querySelector(".piano");
let pianoWidth = getComputedStyle(piano).getPropertyValue("width");

let pista = document.querySelector(".pista");

let teclaBranca = document.querySelector(".tecla-branca");
let teclaPreta = document.querySelector(".tecla-preta");

let teclaBrancaWidth = getComputedStyle(teclaBranca).getPropertyValue("width");
let teclaPretaWidth = getComputedStyle(teclaPreta).getPropertyValue("width");
let nota = document.querySelector(".nota");


let teclaCont=1;
document.querySelectorAll(".oitava > div").forEach(function(tecla) {
    if(tecla.classList["tecla-branca"]) {
        // pista.innerHTML += "<div style='height:"+getComputedStyle(pista).getPropertyValue("height")+"; border: '1px solid red'></div>";
        console.log(teclaCont);
    }
    teclaCont++;
    // console.log(tecla);
});

//main
pista.style.width = pianoWidth;
nota.style.width = teclaBrancaWidth;
nota.style.left = teclaBrancaWidth;
nota.style.height = "50px";
nota.style.bottom = "30px";

