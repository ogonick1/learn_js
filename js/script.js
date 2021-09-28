require('es6-promise').polyfill();

import tabs from './moduls/tabs';
import modal from './moduls/modal';
import timer from './moduls/timer';
import cards from './moduls/cards';
import  calc from './moduls/calc';
import forms from './moduls/forms';
import slider from './moduls/slider';
import{openModal} from './moduls/modal';


window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]','.modal','modalTimerId');
    timer('.timer', '2021-11-11');
    cards();
    calc();
    forms('form', 'modalTimerId');
    slider({
        container: '.offer__slider',
        nextArow: '.offer__slider-next',
        prevArow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrepper: '.offer__slider-wrapper',
        slide: '.offer__slide',
        field: '.offer__slider-inner',
    });
});