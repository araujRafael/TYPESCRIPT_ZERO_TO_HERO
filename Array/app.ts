// Type Array
const futras1: string[] = ["pera","uva","maçã"]

// types com Objets Array
const futras2: Array<string> = ["pera","uva","maçã"]

// Spread Operator 
let numerosAte5:Array<number> = [0,1,2,3,4,5]
// Concatena os Números.
let numerosAte10:Array<number> = [...numerosAte5,6,7,8,9,10]
console.log(numerosAte10)

const linguagens: string[] = ['JavaScript','PHP','Java','Kotlin']

function funcLinguagens(linguagens:string[]) {
  for (let i = 0; i < linguagens.length; i++) {
    console.log(linguagens[i]);
  }
}
funcLinguagens(linguagens)