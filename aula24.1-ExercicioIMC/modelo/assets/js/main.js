const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const button = document.getElementById('button');
const form = document.getElementById('form');
const resultado = document.getElementById('resultado');

const calcularIMC = () => {
    const resultadoCalculo = Number(peso.value / altura.value ** 2).toFixed(2);
    if(!isNaN(resultadoCalculo)) {
        return resultadoCalculo;
    } else {
        return ' inválido!'
    }
}

const mostrarResultadoIMC = () => {
    const imc = calcularIMC();
    const seuIMC = `Seu IMC é ${imc}`;

    if(peso.value !== '' && altura.value !== '') {
        if(imc === ' inválido!') return `<p class="resultado resultado--bad">${seuIMC}</p>`;
        else if(imc < 18.5) return `<p class="resultado">${seuIMC} (Abaixo do peso)</p>`;
        else if(imc >= 18.5 && imc <= 24.9) return `<p class="resultado">${seuIMC} (Peso normal)</p>`;
        else if(imc >= 25 && imc <= 29.9) return `<p class="resultado">${seuIMC} (Sobrepeso)</p>`;
        else if(imc >= 30 && imc <= 34.9) return `<p class="resultado">${seuIMC} (Obesidade grau 1)</p>`;
        else if(imc >= 35 && imc <= 39.9) return `<p class="resultado">${seuIMC} (Obesidade grau 2)</p>`;
        else return `${seuIMC} (Obesidade grau 3)`;
    } else {
        return '<p class="resultado resultado--bad">Preencha todos os campos!</p>';
    }
}

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
});

button.addEventListener('click', () => {
    resultado.innerHTML = mostrarResultadoIMC();
});
