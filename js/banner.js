"use strict"

/*** banner ***/

const $banner = document.querySelector(".banner");
const $bannerBtnClose = $banner.querySelector(".banner__close-icon");

$bannerBtnClose.onclick = () => {
    $banner.style.display = "none";
}
