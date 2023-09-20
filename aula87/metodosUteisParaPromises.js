/* Métodos Úteis para Promises */

const promises = [conexaoBD2(false), buscandoDadosBD2(false), exibeDadosNaTela2(false)];

/* Método all() */
// Este método recebe um array como argumento, geralmente um array de promises.
// Logo após o método encadeamos um then que será executado caso todas as promies sejam resolvidas, o then recebe uma função anônima com o um parâmetro que será um novo array contendo os valores que o resolve das promises mandaram.
Promise.all(promises).then(function(newArrayValuePromises) {
    console.log(newArrayValuePromises);
}).catch(function(e) { // Caso uma das promises seja rejeitada, será exibido apenas o cath.
    console.log(e);
});

/* Método race() */
// Este método funciona da mesma maneira que o all(), porém entregará apenas uma promise, a que for resolvida ou rejeitada primeiro.
Promise.race(promises).then(function(valuePromise) {
    console.log(valuePromise);
}).catch(function(e) {
    console.log(e); // Caso a primeira promise for rejeitada, será exibido o cath.
});

function conexaoBD2(boolean) {
    return new Promise((resolve, reject) => {
        if(boolean) reject(new Error());
        setTimeout(() => {
            resolve('conexaoBD2');
        }, 5000);
    });
}

function buscandoDadosBD2(boolean) {
    return new Promise((resolve, reject) => {
        if(boolean) reject(new Error());
        setTimeout(() => {
            resolve('buscandoDadosBD2');
        }, 1000);
    });
}

function exibeDadosNaTela2(boolean) {
    return new Promise((resolve, reject) => {
        if(boolean) reject(new Error());
        setTimeout(() => {
            resolve('exibeDadosNaTela2');
        }, 3000);
    });
}

/* Métodos resolve() e reject() */
// Estes métodos entregam uma promise já resolvida ou rejeitada.
function emCache() {
    let emCache = true;

    if(emCache) {
        return Promise.resolve();
        // return Promise.reject();
    } else {
        return conexaoBD2(false);
    }
}

emCache().then(function() {
    console.log('Promise resolvida!');
}).catch(function(e) {
    console.log(e);
});