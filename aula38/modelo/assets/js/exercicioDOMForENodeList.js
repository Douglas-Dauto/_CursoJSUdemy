const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body); // Pega os estilos carregados pelo browser
const backgroundColorBody = estilosBody.backgroundColor;

for(let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}
