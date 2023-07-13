/* FUNÇÔES DE CALLBACK */
// São funções que são executadas após a execução de outra função não importando quanto tempo demore.

function f1(callback) {
    setTimeout(() => {
        console.log('f1');
        if(callback) callback(); // Se existir valor, execute.
    }, 500);
}

function f2(callback) {
    setTimeout(() => {
        console.log('f2');
        if(callback) callback();
    }, 1000);
}

function f3(callback) {
    setTimeout(() => {
        console.log('f3');
        if(callback) callback();
    }, 800);
}

// Enviando funções anônimas como argumento para serem executadas.
f1(() => {
    f2(() => { // f2 nunca será executado antes de f1.
        f3(); // f3 nunca será executado antes de f2.
    })
});


// Pode-se fazer desta maneira para evitar aninhamento.
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3();
}
