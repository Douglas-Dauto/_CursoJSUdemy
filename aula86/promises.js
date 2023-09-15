/* Promises */
// As promises são usadoas quando temos vários códigos que não sabemos o tempo exato que será executado e queremos executá-los em uma certa ordem.
// As promises tem a mesma função das funções de callback, porém ocorre menos aninhamentos de código e assim é mais compreensivel.
// As promises precisam receber dois parâmetros, resolve e reject, resolve é usando quando você quer chamar o método then (o resolve geralmente fica onde se chamaria a função de callback), reject é quando queremos chamar o método catch (chamamos reject quando queremos representar um erro no código).

function conexaoBD(boolean) {
    return new Promise((resolve, reject) => {
        if(boolean) reject(new Error()); // O argumento do reject é pasado para o e.
        setTimeout(() => {
            console.log('conexaoBD');
            resolve(); // Pode-se enviar um (apenas um) argumento no resolve, este argumento será capturado pelo then.
        }, 5000);
    });
}

function buscandoDadosBD() {
    setTimeout(() => {
        console.log('buscandoDadosBD');
    }, 1000);
}

function exibeDadosNaTela() {
    setTimeout(() => {
        console.log('exibeDadosNaTela');
    }, 3000);
}

conexaoBD(false).then(() => { // Quando o primeiro then é chamado pelo resolve, os outros then são chamados logo depois dele sem precisar de outra chamada de resolve.
    buscandoDadosBD();
}).then(() => {
    exibeDadosNaTela();
}).catch(e => { // Quando ocorrer um erro cairá no catch
    console.log(e);
});


// Pode-se usar promises em todos os códigos que demoram e não somente no primeiro.
// Usando em todos você obtem o resolve e reject de cada then e se uma das promisses executar o reject, a cadeia é quebrada e cairá no catch.
function conexaoBD2(boolean) {
    return new Promise((resolve, reject) => {
        if(boolean) reject(new Error());
        setTimeout(() => {
            console.log('conexaoBD2');
            resolve();
        }, 5000);
    });
}

function buscandoDadosBD2(boolean) {
    return new Promise((resolve, reject) => {
        if(boolean) reject(new Error());
        setTimeout(() => {
            console.log('buscandoDadosBD2');
            resolve();
        }, 1000);
    });
}

function exibeDadosNaTela2(boolean) {
    return new Promise((resolve, reject) => {
        if(boolean) reject(new Error());
        setTimeout(() => {
            console.log('exibeDadosNaTela2');
            resolve();
        }, 3000);
    });
}

conexaoBD2(false).then(() => {
    return buscandoDadosBD2(false); // Para capturar o reject ou resolve, é preciso retornar a promise.
}).then(() => {
    return exibeDadosNaTela2(false); // Se uma das funções receberem true, reject será chamado, logo catch também.
}).catch(e => { // Quando ocorrer um erro cairá no catch
    console.log(e);
});