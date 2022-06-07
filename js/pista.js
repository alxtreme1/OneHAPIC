let pixelsPerSecondSpeed = 50;
// let pista = document.querySelector(".pista");

let pistaLength = getComputedStyle(pista).getPropertyValue("height").split('px')[0];
let pistaAnimationDuration = pistaLength / pixelsPerSecondSpeed;

console.log(pistaLength);
pista.style.animationDuration = pistaAnimationDuration+'s';