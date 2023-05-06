

$(function () {

    $(".header__nav-list a, .header__top-btn, .footer__info").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 800)
    })


    // ============================= POPUP =============================
    
    $('.header__top-get,.header__button,.form__wrapper').on('click', function (e) {
        e.preventDefault()
        $('.form').toggleClass('form--open')
        $('.overlay').toggleClass('overlay--show')
        $('body').toggleClass('lock')
    
    })
    
    $('.overlay').on('click', function (e) {
        e.preventDefault()
        $('.form').removeClass('form--open')
        $('.overlay').removeClass('overlay--show')
        $('body').removeClass('lock')
    
    })

    // ============================= SLAIDER =============================
    $('.resources__slide-list').slick({
        infinite: true,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        draggable: true,
        dots: true,
        appendArrows: $('.resources__slider-arrows'),

        dots: false,
        appendDots: $('.customers__slider-buttons'),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                },
            },
            {
                breakpoint: 600,
                settings: {
                    draggable: true,
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    draggable: true,
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    draggable: true,
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ],

    })
    $('.resources__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.resources__slide-list').slick('slickPrev')
    })
    $('.resources__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.resources__slide-list').slick('slickNext')
    })


    //     // ============================= QUIZ ======================

    function quiz() {
        const back = document.querySelector('.quiz__buttons-prev'),
            further = document.querySelector('.quiz__buttons-next'),
            number = document.querySelector('.quiz__number span'),
            answer = document.querySelectorAll('.quiz__item'),
            questions = document.querySelectorAll('.quiz__slide');

        let scale = 1;

        // Провека scale на число
        function deleteBack() {
            if (scale === 1) {
                back.style.display = 'none';
            } else {
                back.style.display = 'block';
            }
        }

        deleteBack();

        // Добовляем атрибуты к вопросам
        for (let i = 0; i <= questions.length; i++) {
            try {
                questions[i].setAttribute('data-questions', i);
            } catch { }
        }

        // У всех блоков none кроме scale
        function hideQuestions() {
            questions.forEach(question => {
                question.style.display = 'none';
            })
            questions[scale - 1].style.display = 'block';
        }

        hideQuestions();

        // Добовлям атрибуты к ответам
        for (let i = 0; i <= answer.length; i++) {
            try {
                answer[i].setAttribute('data-list', i);
            } catch { }
        }

        // Cтили для ответа
        function buttonStyle(num, attribute) {

            // Пойск контейнера в котором был пройзведен клик
            const wrapper = attribute.closest('.quiz__slide');

            // Пойск всех ответов в контейнере 
            const wrapperAnswers = wrapper.querySelectorAll(".quiz__slide .quiz__item");

            // Пойск одного ответа 
            const btn = wrapper.querySelector(`[data-list="${num}"]`)


            wrapperAnswers.forEach(item => {
                item.style.background = 'rgba(255,255,255,.05)';
            });

            btn.style.background = '#da4533';
        }

        // Увеличить scale на 1 ед
        function plusNumber() {
            if (scale == 8) {
                return;
            } else {
                scale++;
                number.innerHTML = `${scale}`;
            }

        }


        // Уменьшить scale на 1 ед
        function minusNumber() {
            if (scale == 1) {
                return;
            } else {
                scale--;
                number.innerHTML = `${scale}`;
            }
            deleteBack();
        }

        // При нажатий сброс и активация функций
        back.addEventListener('click', function (e) {
            e.preventDefault();
            minusNumber();
            hideQuestions();
        });

        // При нажатий сброс и активация функций
        further.addEventListener('click', function (e) {
            e.preventDefault();
            plusNumber();
            hideQuestions();
            deleteBack();
        });

        function condition(e) {
            const attribute = e.target.closest('.quiz__item');
            const answer = e.target.closest('.quiz__slide [data-list]');

            // Пойск цифры атрибута
            const number = answer.getAttribute('data-list');

            // Передача aтрибутов
            buttonStyle(number, attribute);

        }

        // Пойск по клику атрибута ответа
        window.addEventListener('click', function (e) {
            if (e.target.closest('.quiz__item')) {
                condition(e);
            }
        })

        answer.forEach(item => {
            item.addEventListener('keydown', function (e) {
                if (e.code === 'Enter') {
                    condition(e);
                }
            });
        })

    }



    try {
        (function () {
            const t = document.querySelector(".quiz__buttons-prev")
                , e = document.querySelector(".quiz__buttons-next")
                , n = document.querySelector(".quiz__number span")
                , i = document.querySelectorAll(".quiz__item")
                , o = document.querySelectorAll(".quiz__slide");
            let a = 1;
            function r() {
                t.style.display = 1 === a ? "none" : "block"
            }
            r();
            for (let t = 0; t <= o.length; t++)
                try {
                    o[t].setAttribute("data-questions", t)
                } catch { }
            function s() {
                o.forEach((t => {
                    t.style.display = "none"
                }
                )),
                    o[a - 1].style.display = "block"
            }
            s();
            for (let t = 0; t <= i.length; t++)
                try {
                    i[t].setAttribute("data-list", t)
                } catch { }
            function c(t) {
                const e = t.target.closest(".quiz__item");
                !function (t, e) {
                    const n = e.closest(".quiz__slide")
                        , i = n.querySelectorAll(".quiz__slide .quiz__item")
                        , o = n.querySelector(`[data-list="${t}"]`);
                    i.forEach((t => {
                        t.style.background = "rgba(255,255,255,.05)"
                    }
                    )),
                        o.style.background = "#da4533"
                }(t.target.closest(".quiz__slide [data-list]").getAttribute("data-list"), e)
            }
            t.addEventListener("click", (function (t) {
                t.preventDefault(),
                    1 != a && (a--,
                        n.innerHTML = `${a}`,
                        r()),
                    s()
            }
            )),
                e.addEventListener("click", (function (t) {
                    t.preventDefault(),
                        8 != a && (a++,
                            n.innerHTML = `${a}`),
                        s(),
                        r()
                }
                )),
                window.addEventListener("click", (function (t) {
                    t.target.closest(".quiz__item") && c(t)
                }
                )),
                i.forEach((t => {
                    t.addEventListener("keydown", (function (t) {
                        "Enter" === t.code && c(t)
                    }
                    ))
                }
                ))
        }
        )(),



            function () {


                function i(t) {
                    e.forEach((t => {
                        t.style.display = "none"
                    }
                    )),
                        n.forEach((t => {
                            t.style.color = "#5c5c5c"
                        }
                        )),
                        e[t].style.display = "block",
                        n[t].style.color = "#da4533"
                }
                function o(t) {
                    i(t.target.closest("[data-button]").getAttribute("data-button"))
                }
                i(1),
                    n.forEach((t => {
                        t.addEventListener("keydown", (function (t) {
                            "Enter" === t.code && o(t)
                        }
                        )),
                            t.addEventListener("click", (function (t) {
                                o(t)
                            }
                            ))
                    }
                    ))
            }()
    } catch { }

    var t;



});
// ==================== TEAM =======================

var mixer = mixitup('.team__forum');

$('.team__filter-btn').on('click', function () {
    $('.team__filter-btn').removeClass('team__filter-btn--active')
    $(this).addClass('team__filter-btn--active')
})


// ============================= CASES-SLAIDER =============================
$('.cases__slider').slick({
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    draggable: true,
    dots: true,
    appendArrows: $('.cases__slider-arrows'),

    dots: false,
    appendDots: $('.cases__slider-buttons'),
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1
            },
        },
        {
            breakpoint: 570,
            settings: {
                draggable: true,
                slidesToShow: 1,
                arrows: false,
            }
        }
    ],

})
$('.cases__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.cases__slider').slick('slickPrev')
})
$('.cases__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.cases__slider').slick('slickNext')
})


// ============================= TEAM-SLAIDER =============================
$('.team__slider-list').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    draggable: true,
    dots: true,
    appendArrows: $('.team__slider-arrows'),

    dots: false,
    appendDots: $('.team__slider-buttons'),
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3
            },
        },
        {
            breakpoint: 480,
            settings: {
                draggable: true,
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 360,
            settings: {
                draggable: true,
                slidesToShow: 1,
                arrows: false,
            }
        }
    ],

})
$('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider-list').slick('slickPrev')
})
$('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider-list').slick('slickNext')
})


// ============================= BURGER =============================

$('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.menu__wrapper').toggleClass('menu--open')
    $('.overlay').toggleClass('overlay--show')
    $('body').toggleClass('lock')
    $('.burger').toggleClass('burger--active')

})

$('.menu__wrapper, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.menu__wrapper').removeClass('menu--open')
    $('.overlay').removeClass('overlay--show')
    $('body').removeClass('lock')
    $('.burger').removeClass('burger--active')

})
setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.menu__wrapper').hasClass('menu--open') === false) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
}, 0);


