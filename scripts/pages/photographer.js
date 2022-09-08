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


async function displayData(photographer) {
  const photographersSection = document.querySelector("#main");
  const photographerModel = photographerFactory(photographer);
  const userCardDOM = photographerModel.getPhotographerHeaderDOM();
  photographersSection.appendChild(userCardDOM);
};

async function init() {
  // Recovers data from photographers
  const photographer = await getPhotographerData();
  displayData(photographer);
};

init();

