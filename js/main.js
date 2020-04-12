/*
 HTML5 Shiv v3.7.0 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
function setupTabs () {
  document.querySelectorAll(".tabs__button").forEach(button => {
    button.addEventListener("click", () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActvate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);

      sideBar.querySelectorAll(".tabs__button").forEach(button => {
        button.classList.remove("tabs__button--active");
      });
      tabsContainer.querySelectorAll(".tabs__content").forEach(tab=> {
        tab.classList.remove("tabs__content--active");
      });

        button.classList.add("tabs__button--active");
        tabToActvate.classList.add("tabs__content--active");
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
	setupTabs();

  document.querySelectorAll(".tabs").forEach(tabsContainer => {
    tabsContainer.querySelector(".tabs__sidebar .tabs__button").click();
  });
});



























// LIGHT BOX LIGHT BOX LIGHT BOX LIGHT BOX LIGHT BOX LIGHT BOX
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}











// LIGHT BOX LIGHT BOX LIGHT BOX LIGHT BOX LIGHT BOX LIGHT BOX
(() => {

let sigilButtons = document.querySelectorAll('.sigilContainer')
  lightBox = document.querySelector(".lightbox")
  closeLightbox = lightBox.querySelector('.close')
  gotVideo = lightBox.querySelector('video')
  houseName = document.querySelector("h1");
    houseDesc = document.querySelector(".house-info")


function showLightbox() {
 //pop open lightbox and show content
  //start with the house name
  houseName.textContent = `House ${houseData[this.dataset.offset][0]}`;
  houseDesc.textContent = `${houseData[this.dataset.offset][1]}`;
  //debugger
  //Images change


  // need to get the class name from the element so we can match the video source
  let targetName = this.className.split(" ")[1]; //this wil strip out the house name
  let targetSource = targetName.charAt(0).toUpperCase() + targetName.slice(1);
  let newVideoSource = `video/house-${targetSource}.mp4`



  lightBox.classList.add('show-lightbox');
  gotVideo.src = newVideoSource;
  gotVideo.load();
  gotVideo.play();
}

function hideLightbox(){
  lightBox.classList.remove('show-lightbox');
  gotVideo.currentTime = 0;
  gotVideo.pause()
}

function animateBanner() {
  let offSetValue = 600;
  let targetvalue = offSetValue * this.dataset.offset;


  //figure out how to that the banners "slide" using this new value
}

sigilButtons.forEach(button => button.addEventListener("click", showLightbox));
sigilButtons.forEach(button => button.addEventListener("click", animateBanner));
closeLightbox.addEventListener("click", hideLightbox)
})();
