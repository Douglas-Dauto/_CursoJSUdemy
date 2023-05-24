let num1 = 8.3264732;
let num2 = 8.5183748;

/* MÉTODO floor() */
// Sempre irá arredondar o número para baixo, ou seja, aplicará 0 nas casas decimais.
console.log(Math.floor(num1)); // Saida == 8

/* MÉTODO ceil() */
// Sempre irá arredondar o número para cima, ou seja, aplicará 0 nas casas decimais e somará mais um.
console.log(Math.ceil(num1)); // Saida == 9

/* MÉTODO round() */
// Sempre irá arredondar o número de acordo com seu valor fracionário, ou seja, aplicará 0 nas casas decimais e caso o valor fracionário for maior ou igual a metade ele irá somar mais um (arredondamento automático).
console.log(Math.round(num1)); // Saida == 8
console.log(Math.round(num2)); // Saida == 9

/* MÉTODO max() */
// Retornará o maior número de uma sequência.
console.log(Math.max(num1, 2, 5, -50, 800, 26)); // Saida == 800

/* MÉTODO min() */
// Retornará o menor número de uma sequência.
console.log(Math.min(num1, 2, 5, -50, 800, 26)); // Saida == -50

/* MÉTODO random() */
// Retornará um número fracionado aleatório entre 0 e 1 sendo que o 1 não está incluso.
console.log(Math.random()); // Saida == Aleatório
// Pode-se fazer contas com o método random() para obter um valor maior que 1.
console.log(Math.random() * 5 + 5); // Saida == Aleatório, porém pelo menos o valor será maior ou igual a 5 e poderá chegar até 10 (5 à 10).
const aleatorio = Math.random() * 20;
console.log(aleatorio); // Saida == Aleatório, porém o valor poderá chegar até 20 (0 à 20).

/* MÉTODO pow() */
// Retornará a potência, elevará o primeiro valor pelo segundo.
console.log(Math.pow(5, 2)); // Saida == 25
// Pode-se usar o próprio operador de potência do javascript ao invés do método pow().
console.log(5 ** 2); // Saida == 25

/**
 * OBS: Procure mais métodos do objeto estático Math no guia da mozilla: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide
 */
