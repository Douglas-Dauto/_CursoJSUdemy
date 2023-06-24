/*
    Escreva uma função que recebe um número e retorne o seguinte:
    Número divisível por 3 = Fizz
    Número divisível por 5 = Buzz
    Número divisível por 3 e por 5 = FizzBuzz
    Número não é divisível por 3 e por 5 retorne o próprio número
    Checar se o valor é um número
    Usar a função com números de 0 à 100
*/

function calcularDivisao(numero) {
    const numeroDaConversao = Number(numero);

    if(numeroDaConversao % 3 === 0 && numeroDaConversao % 5 === 0) {
        return 'FizzBuzz';
    } else if(numeroDaConversao % 3 === 0) {
        return 'Fizz';
    } else if(numeroDaConversao % 5 === 0) {
        return 'Buzz';
    } else {
        return numeroDaConversao;
    }
}

for(let i = 0; i <= 100; i++) {
    console.log(calcularDivisao(i));
}
