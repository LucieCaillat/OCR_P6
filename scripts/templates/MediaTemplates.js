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
      <h2>${medium.title}</h2>
      <p id = "like_${medium.id}" class = "like">${medium.likes} <i class="fa-solid fa-heart"></i></p>
    </div>`;
  return article
}
