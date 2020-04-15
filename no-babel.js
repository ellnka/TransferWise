/** banner **/
function bannerClose () {
    const btnClose = document.querySelector('.banner__close-icon');
    btnClose.addEventListener('click',
        (e) => {
            e.target.closest('.banner').classList.add('hidden');
            //e.target.closest('.banner').hidden = true;
        });
}

/** common js */
document.addEventListener('DOMContentLoaded', () => {
    bannerClose();
    loadFirebase();
});

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function loadFirebase () {
    const instructionBlocksDiv = document.querySelector('.instructions__blocks');
    console.log(instructionBlocksDiv);
    const config = {
        apiKey: 'AIzaSyAl8cG6NY0q0gnIPyXBw_n_jJEJ2P7G02g',
        authDomain: 'transferwise-ac780.firebaseapp.com',
        databaseURL: 'https://transferwise-ac780.firebaseio.com/',
        storageBucket: 'bucket.appspot.com'
    };
    firebase.initializeApp(config);
    firebase.database().ref('/blocks').once('value').then((snapshot) => {
        instructionBlocksDiv.classList.remove('align-center');
        instructionBlocksDiv.querySelector('.loader').remove();
        const blockCount = snapshot.numChildren();
        for (let i = 0; i < blockCount; i++) {
            const block = snapshot.child(i).val();
            if (!block) continue;
            const blockDiv = createBlockDiv(block);
            instructionBlocksDiv.append(blockDiv);
        }
    });
}

function createBlockDiv (block) {
    const blockDiv = document.createElement('div');
    blockDiv.innerHTML = `
                <div class="instructions__block block">
                    <img class="block__img" src="${block.image}" alt="${block.name}">
                    <div class="block__title content__title content__title--h4">${block.index}. ${block.name}</div>
                    <p class="block__text content__text content__text--grey">${block.text}</p>
                </div>`;
    return blockDiv.firstElementChild;
}

jQuery(document).ready(function () {
    jQuery('.bxslider').bxSlider({
        auto: true
    });
});