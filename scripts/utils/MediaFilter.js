/* global DOM, FISHEYE, displayPortfolio, likes, lightboxLink*/

DOM.filterButton.addEventListener('click', function(){
  DOM.filterModal.style.display = "block";
  DOM.filterButton.style.display = "none"
  DOM.filterPopularity.focus();
})

DOM.closeFilterModal.addEventListener('click', function(event){
  event.stopPropagation()
  DOM.filterModal.style.display = "none";
  DOM.filterButton.style.display = "block";
  DOM.filterButton.focus();
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
  DOM.photoGallery.innerHTML = "";
  FISHEYE.portfolio = sortFunction(FISHEYE.portfolio, typeOfSort);
  displayPortfolio(FISHEYE.portfolio);
  DOM.filterButton.innerHTML = `${typeOfSort}<em class="fa-solid fa-chevron-down" aria-hidden="true"></i>`;
  DOM.filterButton.setAttribute("aria-label", `actuellement trié par ${typeOfSort} - changer de tri`);
  DOM.filterButton.style.display = "block";
  DOM.filterModal.style.display = "none";  
  likes()
  lightboxLink()
}

DOM.filterPopularity.addEventListener('click', function(){
  filterPortfolio("Popularité")
} );
DOM.filterDate.addEventListener('click', function(){
  filterPortfolio("Date")
});
DOM.filterTitle.addEventListener('click', function(){
  filterPortfolio("Titre")
} );
