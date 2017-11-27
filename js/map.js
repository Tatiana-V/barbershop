/**
 * Created by Tanya on 27.11.2017.
 */
var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
var mapOverlay = document.querySelector(".modal-overlay");

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
});
mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapOverlay.classList.add("modal-overlay-block");
});
mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
        }
    }
});
