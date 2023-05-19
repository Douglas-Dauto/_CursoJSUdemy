/* \ EM STRINGS */
const umaString = "Um \"texto\""; // Use \ para escapar áspas da string ou ocultar letras ou usar unicode
console.log(umaString); // Saida == Um "texto"

/* ATRIBUTO length */
// Retorna o tamanho da string
console.log(umaString.length); // Saida == 10 (que é os índices 0123456789)
console.log(umaString.length -1); // Saida == 9 (assim fica em sincronia com o índicie)


/* ÍNDICES DE STRINGS */
                 //01234567       Index de cada letra, string são arrays de caracteres
let outraString = "Um texto";
console.log(outraString[4]); // Saida == "e"


/* MÉTODO charAt() */
// Recebe um índice de argumento e retorna o valor da posição do indicie
console.log(outraString.charAt(1)); // Saida == "m"

/* MÉTODO concat() */
// Recebe um valor de argumento para ser concatenado à string
console.log(outraString.concat(" junto com esse.")); // Saida == "Um texto junto com esse."

/* MÉTODO indexOf() */
// Retorna em qual índice começa a string passada como argumento
console.log(outraString.indexOf("texto")); // Saida == 3 (O primeiro t da string)
// Retrona em qual índice começa a string passada como argumento após o índice também passado como argumento
console.log(outraString.indexOf("t", 4)); // Saida == 6 (O segundo t da string)

/* MÉTODO lastIndexOf() */
// Funciona do mesmo jeito que o indexOf só que do final para o início (invertido).
console.log(outraString.lastIndexOf("x")); // Saida == 5
console.log(outraString.lastIndexOf("x", 4)); // Saida == -1 (Não foi encontrado pois a varredura começou após o índice 5)


/* MÉTODO match() */
// Usada para passar expressões regulares como argumento.
console.log(outraString.match(/[a-z]/g)); // Saida == [ 'm', 't', 'e', 'x', 't', 'o' ]

/* MÉTODO search() */
// Retrona o índicie da mesma forma que o indexOf mas aceita também expressões regulares como argumento.
console.log(outraString.search(/x/)); // Saida == 5

/* MÉTODO replace() */
// Substitui um texto por outro e também aceita expressões regulares.
console.log(outraString.replace("Um", "Outro")); // Saida == "Outro texto"
console.log(outraString.replace(/t/, "#")); // Saida == "Um #exto"
console.log(outraString.replace(/t/g, "#")); // Saida == "Um #ex#o"

/* MÉTODO slice() */
// Retorna um texto a partir do índicie passado como argumento ou um texto do tamanho do intervalo passado.
console.log(outraString.slice(1)); // Saida == m texto
console.log(outraString.slice(0)); // Saida == Um texto
console.log(outraString.slice(0, 8)); // Saida == Um texto
console.log(outraString.slice(0, 7)); // Saida == Um text

/* MÉTODO substring() */
// Funciona da mesma forma que o slice porém não aceita índices negativos.
console.log(outraString.substring(0, 7)); // Saida == Um text


/* MÉTODO split() */
const maisOutraString = "O rato roeu a roupa do rei de roma."
// Usa o caractere passado como argumento para dividir a string em pedaços e armazenar cada pedaço em um índice de um array.
console.log(outraString.split(" ")); // Saida == [ 'Um', 'texto' ]
console.log(maisOutraString.split(" ")); // Saida == ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'roma.']
console.log(maisOutraString.split("r", 4)); // Saida == [ 'O ', 'ato ', 'oeu a ', 'oupa do ' ]

/* MÉTODOS toLowerCase() e toUpperCase() */
// Retrona a mesma string mas com todos os caracteres em minúsculo
console.log(outraString.toLowerCase()); // Saida == "um texto"
// Retrona a mesma string mas com todos os caracteres em Maiúsculo
console.log(outraString.toUpperCase()); // Saida == "UM TEXTO"

/**
 * OBS: O valor -1 como resultado desses métodos significa que o valor não foi encontrado.
 */