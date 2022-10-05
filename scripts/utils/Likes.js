/* global FISHEYE*/

function displayTotalLikes(){
  const nbrTotalLikes = FISHEYE.portfolio.map(media => media.likes).reduce((a,b)=> a + b);
  const totalLikes = document.querySelector(".total_likes");
  totalLikes.innerHTML = `
  <span class="visuallyhidden"> Le nombre de likes de ce photographe est de</span>${nbrTotalLikes} <i class="fa-solid fa-heart" aria-hidden="true"></i>`
}

function displayMediumLike(id, likes, liked, title){
  const like = document.querySelector(`#like_${id}`);
  like.innerHTML = `${likes} <i class="fa-solid fa-heart" aria-hidden="true"></i>`;
  if(liked){
    like.style.color = "#D3573C"
    like.setAttribute("aria-label", `${title} est aimé par ${likes} personnes - enlever votre like"`);
  }else{
    like.style.color = "#901C1C"
    like.setAttribute("aria-label", `${title} est aimé par ${likes} personnes - indiquer que vous aimez aussi"`);
  }
}

/* eslint-disable no-unused-vars */
function likes(){
  FISHEYE.portfolio.forEach((medium)=> {
  document.querySelector(`#like_${medium.id}`)
    .addEventListener('click', function(event){
      event.stopPropagation();
      if(medium.liked){
        medium.likes --;
        medium.liked = false;        
      }else{
        medium.likes ++;
        medium.liked = true;
      }
      displayMediumLike(medium.id, medium.likes, medium.liked, medium.title);
      displayTotalLikes();      
    })
  })
}
