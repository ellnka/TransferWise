/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function loadFirebase () {
    const instructionBlocksDiv = document.querySelector('.instructions__blocks');
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
                    <img class="block__img mobile-hidden" src="${block.image}" alt="${block.name}">
                    <div class="block__title content__title content__title--h4">${block.index}. ${block.name}</div>
                    <p class="block__text content__text content__text--grey mobile-hidden">${block.text}</p>
                </div>`;
    return blockDiv.firstElementChild;
}