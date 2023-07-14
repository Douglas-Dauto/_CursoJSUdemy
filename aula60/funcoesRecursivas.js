/* FUNÇÕES RECURSIVAS */
// Funções recursivas são funções que chamam elas mesmas dentro do seu corpo.
// Elas podem ser usadas como estruturas de repetição.
function recursiva(max) {
    if(max > 500) return;
    console.log(max);
    max++;
    recursiva(max); // Se chamando
}
recursiva(0);
