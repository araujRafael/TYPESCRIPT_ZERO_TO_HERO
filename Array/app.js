"use strict";
// Type Array
const futras1 = ["pera", "uva", "maçã"];
// types com Objets Array
const futras2 = ["pera", "uva", "maçã"];
// Spread Operator 
let numerosAte5 = [0, 1, 2, 3, 4, 5];
// Concatena os Números.
let numerosAte10 = [...numerosAte5, 6, 7, 8, 9, 10];
console.log(numerosAte10);
const linguagens = ['JavaScript', 'PHP', 'Java', 'Kotlin'];
function funcLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
funcLinguagens(linguagens);
