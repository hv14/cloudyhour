//import {LocomotiveScroll} from './node_modules/locomotive-scroll';

import LocomotiveScroll from 'https://cdn.skypack.dev/locomotive-scroll';
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});