function openLightbox(){
  displayModal(lightboxModal)
}

function closeLigthbox(){
  closeModal(lightboxModal)
}

function displayMediumLightBox(medium){
  const lightboxMedium = document.querySelector(".lightbox__medium");
  lightboxMedium.innerHTML = "";
  const displayMedium = MediaFactory(medium);
  lightboxMedium.innerHTML = `
    ${displayMedium}
    <h2>${medium.title}</h2>
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
  };
  displayMediumLightBox(FISHEYE.portfolio[FISHEYE.currentMediaPosition]);
}

function goToPreviousSlide(){
  if (FISHEYE.currentMediaPosition === 0){
    FISHEYE.currentMediaPosition = FISHEYE.portfolio.length - 1;
  }else{
    FISHEYE.currentMediaPosition--;
  };
  displayMediumLightBox(FISHEYE.portfolio[FISHEYE.currentMediaPosition]);
}

function lightboxLink(){
  const articles = document.querySelectorAll(`article`);  
  articles.forEach(article => {
    article.addEventListener('click', function(event) { 
      onClickMedium(article)
    })
  });
}

function lightboxControl(){
  closeLightboxButton.addEventListener('click', function(event) { 
    closeLigthbox();
  });

  rightButton.addEventListener('click', function(event) { 
    goToNextSlide();
  });

  leftButton.addEventListener('click', function(event) { 
    goToPreviousSlide();
  });

  document.addEventListener("keydown", function(event){
    const keyCode = event.keyCode
 
    if (lightboxModal.getAttribute('aria-hidden') == 'false' && keyCode === 27) {
      closeLigthbox()
    }
    if (lightboxModal.getAttribute('aria-hidden') == 'false' && keyCode === 39) {
      goToNextSlide()
    }
    if (lightboxModal.getAttribute('aria-hidden') == 'false' && keyCode === 37) {
      goToPreviousSlide()
    }
    // for Contact Form
    if (contactModal.getAttribute('aria-hidden') == 'false' && keyCode === 27) {
      closeModal(contactModal);
    }
  })
}

function lightbox(){
  lightboxLink();
  lightboxControl();
}

