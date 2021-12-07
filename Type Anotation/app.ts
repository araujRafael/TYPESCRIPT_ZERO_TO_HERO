// Type anotation String
const nome: string = "Rafael Araujo"
console.log(nome)

// Type anotation String Com Array
const animais: string[] = ["onça","jaguatirica","arara",] 
console.log(animais)

// Type anotation String Com Objetos
let carro : {
  name : string;
  year: number;
  price: number;
}
carro = {
  name : "Ferrari Testarossa",
  year: 1980,
  price: 2.000000,
}
console.log(carro)
// Type anotation Funções
function multiplayNumber( num1:number , num2:number ){
  return num1 * num2
}
console.log(multiplayNumber(4,8))