/* RETORNO DE FUNÇÕES */

 // Funções podem retornar valores quando são chamadas.
function digaHi() {
    return console.log('Hi'); // É impoortante perceber que nada abaixo de return é executado.
    console.log("oi"); // Não será executado pois o return quebrará o fluxo aqui de dentro.
}

digaHi(); // Saida ==  Hi
console.log(digaHi()); // Saida == Hi Retorno (sem retorno) == undefined

// Pode-se armazenar em variáveis os valores dos retornos.
const valorFunc = digaHi();


/* RETORNOS DE FUNÇÕES COMO DADO */

// Ao jogar funções com argumentos em variáveis, elas lembraram do argumento passado.
const duplica = multiplicador(2); // Como multiplicador(n) retorna uma função, a constante passou a ser uma função.
duplica(5); // Saida == 10 // duplica() agora faz referência a função multiplicaValor(valor).

function multiplicador(n) {
   function multiplicaValor(valor) {
       return valor * n;
   }

   return multiplicaValor; // Pode-se retornar funções em retornos de outras funções, pois função é dado.
}

// ou 

function multiplicador(n) {
   return function multiplicaValor(valor) {
       return valor * n;
   }
}