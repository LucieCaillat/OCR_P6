/* eslint-disable no-unused-vars */
function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price} = data;
  
  function displayMedium() {
    if(video === undefined){
      return `<img src="assets/${photographerId}/${image}" alt="${title}">`
    }else {
      return `<video src="assets/${photographerId}/${video}" controls></video>`
    }
  }    
    
  function getMediumCardDOM(){
    const displayMedium = this.displayMedium();    
    const article = document.createElement( 'article' );
    article.id = `${id}`;
    article.innerHTML =`
    ${displayMedium}
      <div class = "subtitle">
        <h2><a href = "#" aria-label="${title} - ouvrire ce média en pleine écran">${title}</a></h2>
        <button id = "like_${id}" class = "like hidden-button" aria-label="${title} est aimé par ${likes} personnes - indiquer que vous aimez aussi">
          ${likes}
          <em class="fa-solid fa-heart" aria-hidden="true"></em>
        </button>
      </div>`;
    return article
  }

  return { id, photographerId, title, likes, date, price, displayMedium, getMediumCardDOM};
}