/* Classes */
// As classes funcionam da mesma maneira que funções fabrica e funções construtoras, são moldes para gerar novos objetos.

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falarNome() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

// OBS: Nas classes não é preciso adicionar os métodos no prototype, o javascript já faz isso automaticamente.