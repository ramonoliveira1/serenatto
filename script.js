const modoNoturo = document.getElementById('modo-noturno');
const corpo = document.querySelector('body');

modoNoturo.addEventListener('click', () => {
    const modo = modoNoturo.checked ? 'dark' : 'light'
    corpo.setAttribute("data-bs-theme", modo)
})