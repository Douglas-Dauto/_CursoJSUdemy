/* Métodos estáticos */
// Métodos estáticos são funções que são chamadas diretamente pela classe, elas não possuem dados de instância.
// Métodos estáticos diz respeito a classe em si e não a uma instância da classe.
// Dentro dos métodos estáticos o this aponta para a própria classe e não para uma instância.

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Método de instância
    falarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    // Método estático
    static fazerSoma(x, y) {
        return x + y;
    }
}

const instanciaPessoa = new Pessoa('Douglas', 'Bastos');

instanciaPessoa.falarNomeCompleto(); // Chamada do método de instância
Pessoa.fazerSoma(); // Chamada do método estático