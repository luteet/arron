
const body = document.querySelector('body');

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
    if(previewVideo) {

        let video = document.querySelector('#' + previewVideo.dataset.videoId);
        if(video) {
            previewVideo.classList.add('_hidden');
            setTimeout(() => {
                video.play();
            },200)
            
        }

    }








    let themeBtn = thisTarget.closest('._theme-btn');
    if(themeBtn) {
        
      e.preventDefault();

      if(themeBtn.classList.contains('_light-theme') || !themeBtn.classList.contains('_dark-theme')) {
        
        themeBtn.classList.remove('_light-theme');
        themeBtn.classList.add('_dark-theme');

        localStorage.setItem('theme', 'dark');
        body.classList.add('_dark-theme');

      } else if(themeBtn.classList.contains('_dark-theme')) {
        
        themeBtn.classList.remove('_dark-theme');
        themeBtn.classList.add('_light-theme');

        localStorage.setItem('theme', 'light');
        body.classList.remove('_dark-theme');

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
