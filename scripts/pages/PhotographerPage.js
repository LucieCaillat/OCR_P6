/* global photographerFactory, mediumTemplate, displayMediumLike, FISHEYE, getData, displayTotalLikes, likes, lightbox, contactForm*/

const photographerId = parseInt(new URL(document.location).searchParams.get(`id`)); 

function getPhotographer(photographers){
  const photographer = photographers.filter(phographer => phographer.id === photographerId)[0];  
  return photographer;
}

function getPortfolio(media){
  const portfolio = media.filter(photo => photo.photographerId === photographerId);  
  return portfolio;
}

function displayPhotographer(photographer) {
  const main = document.querySelector("#main");
  const photographerModel = photographerFactory(photographer);
  const photographerHeaderDOM = photographerModel.getPhotographerHeaderDOM();
  main.replaceChild(photographerHeaderDOM, document.querySelector(".photograph-header-location"));
}

function displayPortfolio(media) {
  const photoGallery = document.querySelector(".photo-gallery");
  media.forEach((medium) => {
    const mediumCardDOM = mediumTemplate(medium);
    photoGallery.appendChild(mediumCardDOM);
    /// indicates if the media is liked
    displayMediumLike(medium.id, medium.likes, medium.liked)    
  });
}

async function init() {
  await getData()
  FISHEYE.photographer = getPhotographer(FISHEYE.photographers);
  displayPhotographer(FISHEYE.photographer);
  //the portfolio is sorted by popularity by default
  FISHEYE.portfolio = getPortfolio(FISHEYE.media).sort((a, b) => b.likes - a.likes);   
  displayPortfolio(FISHEYE.portfolio);
  displayTotalLikes();
  likes();
  lightbox();
  contactForm();
}

init();

