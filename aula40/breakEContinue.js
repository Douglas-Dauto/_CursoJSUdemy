/*
    break - Encerra a execução do bloco.
    continue - Pula uma iteração (volta) em laços de repetição.
*/

const numeros = [1, 2, 3, 4, 5];

/* CONTINUE */
for(let valor of numeros) {
    if(valor === 2) {
        continue;
    }

    console.log(valor); // Saida == 1 3 4 5 6
}

/* BREAK */
for(let valor of numeros) {
    if(valor === 3) {
        break;
    }

    console.log(valor); // Saida == 1 2
}
