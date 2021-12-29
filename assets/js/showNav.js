
function myFunction(x) {
    x.classList.toggle("change");
}

const bars = document.querySelector('.js-Bars')
const showNav = document.querySelector('.js-nav-ul')

function showedNav() {
    showNav.classList.toggle('open')
}

bars.addEventListener('click', showedNav)

