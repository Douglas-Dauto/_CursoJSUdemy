/**
 * Operadores Aritiméticos e sua ordem de precedência
 * () Parentesis // Muda a ordem de precedência dos operadores
 * ** Potência // Elevação de Operandos
 * / * % Divisão Multiplicação Resto da Divisão // Todos na mesma precedência
 * + - Adição Subtração // Os dois na mesma precedência e os últimos
 */

const num1 = 10;
const num2 = 5;

console.log(num1 + num2); // Adição
console.log(num1 - num2); // Subtração
console.log(num1 * num2); // Multiplicação
console.log(num1 / num2); // Divisão
console.log(num1 ** num2); // Potência
console.log(num1 % num2); // Resto da Divisão
console.log((num1 + num2) / num2); // Com Parentesis
console.log(num1 + num2 / num2); // Sem Parentesis


/**
 * Operador de Pós-Incremento e Pós-Decremento, Pré-Incremento e Pré-Decremento
 */

let contador = 0;

contador++; // Pós-Incremento   
console.log(contador);

contador--; // Pós-Decremento
console.log(contador);

++contador; // Pré-Incremento
console.log(contador);

--contador; // Pré-Decremento
console.log(contador);

console.log(++contador); // O Pós-Incremento ou Pós-Decremento primeiro soma depois retorna o valor
console.log(contador++); // O Pré-Incremento ou Pré-Decremento primeiro retorna o valor depois soma
console.log(contador);


/**
 * Operadores de Auto-atribuição
 */

contador = 1;

contador += 2; // Mesma coisa que contador = contador + 2;
console.log(contador);

contador -= 1; // Mesma coisa que contador = contador - 2;
console.log(contador);

contador *= 2; // Mesma coisa que contador = contador * 2;
console.log(contador);

contador /= 2; // Mesma coisa que contador = contador / 2;
console.log(contador);

contador **= 2; // Mesma coisa que contador = contador ** 2;
console.log(contador);

contador %= 2; // Mesma coisa que contador = contador % 2;
console.log(contador);



/**
 * Strings numéricas em cálculo
 */

const num = 5;
const numString = "10"; // A engine do JS irá tratar como number em cáculos aritiméticos

console.log(num + numString); // Somente para soma não é feito cálculo e sim concatenação
console.log(num - numString);
console.log(num * numString);
console.log(num / numString);
console.log(num ** numString);
console.log(num % numString);

console.log(typeof numString); // Sem cálculo ela é string



/**
 * Conversão de tipos de dados
 */

let umaString = "20.5";
let umNumero = 10;

console.log(parseInt(umaString)); // Transforma em dado do tipo inteiro
console.log(typeof parseInt(umaString)); // Integer

console.log(parseFloat(umaString)); // Transforma em dado do tipo real
console.log(typeof parseFloat(umaString)); // Float

// Transforma em dado do tipo numérico (real ou inteiro, depende do valor passado)
console.log(Number(umaString)); // ou     
console.log(new Number(umaString)); // Opcional usar a palavra new e serve para qualquer método construtor
console.log(typeof Number(umaString)); // Number

console.log(String(umNumero)); // Transforma em dado do tipo texto
console.log(typeof String(umNumero)); // String
console.log(typeof umNumero.toString()); // Método para converter em string
// Pode-se usar este método para conseguir o código binário do número.
console.log(umNumero.toString(2)); // Saida == 1010 código binário do número

console.log(Boolean(umNumero)); // Retorna um valor lógico (true ou false)
console.log(Boolean(umNumero == umaString));
console.log(typeof Boolean(umNumero)); // Boolean

console.log(Object(umNumero)); // Retorna um objeto criado com o valor passado
console.log(Object(umaString));
console.log(typeof Object(umNumero)); // Object

