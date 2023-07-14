/* FUNÇÃO CONSTRUTORA (COSTRUCTOR FUNCTION) */
// São funções que criam novos objetos.
// A função construtora faz exatamente a mesma coisa que a função fábrica (factory function).

function Pessoa(nome, sobrenome) {
    // Atributos e Métodos Privados (Internos)
    const id = 9283;
    
    function correr() {
        console.log('Correndo...');
    }

    // Atributos e Métodos Públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.andar = () => {
        console.log('Andando...');
    }
}

const pessoaUm = new Pessoa('Douglas', 'Dauto Bastos'); // A palavra new já cria o objeto e o retorna.
const pessoaDois = new Pessoa('Luana', 'Oliveira Dauto');
