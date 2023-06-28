/*
    try, catch e finally - Tratamento de erros
*/

/* FINALLY */
// O finally é uma terceira parte da estrutura try catch, ela é executada sempre e serve para executarmos algo independente se deu erro ou não.
try {
    console.log('Abrindo o arquivo.');
    console.log(naoExisto); // Erro
} catch(err) { // err é um argumento com valor automático pelo javascript, o argumento é o erro que ocorreu.
    throw new ReferenceError('A variável não existe!');
} finally {
    console.log('Fechando o arquivo.'); // 
}

// OBS: O finally pode ser omitido da estrutura caso não precise dele.
