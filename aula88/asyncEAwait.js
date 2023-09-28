/* Async e Await */

// São usados em conjunto para esperar uma promise, elas substituem o then e catch para ter um código mais limpo.
// Usa-se o async antes da palavra function para indicar que é uma função assíncrona (async só pode ser usado neste tipo de declarção de função).
// Ao usar a palavra async, é habilitado o uso da palavra await dentro da função.
// A palavra await pausa o código e fica esperando a promise ser resolvida ou rejeitada.
async function executaPromises() {
    await conexaoBD2(false);
    await buscandoDadosBD2(false);
    await exibeDadosNaTela2(false);
}
executaPromises();

// É recomendado usar try catch para capturar o erro do reject, pois async e await não possui um catch prórprio igual ao then e catch.
async function mostraPromises() {
    try {
        await conexaoBD2(false);
        await buscandoDadosBD2(true); // Promise rejeitada.
        await exibeDadosNaTela2(false);
    } catch(e) { // Captura o erro do reject da promise.
        console.log(e);
    }
}
mostraPromises();

// Pode-se capturar os valores passados para o resolve e reject das promises.
async function exibePromises() {
    const promiseUm = await conexaoBD2(false);
    console.log(promiseUm);
    
    const promiseDois = await buscandoDadosBD2(false);
    console.log(promiseDois);

    const promiseTres = await exibeDadosNaTela2(false);
    console.log(promiseTres);
}
exibePromises();

function conexaoBD2(boolean) {
    return new Promise((resolve, reject) => {
        if(boolean) reject(new Error());
        setTimeout(() => {
            console.log('conexaoBD2');
            resolve('conexaoBD2');
        }, 5000);
    });
}

function buscandoDadosBD2(boolean) {
    return new Promise((resolve, reject) => {
        if(boolean) reject(new Error());
        setTimeout(() => {
            console.log('buscandoDadosBD2');
            resolve('conexaoBD2');
        }, 1000);
    });
}

function exibeDadosNaTela2(boolean) {
    return new Promise((resolve, reject) => {
        if(boolean) reject(new Error());
        setTimeout(() => {
            console.log('exibeDadosNaTela2');
            resolve('conexaoBD2');
        }, 3000);
    });
}