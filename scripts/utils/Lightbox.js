/* global displayModal, closeModal, DOM, MediaFactory, FISHEYE*/

function openLightbox(){
  displayModal(DOM.lightboxModal);
  DOM.closeLightboxButton.focus();
}

function closeLigthbox(){
  closeModal(DOM.lightboxModal);
  DOM.filterButton.focus();
}

function displayMediumLightBox(medium){
  const lightboxMedium = document.querySelector(".lightbox__medium");
  lightboxMedium.innerHTML = "";
  const displayMedium = MediaFactory(medium);
  lightboxMedium.innerHTML = `
    <div class="picture-frame"> 
    <div>
      ${displayMedium}
      <h2>${medium.title}</h2>
    </div>
  </div>
  `;
}

function onClickMedium(article){
  const medium = FISHEYE.portfolio.filter(medium => medium.id === parseInt(article.id))[0];
  FISHEYE.currentMediaPosition = FISHEYE.portfolio.indexOf(medium);
  openLightbox();
  displayMediumLightBox(medium);
}

function goToNextSlide(){
  if (FISHEYE.currentMediaPosition === (FISHEYE.portfolio.length - 1)){
    FISHEYE.currentMediaPosition = 0
  }else{
    FISHEYE.currentMediaPosition++
  }
  displayMediumLightBox(FISHEYE.portfolio[FISHEYE.currentMediaPosition]);
}

function goToPreviousSlide(){
  if (FISHEYE.currentMediaPosition === 0){
    FISHEYE.currentMediaPosition = FISHEYE.portfolio.length - 1;
  }else{
    FISHEYE.currentMediaPosition--;
  }
  displayMediumLightBox(FISHEYE.portfolio[FISHEYE.currentMediaPosition]);
}

function lightboxLink(){
  const articles = document.querySelectorAll(`article`);  
  articles.forEach(article => {
    article.addEventListener('click', function() { 
      onClickMedium(article)
    })
  });
}

function lightboxControl(){
  DOM.closeLightboxButton.addEventListener('click', function() { 
    closeLigthbox();
  });

  DOM.rightButton.addEventListener('click', function() { 
    goToNextSlide();
  });

  DOM.leftButton.addEventListener('click', function() { 
    goToPreviousSlide();
  });

  document.addEventListener("keydown", function(event){
    const keyCode = event.keyCode
 
    if (DOM.lightboxModal.getAttribute('aria-hidden') == 'false' && keyCode === 27) {
      closeLigthbox()
    }
    if (DOM.lightboxModal.getAttribute('aria-hidden') == 'false' && keyCode === 39) {
      goToNextSlide()
    }
    if (DOM.lightboxModal.getAttribute('aria-hidden') == 'false' && keyCode === 37) {
      goToPreviousSlide()
    }
    // for Contact Form
    if (DOM.contactModal.getAttribute('aria-hidden') == 'false' && keyCode === 27) {
      closeModal(DOM.contactModal);
    }
  })
}

/* eslint-disable no-unused-vars */
function lightbox(){
  lightboxLink();
  lightboxControl();
}

