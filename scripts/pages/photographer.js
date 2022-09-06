const photographerId = parseInt(new URL(document.location).searchParams.get(`id`)); 

async function getData() {
  const data = fetch("data/photographers.json")
      .then(function(res) {
          return res.json();
      })
      .then(function(value) {
          return value; 
      });
  return data;
}
async function getPhotographerData(){
  const data = await getData();
  const photographersDataArray = data.photographers;
  const photographerDataObject = photographersDataArray.filter(phographe => phographe.id === photographerId)[0];
  console.log(photographerDataObject)
  return photographerDataObject;
};

async function getPhotosData(){
  const data = await getData();
  const mediaData = data.media;
  const photosDataArray = mediaData.filter(photo => photo.photographerId === photographerId);
  console.log(photosDataArray)
  return photosDataArray;
};


console.log(photographerId);
getPhotographerData();
getPhotosData();