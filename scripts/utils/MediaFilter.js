filterButton.addEventListener('click', function(){
  filterModal.style.display = "block";
  filterButton.style.display = "none"
  filterPopularity.focus();
})

closeFilterModal.addEventListener('click', function(event){
  event.stopPropagation()
  filterModal.style.display = "none";
  filterButton.style.display = "block";
  filterButton.focus();
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
  FISHEYE.portfolio = sortFunction(FISHEYE.portfolio, typeOfSort);
  console.log(FISHEYE.portfolio);
  displayPortfolio(FISHEYE.portfolio);
  filterButton.innerHTML = `${typeOfSort} <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>`;
  filterButton.setAttribute("aria-label", `actuellement trié par ${typeOfSort} - changer de tri`);
  filterButton.style.display = "block"
  filterModal.style.display = "none";  
  likes()
  lightboxLink()
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