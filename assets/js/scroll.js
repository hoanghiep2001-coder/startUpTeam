window.onscroll = () => {

    let scroll = document.querySelector('header');

    if (window.pageYOffset > 0 ) {
        scroll.classList.add('sticky');
    } else {
        scroll.classList.remove('sticky');
    }
}

$(document).ready(function() {
    $(window).scroll(function(event) {
        var bodyPosition = $('html').scrollTop();
        console.log(bodyPosition);
        const bodyService = $('.body-services-content').offset().top;
        console.log(bodyService);
        const bodyWedding = $('.body-wedding-video').offset().top;
        const bodyInstagram = $('.body-instagram-container').offset().top;
        const bodyAboutUs = $('.body-aboutUs').offset().top;
        const bodyTeamInfo = $('.body-teams-info').offset().top;
        // body Services
        if (bodyPosition > bodyService - 500) {
            $('.body-services-heading').addClass('animated-ToLeft')
            $('[data-body-services-row]').addClass('animated-Up')
        } else {
            $('.body-services-heading').removeClass('animated-ToLeft')
            $('[data-body-services-row]').removeClass('animated-Up')
        }
        // body about us
        if (bodyPosition > bodyAboutUs - 500) {
            $('.body-aboutUs-col:first-child').addClass('animated-ToLeft')
            $('.body-aboutUs-col:last-child').addClass('animated-ToRight')
        } else {
            $('.body-aboutUs-col:first-child').removeClass('animated-ToLeft')
            $('.body-aboutUs-col:last-child').removeClass('animated-ToRight')
        }
        // body team info
        if (bodyPosition > bodyTeamInfo -500) {
            $('.body-teams-row').addClass('animated-ToLeft')
            function loading(ms) {
                return new Promise(function(resolve) {
                    setTimeout(resolve, ms);
                });
            }
            loading(700)
            .then(function() {
                $('.promotions-col:first-child').addClass('animated-Left')
                return loading(700)
            })
            .then(function() {
                $('.promotions-col:nth-child(2)').addClass('animated-Down')
                return loading(700)
            })
            .then(function() {
                $('.promotions-col:nth-child(3)').addClass('animated-Right')
                return loading(700)
            })
            .then(function() {
                $('.promotions-col:nth-child(4)').addClass('animated-Left')
                return loading(700)
            })
            .then(function() {
                $('.promotions-col:nth-child(5)').addClass('animated-Up')
                return loading(700)
            })
            .then(function() {
                $('.promotions-col:nth-child(6)').addClass('animated-Right')
                return loading(700)
            })
        } else {
            $('.body-teams-row').removeClass('animated-ToLeft')
            function loading(ms) {
                return new Promise(function(resolve) {
                    setTimeout(resolve, ms);
                });
            }
            loading(700)
            .then(function() {
                $('.promotions-col:first-child').removeClass('animated-Left')
                return loading(700)
            })
            .then(function() {
                $('.promotions-col:nth-child(2)').removeClass('animated-Down')
                return loading(700)
            })
            .then(function() {
                $('.promotions-col:nth-child(3)').removeClass('animated-Right')
                return loading(700)
            })
            .then(function() {
                $('.promotions-col:nth-child(4)').removeClass('animated-Left')
                return loading(700)
            })
            .then(function() {
                $('.promotions-col:nth-child(5)').removeClass('animated-Up')
                return loading(700)
            })
            .then(function() {
                $('.promotions-col:nth-child(6)').removeClass('animated-Right')
                return loading(700)
            })
        }
        // wedding video
        if (bodyPosition > bodyWedding - 500) {
            $('.body-wedding-video-row').addClass('animated-ToRight')
        } else {
            $('.body-wedding-video-row').removeClass('animated-ToRight')
        }
        // instagram
        if (bodyPosition > bodyInstagram - 500) {
            $('.body-instagram-row').addClass('animated-ToLeft')
            function loading(ms) {
                return new Promise(function(resolve) {
                    setTimeout(resolve, ms);
                });
            }
            loading(700)
            .then(function() {
                $('.body-instagram-img-col:first-child').addClass('animated-ToDown')
                return loading(700)
            })
            .then(function() {
                $('.body-instagram-img-col:nth-child(2)').addClass('animated-ToUp')
                return loading(700)
            })
            .then(function() {
                $('.body-instagram-img-col:nth-child(3)').addClass('animated-ToDown')
                return loading(700)
            })
            .then(function() {
                $('.body-instagram-img-col:nth-child(4)').addClass('animated-ToUp')
                return loading(700)
            })
            .then(function() {
                $('.body-instagram-img-col:nth-child(5)').addClass('animated-ToDown')
                return loading(700)
            })
            .then(function() {
                $('.body-instagram-img-col:nth-child(6)').addClass('animated-ToUp')
                return loading(700)
            })
        } else {
            $('.body-instagram-row').removeClass('animated-ToLeft')
            function loading(ms) {
                return new Promise(function(resolve) {
                    setTimeout(resolve, ms);
                });
            }
            loading(700)
            .then(function() {
                $('.body-instagram-img-col:first-child').removeClass('animated-ToDown')
                return loading(700)
            })
            .then(function() {
                $('.body-instagram-img-col:nth-child(2)').removeClass('animated-ToUp')
                return loading(700)
            })
            .then(function() {
                $('.body-instagram-img-col:nth-child(3)').removeClass('animated-ToDown')
                return loading(700)
            })
            .then(function() {
                $('.body-instagram-img-col:nth-child(4)').removeClass('animated-ToUp')
                return loading(700)
            })
            .then(function() {
                $('.body-instagram-img-col:nth-child(5)').removeClass('animated-ToDown')
                return loading(700)
            })
            .then(function() {
                $('.body-instagram-img-col:nth-child(6)').removeClass('animated-ToUp')
                return loading(700)
            })
        }
    })
})