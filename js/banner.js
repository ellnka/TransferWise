/** banner **/
function bannerClose () {
    const btnClose = document.querySelector('.banner__close-icon');
    btnClose.addEventListener('click',
        (e) => {
           // e.target.closest('.banner').classList.add('hidden');
            e.target.closest('.banner').hidden = true;
        });
}
