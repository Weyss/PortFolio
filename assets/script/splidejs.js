'use strict';

import Splide from '@splidejs/splide';

new Splide( '.splide', {
    mediaQuery: 'min',
    height: '42vh',
    arrows: false,
    breakpoints: {
        576: {
            height:'75vh'
        }
    }
} ).mount();