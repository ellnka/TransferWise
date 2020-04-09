'use strict';

/** * banner ***/
function bannerToggle () {
    const btnClose = document.querySelector('.banner__close-icon');
    btnClose.addEventListener('click', (e) => { e.target.closest('.banner').hidden = true; });
}

bannerToggle();
