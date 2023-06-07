// if pode ser usado sozinho.
// Sempre que utilizo a palavra else eu preciso de um if antes.
// Eu posso ter vários ou nenhum else if na estrutura.
// Só pode ter um else na estrutura.

const hora = 50;

if(hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if(hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if(hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá!');
}

if(hora === 0) {
    console.log('Vá dormir!');
}

if(hora > 7 && hora < 10 || hora > 5 && hora < 7) {
    console.log('Prepare-se para seu dia!');
} else {
    console.log('Vá dormir!');
}
