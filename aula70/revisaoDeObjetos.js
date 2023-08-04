const obj = {
    nome: 'Douglas',
    sobrenome: 'Dauto Bastos',

    exibirNome() {
        return `${obj.nome} ${obj.sobrenome}`;
    }
};

obj.id = 0;

console.log(obj.id);
console.log(obj['id']);

console.log(obj.nome);
console.log(obj['nome']);

console.log(obj.sobrenome);
console.log(obj['sobrenome']);

console.log(obj.exibirNome());
console.log(obj['exibirNome']());

for(let chave in obj) {
    console.log(obj[chave]);
}

const obj2 = new Object();
obj2.nome = 'Luana';
obj2.sobrenome = 'Dauto Bastos';
obj2.falarNome = function() {
    return `${this.nome} ${this.sobrenome}`;
};

console.log(obj2);

function criaPessoa(nome, sobrenome, falarNome) {
    return {
        nome,
        sobrenome,
        falarNome
    }
}

const obj3 = criaPessoa('Lieci', 'Oliveria Dauto', function() {
    return `${obj3.nome} ${obj3.sobrenome}`;
});

console.log(obj3.nome);
console.log(obj3.sobrenome);
console.log(obj3.falarNome());

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falarNome = function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

// A palavra new cria um objeto vazio, faz o this apontar para o objeto e retorna o this.
const obj4 = new Pessoa('Alexandre', 'de Carvalho Bastos Júnior');

console.log(obj4.nome);
console.log(obj4.sobrenome);
console.log(obj4.falarNome());


function Carro(nome, marca) {
    this.nome = nome;
    this.marca = marca;

    Object.freeze(this); // Congela o objeto (trava), não poderá mais ser modificado.
}

const carro = new Carro('Uno', 'Fiat');

carro.id = 0; // Não sera aplicado pois o freeze congela o objeto.
delete carro.marca; // Não sera aplicado pois o freeze congela o objeto.

console.log(carro);