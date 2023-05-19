// IEE 754-2008 padrão de precisão dos números
let num1 = 4;
let num2 = 2.5;
let num3 = 10.293239374734;

/* MÉTODO toString() */
// Método para converter number em string
console.log(typeof num1.toString()); // Note que só onde você chamar o método que a variável será string
console.log(num1.toString() + num2); // Saida == 42.5
// Pode-se usar este método para conseguir o código binário do número.
console.log(num3.toString(2)); // Saida == 1010.0100101100010001101111000101010001100001110011 // Código binário do número

/* MÉTODO toFixed() */
// Método para escolher a quantidade de casas decimais
console.log(num3.toFixed(2)); // Saida == 10.29
console.log(num3.toFixed(5)); // Saida == 10.29324
console.log(num3.toFixed(0)); // Saida == 10

/* MÉTODO isInteger() */
// Método da classe number para analisar se um valor é do tipo inteiro (Integer)
console.log(Number.isInteger(num1)); // Saida == true
console.log(Number.isInteger(num1 + num2)); // Saida == false

/* MÉTODO isNaN() */
// Método da classe number para analisar se o cálculo resulta em um erro ou não (verifica se o resultado é um Not a Number)
console.log(Number.isNaN(num1 + num2)); // Saida == false (não é um NaN)
console.log(Number.isNaN(num1 * num2.toString)); // Saida == true (é um NaN)

/* MÉTODO isFinite() */
// Método da classe number para analisar se um valor é finito
console.log(Number.isFinite(num1)); // Saida == true
console.log(Number.isFinite(num1 / 0)); // Saida == false  // Números divididos por 0 em JS tem o resultado Infinity



/* Imprecisão de Números e Métodos para Resolver */
let num4 = 0.7;
let num5 = 0.1;

// Imprecisão na Soma
console.log(num4 + num5); // Saida == 0.7999999999999999 // Deveria ser 0.8
num4 += num5;
num4 += num5;
num4 += num5;
console.log(num4); // Saida == 0.9999999999999999 // Deveria ser 1.0

/* Métodos para Resolver a Imprecisão */
// Usar o toFixed() para arredondar um número impreciso pode não ser uma boa ideia se for o caso de querer fazer cálculos
console.log(num4.toFixed(2)); // Saida == 1.00 // O toFixed() não altera realmente o valor, apenas mascara.
console.log(Number.isInteger(num4.toFixed(2))); // Saida == false

console.log(Number(num4.toFixed())); // Saida == 1.00 // O Construtor Number e o método toFixed() juntos resolvem a imprecisão.
console.log(Number.isInteger(Number(num4.toFixed()))); // Saida == true


num4 = 0.7;
// Resolvendo imprecisão usando matemática
num4 = ((num4 * 100) + (num5 * 100)) / 100;
console.log(num4); // Saida == 0.8
