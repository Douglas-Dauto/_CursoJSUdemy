import GeradorSenha from './modules/GeradorSenha.js';
import './assets/css/style.css';

(function() {
    const button = window.document.querySelector('#button');
    const container = window.document.querySelector('.container');
    const geradorSenha = new GeradorSenha();

    container.addEventListener('click', () => {
        geradorSenha.mudarValor();
    });

    button.addEventListener('click', () => {
        geradorSenha.mostraSenha();
    });

    window.document.querySelector('#caracteres').value = 18;
})();
