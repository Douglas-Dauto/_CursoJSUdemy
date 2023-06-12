/* Atribuição via Desestruturação com Objetos */
const obj = {
    nome: 'Douglas',
    sobrenome: 'Bastos',
    idade: 22,
    endereco: {
        rua: 'Travessa Antônio Bandeira',
        cidade: 'Salvador'
    }
}

// Em objetos nós passamos a chave e criamos uma variável no valor para receber o valor do objeto que esta sendo atribuido.
const {nome: meuNome, sobrenome: meuSobrenome, idade: minhaIdade} = obj;
console.log(meuNome, meuSobrenome, minhaIdade); // Saida == Douglas Bastos 22

const {endereco: {rua: minhaRua, cidade: minhaCidade}, endereco: meuEndereco} = obj;
console.log(minhaRua, minhaCidade); // Saida == Travessa Antônio Bandeira Salvador
console.log(meuEndereco); // Saida == { rua: 'Travessa Antônio Bandeira', cidade: 'Salvador' }

// Quando a variável da desestruturação tem o mesmo nome da chave do objeto que esta sendo atribuido não precisa informar a chave na desestruturação.
const {um, dois, tres} = {um: 1, dois: 2, tres: 3};
console.log(um, dois, tres); // Saida == 1 2 3

// Podemos setar valores padrão para as variáveis criadas na desestruturação.
const {zero: num1 = 0, um: num2 = 1} = {zero: '0', um: undefined};
console.log(num1, num2); // Saida == '0' 1

// OBS: Todas as variáveis da atribuição via desestruturação ou são const ou let ou var pois declaramos todas de uma vez só.
