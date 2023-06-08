// Pode ser usada para substituir o if else em casos de checagem da mesma variável.

const data = new Date();
const diaSemana = data.getDay();

switch(diaSemana) {
    case 0:
        console.log('Hoje é Domingo!');
        break;
    case 1:
        console.log('Hoje é Segunda!');
        break;
    case 2:
        console.log('Hoje é Terça!');
        break;
    case 3:
        console.log('Hoje é Quarta!');
        break;
    case 4:
        console.log('Hoje é Quinta!');
        break;
    case 5:
        console.log('Hoje é Sexta!');
        break;
    case 6:
        console.log('Hoje é Sabádo!');
        break;
}

function numero() {
    let numero = 3;

    switch(numero) {
        case 1:
            return 'Um';
        case 2: 
            return 'Dois';
        default: 
            return 'O número é maior que 2'
    }
}

console.log(numero()); // Saida == O número é maior que 2
