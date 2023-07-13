// Trata-se de uma função auto-invocada (executada automaticamente) que é bastante usada para proteger o código do escopo global.

// Sintaxe: (function() {})()

// Exemplo de uso: 

(function() {
    console.log('Oi');
})();


// Pode-se receber argumentos em funções imediatas.
(function(nome, idade) {
   console.log('Oi');
})('Douglas', 22);
