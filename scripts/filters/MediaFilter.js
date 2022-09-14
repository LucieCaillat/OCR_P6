const filterModal = document.querySelector(".filter_modal");
const closeFilterModal = document.querySelector(".filter_modal i");
const filterButton = document.querySelector(".filter button");
const filterPopularity = document.querySelector("#popularity");
const filterDate  =document.querySelector("#date");
const filterTitle = document.querySelector("#title");
const photoGallery = document.querySelector(".photo-gallery")


filterButton.addEventListener('click', function(){
  filterModal.style.display = "block";
})

closeFilterModal.addEventListener('click', function(event){
  event.stopPropagation()
  filterModal.style.display = "none";
})

function sortFunction(datas, typeOfSort) {
  if (typeOfSort === "Popularité") {
    return datas.sort((a, b) => b.likes - a.likes)
  } if (typeOfSort === "Date") {
    return datas.sort((a, b) => b.date > a.date) 
  } if (typeOfSort === "Titre") {
    return datas.sort((a, b) => b.title < a.title)
  } else{
    return datas
  }
}

function filterPortfolio(typeOfSort) {
  photoGallery.innerHTML = "";
  const filterPortfolio = sortFunction(FISHEYE.portfolio, typeOfSort);
  console.log(filterPortfolio);
  displayPortfolio(filterPortfolio);
  filterButton.innerHTML = `${typeOfSort}<i class="fa-solid fa-chevron-down"></i>`;
  filterModal.style.display = "none";
  likes()
}

filterPopularity.addEventListener('click', function(event){
  filterPortfolio("Popularité")
} );
filterDate.addEventListener('click', function(event){
  filterPortfolio("Date")
});
filterTitle.addEventListener('click', function(event){
  filterPortfolio("Titre")
} );