function request(obj) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
}

window.document.addEventListener('click', (e) => {
    const tag = e.target;

    e.preventDefault();

    if(tag.classList.contains('a-pag-3')) {
        loadPage(false, undefined, e.target);
    } else {
        loadPage(true, 'http://viacep.com.br/ws/40713030/json', e.target);
    }
});

async function loadPage(control = false, url = '', el) {
    let urlEl = el.getAttribute('href');
    
    if(control) {
        urlEl = url;
    }

    try {
        const response = await request({
            method: 'GET',
            url: urlEl
        });
    
        loadResult(response, el);
    } catch(e) {
        console.log(e);
    }
}

function loadResult(response, el) {
    const result = window.document.querySelector('#resultado');
    const responseObj = JSON.parse(response);

    if(el.classList.contains('a-pag-3') || el.classList.contains('a-pag-2')) {
        result.innerHTML = response;
    } else {
        result.innerHTML = responseObj.cep;
        result.innerHTML += ' ' + responseObj.logradouro;
        result.innerHTML += ' ' + responseObj.bairro;
    }
}