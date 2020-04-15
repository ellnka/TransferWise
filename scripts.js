"use strict";

/** banner **/
function bannerClose() {
  var btnClose = document.querySelector('.banner__close-icon');
  btnClose.addEventListener('click', function (e) {
    e.target.closest('.banner').classList.add('hidden'); //e.target.closest('.banner').hidden = true;
  });
}
/** common js */


document.addEventListener('DOMContentLoaded', function () {
  bannerClose();
  loadFirebase();
});
/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */

function loadFirebase() {
  var instructionBlocksDiv = document.querySelector('.instructions__blocks');
  console.log(instructionBlocksDiv);
  var config = {
    apiKey: 'AIzaSyAl8cG6NY0q0gnIPyXBw_n_jJEJ2P7G02g',
    authDomain: 'transferwise-ac780.firebaseapp.com',
    databaseURL: 'https://transferwise-ac780.firebaseio.com/',
    storageBucket: 'bucket.appspot.com'
  };
  firebase.initializeApp(config);
  firebase.database().ref('/blocks').once('value').then(function (snapshot) {
    instructionBlocksDiv.classList.remove('align-center');
    instructionBlocksDiv.querySelector('.loader').remove();
    var blockCount = snapshot.numChildren();

    for (var i = 0; i < blockCount; i++) {
      var block = snapshot.child(i).val();
      if (!block) continue;
      var blockDiv = createBlockDiv(block);
      instructionBlocksDiv.append(blockDiv);
    }
  });
}

function createBlockDiv(block) {
  var blockDiv = document.createElement('div');
  blockDiv.innerHTML = "\n                <div class=\"instructions__block block\">\n                    <img class=\"block__img\" src=\"".concat(block.image, "\" alt=\"").concat(block.name, "\">\n                    <div class=\"block__title content__title content__title--h4\">").concat(block.index, ". ").concat(block.name, "</div>\n                    <p class=\"block__text content__text content__text--grey\">").concat(block.text, "</p>\n                </div>");
  return blockDiv.firstElementChild;
}

jQuery(document).ready(function () {
  jQuery('.bxslider').bxSlider({
    auto: true
  });
});
//# sourceMappingURL=scripts.js.map
