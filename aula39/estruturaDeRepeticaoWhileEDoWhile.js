/*
    Estas são as estruturas mais básicas de repetição, a repetição consiste em fazer determinado código ou bloco de código ser executado mais de uma vez sem precisar reescreve-lós. (Loops).
    O while e do..while são usados geralmente quando não sabemos quantas repetições terá que ser feita.
*/

/* ESTRUTURA WHILE (Enquanto) */
/*
    while (Condição) {
        console.log('Olá')
    }

    O texto será imprimido várias vezes enquanto a condição for verdadeira.
    O while primeiro verifica a condição e depois executa o bloco.
*/

let i = 0;

while (i <= 10) {
    console.log('Olá') // Saida == Olá Olá Olá Olá Olá Olá Olá Olá Olá Olá
    i++
}
// Enquanto i for menor ou igual (<=) a 10 os comandos serão executados, perceba que no fim tem o i++, isto faz com que toda vez que o while fizer o loop o i vai valer uma unidade amais e vai chegar uma hora que o i vai ser maior ou igual (>=) a 10 e assim o laço é quebrado e os códigos param de ser repetidos.


/* ESTRUTURA DO..WHILE (Faça Enquanto) */
/*
    do {			     
        console.log('Olá')
    } while (Condição)

    O texto será imprimido uma vez se a condição for falsa ou várias vezes enquanto a condição for verdadeira.
    O do..while primeiro executa o bloco e depois verifica a condição, 
    se a condição for verdadeira ele continua executando, se for falsa ele só executa a primeira vez mesmo.
*/

do {
    console.log('Olá') // Saida == Olá Olá Olá Olá Olá Olá Olá Olá Olá Olá
    i++
} while (i <= 10);
// Faça os comandos, depois enquanto i for menor ou igual (<=) a 10 os comandos serão executados novamente.


/* EXEMPLO DE LAÇO SEM PREVISÂO DA QUANTIDADE DE VOLTAS */
function random(min, max) {
    const resultado = Math.random() * (max - min) + min;
    return Math.floor(resultado);
}

let rand = random(0, 50);

while(rand !== 10) {
    rand = random(0, 50);
    console.log(rand);
}
