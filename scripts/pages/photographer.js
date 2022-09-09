const photographerId = parseInt(new URL(document.location).searchParams.get(`id`)); 

async function getData() {
  return fetch("data/photographers.json")
    .then(function(res) {
        return res.json();
    })
    .then(function(value) {
        return value; 
    });  
}
async function getPhotographerData(){
  const data = await getData();
  const photographersDataArray = data.photographers;
  const photographerDataObject = photographersDataArray.filter(phographe => phographe.id === photographerId)[0];
  
  return photographerDataObject;
};

async function getPhotosData(){
  const data = await getData();
  const mediaData = data.media;
  const photosDataArray = mediaData.filter(photo => photo.photographerId === photographerId);
  
  return photosDataArray;
};


async function displayPhotographerData(photographer) {
  const main = document.querySelector("#main");
  const photographerModel = photographerFactory(photographer);
  const photographerHeaderDOM = photographerModel.getPhotographerHeaderDOM();
  main.replaceChild(photographerHeaderDOM, document.querySelector(".photograph-header-location"));
};

async function displayPhotosData(photos) {
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
  // Recovers data from photographers
  const photographer = await getPhotographerData();
  displayPhotographerData(photographer);
  const photos = await getPhotosData();
  displayPhotosData(photos);
};

init();

