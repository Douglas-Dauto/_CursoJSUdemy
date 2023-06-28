/*
    try, catch e throw - Tratamento de erros
*/

/* TRY E CATCH */
// O try e catch funciona como um if e else, caso o código dentro do try der erro, o código do try antes do erro e catch será executado, caso try não der erro, o próprio try é executado.
try {
    console.log('Abrindo um arquivo.') // Será executado pois vem antes do erro.
    console.log(naoExisto); // Erro
} catch(err) { // err é um argumento com valor automático pelo javascript, o argumento é o erro que ocorreu.
    console.log(err);
}

// OBS: O argumento automático pode ter qualquer nome e não apenas err.


/* THROW */
// O throw serve para nós lançarmos um erro customizado. Pode ser apenas uma string ou um novo objeto de erro.
function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw('X e Y precisam ser números!'); // O throw para a execução da função assim como o return ou break.
    }

    return x + y;
}

// ou
// Throw como um novo objeto:
function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('X e Y precisam ser números!'); // O nome da função construtora deve ser do tipo do erro que ocorreu.
    }

    return x + y;
}

// OBS: Não é interessante e é até potencialmente perigoso exibir os erros para o usuário, ao invés do erro, exiba uma mensagem indicando que deu erro por exemplo.
