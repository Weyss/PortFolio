'use strict';

import Swiper, { EffectFade, Pagination } from 'swiper';

const slide = document.querySelectorAll('.swiper-slide');
const swiperPagination = document.querySelector('.swiper-pagination')
const array = ['Me Concernant', 'Connaissances', 'Formations']

for (let i of slide.keys()) {
    const span = document.createElement('span')

    span.setAttribute('class', 'swiper-pagination-custom')
    span.setAttribute('data-ref', `${slide[i].getAttribute('id')}`)
    span.innerText = array[i]
    swiperPagination.append(span)
}


const swiper = new Swiper('.mySwiper', {
    // configure Swiper to use modules
    modules: [Pagination, EffectFade],
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            let spanCurrent = swiperPagination.children[current - 1]

            for (let key of slide.keys()) {
                if (spanCurrent.getAttribute('data-ref') === slide[key].getAttribute('id')) {
                    spanCurrent.classList.add('js-span-actif')
                }
                else if (swiperPagination.children[key] !== spanCurrent
                    && swiperPagination.children[key].classList.contains('js-span-actif')) {
                    swiperPagination.children[key].classList.remove('js-span-actif')
                }
            }
        }
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

