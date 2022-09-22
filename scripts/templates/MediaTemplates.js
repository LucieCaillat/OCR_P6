function subtitleTemplate(title, likes, id) {
  return ` 
  <div class = "subtitle">
    <h2>${title}</h2>
    <p id = "like_${id}" class = "like">${likes} <i class="fa-solid fa-heart"></i></p>
  </div>`;
}


function picturesTemplate(data) {
  const { title, image, photographerId, likes, id} = data;

  function getImageCardDOM() {
      const article = document.createElement( 'article' );
      article.id = `${id}`

      article.innerHTML = 
      `<img src="assets/${photographerId}/${image}" alt="${title}">
     ${subtitleTemplate(title, likes, id)}`;

      return (article);
  }

  return { title, image, photographerId, likes, id, getImageCardDOM };
};


function moviesTemplate(data) {
  const { title, video, photographerId, likes, id} = data;

  function getVideoCardDOM() {
      const article = document.createElement( 'article' );
      article.id = `${id}`

      article.innerHTML = 
      `<video src="assets/${photographerId}/${video}" controls></video>
      ${subtitleTemplate(title, likes, id)}`;

      return (article);
  }

  return { title, video, photographerId, likes, id,getVideoCardDOM };
};