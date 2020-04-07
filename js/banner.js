"use strict"

/*** banner ***/

const $banner = document.querySelector(".banner");
const $bannerBtnClose = $banner.querySelector(".button-close");

$bannerBtnClose.onclick = () => {
    $banner.style.display = "none";
}
