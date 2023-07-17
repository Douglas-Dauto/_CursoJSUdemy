// Concatenando arrays
const arrayUm = [0, 1, 2];
const arrayDois = [3, 4, 5];

/* MÉTODO concat() */
let juncaoArray = arrayUm.concat(arrayDois);
console.log(juncaoArray); // Saida == [ 0, 1, 2, 3, 4, 5 ]

/* SPREAD OPERATOR */
juncaoArray = [...arrayUm, ...arrayDois];
console.log(juncaoArray); // Saida == [ 0, 1, 2, 3, 4, 5 ]

// Pode-se enviar mais de um valor em ambos os jeitos.
juncaoArray = arrayUm.concat(arrayDois, [6, 7, 8], "Douglas");
juncaoArray = [...arrayUm, ...arrayDois, ...[6, 7, 8], "Douglas"];
