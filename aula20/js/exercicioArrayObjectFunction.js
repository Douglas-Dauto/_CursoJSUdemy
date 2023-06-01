function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    // Método antigo
    // form.onsubmit = function(evento) { // evento é uma variável interna.
    //     evento.preventDefault(); // Evita o comportamento padrão do navegador
    // };

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        function criaPessoa(nome, sobrenome, peso, altura) {
            return {
                nome,
                sobrenome,
                peso,
                altura
            }
        }

        pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value))

        resultado.innerHTML = `<br>Nome: ${nome.value}<br> Sobrenome ${sobrenome.value}<br> Peso: ${peso.value}<br> Altura: ${altura.value}`
        console.log(pessoas);
    }

    // Método moderno
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();
