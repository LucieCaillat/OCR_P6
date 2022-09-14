const photographerId = parseInt(new URL(document.location).searchParams.get(`id`)); 

function getPhotographer(photographers){
  const photographer = photographers.filter(phographer => phographer.id === photographerId)[0];  
  return photographer;
};

function getPortfolio(media){
  const portfolio = media.filter(photo => photo.photographerId === photographerId);  
  return portfolio;
};


function displayPhotographer(photographer) {
  const main = document.querySelector("#main");
  const photographerModel = photographerFactory(photographer);
  const photographerHeaderDOM = photographerModel.getPhotographerHeaderDOM();
  main.replaceChild(photographerHeaderDOM, document.querySelector(".photograph-header-location"));
};

function displayPortfolio(photos) {
  const photoGallery = document.querySelector(".photo-gallery");
  photos.forEach((photo) => {
    if (photo.video === undefined ){
      const photoModel = new MediaFactory(photo, "picture");
      const photoCardDOM = photoModel.getImageCardDOM(); 
      photoGallery.appendChild(photoCardDOM);
    }else{
      const photoModel = new MediaFactory(photo, "movie");
      const photoCardDOM = photoModel.getVideoCardDOM(); 
      photoGallery.appendChild(photoCardDOM);
    }
    
    
  });
};

async function init() {
  await getData()
  const photographer = getPhotographer(FISHEYE.photographers);
  displayPhotographer(photographer);
  //the portfolio is sorted by popularity by default
  FISHEYE.portfolio = getPortfolio(FISHEYE.media).sort((a, b) => b.likes - a.likes);   
  displayPortfolio(FISHEYE.portfolio);
};

init();

