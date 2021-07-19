const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    };

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let boxForm = document.querySelector('.form');

    let agradecimento = `<h1>Perfeito!<br/>Enviaremos um e-mail em instantes.</h1>`;

    boxForm.innerHTML = agradecimento;
});
