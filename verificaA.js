// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, 
// além de informar a quantidade de vezes em que ela ocorre.
// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

let teste = "Alvira"
let testeDois = "tamanduá"
let testeTres = "responder"
let testeQuatro = "substância"
let testeCinco = "avião"

function verificaA(text) {
    let contador = 0
    let textoMinusculo = text.toLowerCase()

    for (let i = 0; i < textoMinusculo.length; i++) {
        if (textoMinusculo[i] === 'a' || textoMinusculo[i] === 'â' 
            || textoMinusculo[i] === 'ã' || textoMinusculo[i] === "á") {
            contador++
        }
    }
    if (contador > 0) {
        return `A string possui ${contador} letras 'a'.`
    } else {
        return "Não há nenhuma letra 'a' na string informada."
    }
}

console.log(verificaA(teste))
console.log(verificaA(testeDois))
console.log(verificaA(testeTres))
console.log(verificaA(testeQuatro))
console.log(verificaA(testeCinco))