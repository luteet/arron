
const html = document.querySelector('html'),
    body = document.querySelector('body'),
    header = document.querySelector('.header');


(function () {
    var FX = {
        easing: {
            linear: function (progress) {
                return progress;
            },
            quadratic: function (progress) {
                return Math.pow(progress, 2);
            },
            swing: function (progress) {
                return 0.5 - Math.cos(progress * Math.PI) / 2;
            },
            circ: function (progress) {
                return 1 - Math.sin(Math.acos(progress));
            },
            back: function (progress, x) {
                return Math.pow(progress, 2) * ((x + 1) * progress - x);
            },
            bounce: function (progress) {
                for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
                    if (progress >= (7 - 4 * a) / 11) {
                        return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
                    }
                }
            },
            elastic: function (progress, x) {
                return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
            }
        },
        animate: function (options) {
            var start = new Date;
            var id = setInterval(function () {
                var timePassed = new Date - start;
                var progress = timePassed / options.duration;
                if (progress > 1) {
                    progress = 1;
                }
                options.progress = progress;
                var delta = options.delta(progress);
                options.step(delta);
                if (progress == 1) {
                    clearInterval(id);

                    options.complete();
                }
            }, options.delay || 10);
        },
        fadeOut: function (element, options) {
            var to = 1;
            this.animate({
                duration: options.duration,
                delta: function (progress) {
                    progress = this.progress;
                    return FX.easing.swing(progress);
                },
                complete: options.complete,
                step: function (delta) {
                    element.style.opacity = to - delta;
                }
            });
        },
        fadeIn: function (element, options) {
            var to = 0;
            element.style.display = 'block';
            this.animate({
                duration: options.duration,
                delta: function (progress) {
                    progress = this.progress;
                    return FX.easing.swing(progress);
                },
                complete: options.complete,
                step: function (delta) {
                    element.style.opacity = to + delta;
                }
            });
        }
    };
    window.FX = FX;
})()






// =-=-=-=-=-=-=-=-=-=-=-=- <popup> -=-=-=-=-=-=-=-=-=-=-=-=

let popupCheck = true, popupCheckClose = true;
function popup(arg) {

    if (popupCheck) {
        popupCheck = false;

        let popup, popupBg, popupClose,

            body = arg.body,
            html = arg.html,
            header = arg.header,
            duration = (arg.duration) ? arg.duration : 200;
        id = arg.id;

        try {

            popup = document.querySelector(id);
            popupBg = popup.querySelector('._popup-bg');
            popupClose = popup.querySelectorAll('._popup-close');

        } catch {
            return false;
        }

        function removeFunc(popup, removeClass) {

            if (popupCheckClose) {
                popupCheckClose = false;


                FX.fadeOut(popup, {
                    duration: duration,
                    complete: function () {
                        popup.style.display = 'none';
                    }
                });
                popup.classList.remove('_active');

                setTimeout(() => {
                    popupCheckClose = true;
                }, duration)

                if (removeClass) {
                    if (header) header.classList.remove('_popup-active');

                    setTimeout(function () {

                        body.classList.remove('_popup-active');
                        html.style.setProperty('--popup-padding', '0px');

                    }, duration)
                }
            }
        }

        body.classList.remove('_popup-active');
        html.style.setProperty('--popup-padding', window.innerWidth - body.offsetWidth + 'px');
        body.classList.add('_popup-active');

        popup.classList.add('_active');
        if (header) header.classList.add('_popup-active');


        setTimeout(function () {
            FX.fadeIn(popup, {
                duration: duration,
                complete: function () {
                }
            });
        }, duration);



        popupClose.forEach(element => {
            element.addEventListener('click', function () {
                if (document.querySelectorAll('._popup._active').length <= 1) {
                    removeFunc(popup, true);
                } else {
                    removeFunc(popup, false);
                }
                setTimeout(function () {
                    return false;
                }, duration)
            });
        })
        

        /* popupCloseBtn.forEach(element => {
            element.addEventListener('click', function () {
                if (document.querySelectorAll('._popup._active').length <= 1) {
                    removeFunc(popup, true);
                } else {
                    removeFunc(popup, false);
                }
                setTimeout(function () {
                    return false;
                }, duration)
            });
        }) */



        setTimeout(() => {
            popupCheck = true;
        }, duration);

    }

}

// =-=-=-=-=-=-=-=-=-=-=-=- </popup> -=-=-=-=-=-=-=-=-=-=-=-=


$('.add-contacts__slider--list').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    appendArrows: $('.add-contacts__slider--nav'),
    prevArrow: '<button type="button" class="slick-prev slider-arrow _prev"><svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M15 18.707L9 12.707L15 6.70703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next slider-arrow _next"><svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M9 18.707L15 12.707L9 6.70703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    dots: true,
});

$('.work-slide').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    dots: true,
    appendArrows: $('.work-slide-nav'),
    prevArrow: '<button type="button" class="slick-prev slider-arrow _prev"><svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M15 18.707L9 12.707L15 6.70703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next slider-arrow _next"><svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M9 18.707L15 12.707L9 6.70703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    /* prevArrow: '<img class="arrow-work" src="img/arrow-left-2.png" alt="arrow">',
    nextArrow: '<img class="arrow-work" src="img/arrow-right-2.png" alt="arrow">', */
});

$('.slider-reviews').slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    appendArrows: $('.arrows-reviews'),
    prevArrow: '<button type="button" class="slick-prev slider-min-arrow _prev"><svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M15 18.707L9 12.707L15 6.70703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next slider-min-arrow _next"><svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M9 18.707L15 12.707L9 6.70703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    dots: true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 524,
            settings: {
                slidesToShow: 1.5,
                infinite: false

            }
        },

    ]
});

$('.slider-orders').slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    appendArrows: $('.arrows-orders'),
    prevArrow: '<button type="button" class="slick-prev slider-min-arrow _prev"><svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M15 18.707L9 12.707L15 6.70703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next slider-min-arrow _next"><svg width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M9 18.707L15 12.707L9 6.70703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    dots: true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 524,
            settings: {
                slidesToShow: 1.5,
                infinite: false

            }
        },

    ]
});

$('.devices-list-adapt').slick({
    infinite: false,
    slidesToShow: 1.5,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 624,
            settings: "unslick"
        }
    ]
});



let thisTarget;
body.addEventListener('click', function (e) {
    thisTarget = e.target;


    let previewVideo = thisTarget.closest('._video-poster');
    if (previewVideo) {

        let video = document.querySelector('#' + previewVideo.dataset.videoId);
        if (video) {
            previewVideo.classList.add('_hidden');
            setTimeout(() => {
                video.play();
            }, 200)

        }

    }








    let themeBtn = thisTarget.closest('._theme-btn');
    if (themeBtn) {

        e.preventDefault();

        if (themeBtn.classList.contains('_light-theme') || !themeBtn.classList.contains('_dark-theme')) {

            themeBtn.classList.remove('_light-theme');
            themeBtn.classList.add('_dark-theme');

            localStorage.setItem('theme', 'dark');
            body.classList.add('_dark-theme');

        } else if (themeBtn.classList.contains('_dark-theme')) {

            themeBtn.classList.remove('_dark-theme');
            themeBtn.classList.add('_light-theme');

            localStorage.setItem('theme', 'light');
            body.classList.remove('_dark-theme');

        }
    }






    let popupOpen = thisTarget.closest('._btn-open-popup');
    if (popupOpen) {
        e.preventDefault();
        popup({
            id: popupOpen.getAttribute('href'),

            html: html,
            body: body,
        })
    }





    let counsultSubmit = thisTarget.closest('.consult-popup__form--submit');
    if(counsultSubmit) {
        e.preventDefault();
        if(document.querySelector('#succses-popup')) {
            popup({
                id: '#succses-popup',
    
                html: html,
                body: body,
            })
        }
    }


})


/* let resizeCheck = {};
function resizeCheckFunc(size, minWidth, maxWidth) {
    if (windowSize >= size && (resizeCheck[String(size)] == false || resizeCheck[String(size)] == undefined)) {
        resizeCheck[String(size)] = true;

        minWidth(); // > size

    } else if (windowSize <= size && (resizeCheck[String(size)] == true || resizeCheck[String(size)] == undefined)) {
        resizeCheck[String(size)] = false;
        maxWidth(); // < size

    }
}

function resize() {
    resizeCheckFunc(992, 
    function () {
        $('.add-contacts__slider--list').slick(addContactsGallery);
    },
    function () {
        $('.add-contacts__slider--list').slick(addContactsGallery);
    })
} */
