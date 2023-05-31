/* OBJETOS LITERAIS */
// Objetos literais é basicamente um conjunto de variáveis (atributos) e funções (métodos) separados por vírgulas.
// São chamados de literais pois não há instanciamento e sim a declaração do objeto em si.
const obj = {
    nome: "Douglas", // Atributos do objeto obj
    sobrenome: 'Bastos',
    idade: 21,

    falar() {       // Métodos do objeto obj
        return 'Olá'
    },

    comer() {
        console.log("Estou comendo!");
    }
}
// Estamos chamando atributos e métodos do objeto obj
console.log(obj.sobrenome); // Saida == Bastos
console.log(obj.falar()); // Saida == Olá


/* FUNÇÕES FACTORY */
// São funções normais só que geram vários objetos (quantos quisermos).
function fabricaLapis(t, c, p) { // Esta função retorna um objeto com os valores passadoss nos parâmetros.
    return {
        tamanho: t,
        cor: c,
        ponta: p
    }
}
const lapis1 = fabricaLapis(2.5, 'verde', 0.5);
console.log(lapis1.cor); // Sainda == verde

const lapis2 = fabricaLapis(6.5, 'dourado', 1.5);
console.log(lapis2.cor); // Sainda == dourado

// Exemplo 2
function pessoa(nome, sobrenome, idade) {
    return {
        nome,   // Neste caso como os parâmetros tem o mesmo nome, pode-se eliminar a redundância.
        sobrenome,
        idade,

        falar() {
            return `Olá ${this.nome}` // Palavra this serve para referênciar o objeto que chamou.
        }                             // this.nome == pessoa1.nome ou pessoa2.nome
    }
}
const pessoa1 = pessoa('Douglas', 'Bastos', 21);
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade, pessoa1.falar());
// Saida == Douglas Bastos 21 Olá Douglas

const pessoa2 = pessoa('Luana', 'Dauto', 18);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade, pessoa2.falar());
// Saida == Luana Dauto 18 Olá Luana
