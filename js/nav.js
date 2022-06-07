function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
        pista.style.animationPlayState="running";
    } else {
        x.style.display = "block";
        pista.style.animationPlayState="paused";
    }
}