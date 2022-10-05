/* global MediaFactory*/
/* eslint-disable no-unused-vars */ 
function displayVideo(medium){
return `<video src="assets/${medium.photographerId}/${medium.video}" controls></video>`
}

/* eslint-disable no-unused-vars */ 
function displayPicture(medium){
return `<img src="assets/${medium.photographerId}/${medium.image}" alt="${medium.title}">`
}

/* eslint-disable no-unused-vars */ 
function mediumTemplate(medium){
  const displayMedium = MediaFactory(medium);
  const article = document.createElement( 'article' );
  article.id = `${medium.id}`;
  article.innerHTML =`
  ${displayMedium}
    <div class = "subtitle">
      <h2><a href = "#" aria-label="${medium.title} - ouvrire ce média en pleine écran">${medium.title}</a></h2>
      <button id = "like_${medium.id}" class = "like hidden-button" aria-label="${medium.title} est aimé par ${medium.likes} personnes - indiquer que vous aimez aussi">${medium.likes} <i class="fa-solid fa-heart" aria-hidden="true"></i></button>
    </div>`;
  return article
}
