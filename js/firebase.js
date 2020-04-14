/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function loadFirebase () {
    const instructionBlocksDiv = document.querySelector('.instructions__blocks');
    let blockDivInnerHTML = '';

    const config = {
        apiKey: 'AIzaSyAl8cG6NY0q0gnIPyXBw_n_jJEJ2P7G02g',
        authDomain: 'transferwise-ac780.firebaseapp.com',
        databaseURL: 'https://transferwise-ac780.firebaseio.com/',
        storageBucket: 'bucket.appspot.com'
    };
    firebase.initializeApp(config);
    firebase.database().ref('/blocks').once('value').then((snapshot) => {
        const blockCount = snapshot.numChildren();
        for (let i = 0; i < blockCount; i++) {
            const block = snapshot.child(i).val();
            if (!block) continue;

            blockDivInnerHTML += `
                <div class="instructions__block block">
                    <img class="block__img" src="${block.image}" alt="${block.name}">
                    <div class="block__title content__title content__title--h4">${block.index}. ${block.name}</div>
                    <p class="block__text content__text content__text--grey">${block.text}</p>
                </div>
            `;
        }
        instructionBlocksDiv.innerHTML = blockDivInnerHTML;
        instructionBlocksDiv.classList.remove('align-center');
    });
}
