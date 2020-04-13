"use strict";

/** banner **/
function bannerClose() {
  var btnClose = document.querySelector('.banner__close-icon');
  btnClose.addEventListener('click', function (e) {
    e.target.closest('.banner').classList.add('hidden'); //e.target.closest('.banner').hidden = true;
  });
}
/** common js */


document.addEventListener('DOMContentLoaded', function (e) {
  bannerClose();
});
//# sourceMappingURL=scripts.js.map
