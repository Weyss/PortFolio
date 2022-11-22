'use strict';

import Swiper, { EffectFade, Navigation, Pagination } from 'swiper';

const slide = Array.from(document.querySelectorAll('.swiper-slide'));
const array = ['Me Concernant', 'Connaissances', 'Formations']

slide.forEach((element, index) => {
    const span = document.createElement('span')
    const swiperPagination = document.querySelector('.swiper-pagination')
    
    span.dataset.ref = `${element.getAttribute('id')}`
    span.innerText = array[index]
    swiperPagination.append(span)
})

const swiper = new Swiper('.mySwiper', {
    // configure Swiper to use modules
    modules: [EffectFade, Navigation, Pagination],
    breakpoints: {
        0: {
            navigation: {
                enabled: false
            }
        },
        992: {
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            const paginationCollection = swiper.pagination.el.children
            let spanCurrent = paginationCollection[current - 1]
            
            for (let index in slide) {
                if (spanCurrent.dataset.ref === slide[index].getAttribute('id')) {
                    spanCurrent.classList.add('js-span-actif')
                }
                else if (paginationCollection[index] !== spanCurrent
                    && paginationCollection[index].classList.contains('js-span-actif')) {
                    paginationCollection[index].classList.remove('js-span-actif')
                }
            }
        }
    },
});

