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

function dateStamp(date){
  const year = parseInt(date.slice(0,4)) 
  const month = parseInt(date.slice(5,7)) 
  const day = parseInt(date.slice(8,10))
  const dateObj = new Date(year, month, day)
  return dateObj
}

function sortFunction(datas, typeOfSort) {
  if (typeOfSort === "Popularité") {
    //sort from highest to lowest
    return datas.sort((a, b) => a.likes < b.likes ? 1 : -1)
  } if (typeOfSort === "Date") {
    return datas.sort((a, b) => dateStamp(a.date) < dateStamp(b.date) ? 1 : -1) 
  } if (typeOfSort === "Titre") {
    //sort by alphabetical order 
    return datas.sort((a, b) => a.title > b.title ? 1 : -1)
  } else{
    return datas
  }
}

function filterPortfolio(typeOfSort) {
  DOM.photoGallery.innerHTML = "";
  FISHEYE.portfolio = sortFunction(FISHEYE.portfolio, typeOfSort);
  console.log(FISHEYE.portfolio)
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
