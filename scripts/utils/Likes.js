/* global FISHEYE*/

function displayTotalLikes(){
  const nbrTotalLikes = FISHEYE.portfolio.map(media => media.likes).reduce((a,b)=> a + b);
  const totalLikes = document.querySelector(".total_likes");
  totalLikes.innerHTML = `${nbrTotalLikes} <i class="fa-solid fa-heart"></i>`
}

function displayMediumLike(id, likes, liked){
  const like = document.querySelector(`#like_${id}`);
  like.innerHTML = `${likes} <i class="fa-solid fa-heart"></i>`;
  if(liked){
    like.style.color = "#D3573C"
  }else{
    like.style.color = "#901C1C"
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
      displayMediumLike(medium.id, medium.likes, medium.liked);
      displayTotalLikes();      
    })
  })
}
