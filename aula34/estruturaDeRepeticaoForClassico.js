/* 
    Estrutura for (clássico) - Estrutura de Repetição com Variável de Controle
*/

/* 
    Esta estrutura funciona de uma forma parecida com o while, com a diferença que possui três partes, inicialização, teste, incremento ou decremento.
	Esta estrutura tem uma própria variável e pode incrementar e decrementar valores.


    Sintaxe: for (Inicialização;Teste;Incremento ou Decremento) {
        
            }


    Primeiro é feito Inicialização, depois o Teste Lógico, depois a Execução do Bloco, por último o Incremento ou Decremento.
    Para os Comandos e o Incremento ou Decremento acontecer o Teste Lógico tem que ser Verdadeiro.
    O Incremento e Decremento é feito no momento do loop.
*/

for (let i = 0; i <= 10; i++) {
    console.log(`O valor agora é ${i}`) // Saida == O valor agora é 0, O valor agora é 1, O valor agora é 2, O valor agora é 3, O valor agora é 4, O valor agora é 5, O valor agora é 6, O valor agora é 7, O valor agora é 8, O valor agora é 9, O valor agora é 10.
}

for (let i = 20; i >= 10; i--) {
    console.log(`O valor agora é ${i}`) // Saida == O valor agora é 20, O valor agora é 19, O valor agora é 18, O valor agora é 17, O valor agora é 16, O valor agora é 15, O valor agora é 14, O valor agora é 13, O valor agora é 12, O valor agora é 11, O valor agora é 10.
}

// OBS: Laços aninhados funcionaram da seguinte forma: O primeiro laço começa o loop, quando chegar no segundo laço, ele fará seu loop completo e só depois o fluxo retorna para o laço exterior para ele prosseguir com o segundo loop, no segundo loop do laço exterior ativará novamente o segundo laço e ele novamente irá fazer seu loop completo, e assim vai até o primeiro laço terminar todos seus loops.

// Pode-se omitir partes:
for (let i = 1; i < 2; ) {
    console.log(`O valor agora é ${i}`) // Saida == O valor agora é 1 (infinitamente)
}
