// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function verificaFibonacci(num) {
    let a = 0 
    let b = 1
    let c = a + b

    if (num === a || num === b) {
        return `O número ${num} pertence à sequência de Fibonacci.`
    }

    while (c <= num) {
        if (c === num) {
            return `O número ${num} pertence a sequência de Fibonacci.`
        }
        a = b;
        b = c;
        c = a + b
    }
    return `O número ${num} não pertence à sequência de Fibonacci.`
}

let numeroQueVaiDarCerto = 34
let numeroQueVaiDarErrado = 4
console.log(verificaFibonacci(numeroQueVaiDarCerto))
console.log(verificaFibonacci(numeroQueVaiDarErrado))