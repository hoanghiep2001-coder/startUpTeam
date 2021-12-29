const loadingBody = document.querySelector('.load')
loadingBody.style.height = window.innerHeight + 'px';

$(window).on('load', function(event) {
    $('body').removeClass('preloading')
    $('.load').delay(4000).fadeOut('fast');
})

function openApp() {
    const app = document.querySelector('.app')
    app.classList.add('open')
}

setTimeout(openApp, 4700)