const menu = document.querySelectorAll
    ('.lista .navicon li a');

menu.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        menu.forEach(i => {
            i.parentElement.classList.remove
                ('ativo');
        })
        li.classList.add('ativo');
    })
});

const menuBarra = document.querySelector('.conteudo nav .bx.bx-menu');
const navBar = document.querySelector('.lista');

menuBarra.addEventListener('click', () => {
    navBar.classList.toggle('close');
});