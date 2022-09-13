function subtitleTemplate(title, likes) {
  return ` 
  <div class = "subtitle">
    <h2>${title}</h2>
    <p class = "like">${likes} <i class="fa-solid fa-heart"></i></p>
  </div>`;
}


function picturesTemplate(data) {
  const { title, image, photographerId, likes } = data;

  function getImageCardDOM() {
      const article = document.createElement( 'article' );

      article.innerHTML = 
      `<img src="assets/${photographerId}/${image}" alt="photo ${title}">
     ${subtitleTemplate(title, likes)}`;

      return (article);
  }

  return { title, image, photographerId, likes, getImageCardDOM };
};


function moviesTemplate(data) {
  const { title, video, photographerId, likes } = data;

  function getVideoCardDOM() {
      const article = document.createElement( 'article' );

      article.innerHTML = 
      `<video src="assets/${photographerId}/${video}" controls></video>
      ${subtitleTemplate(title, likes)}`;

      return (article);
  }

  return { title, video, photographerId, likes, getVideoCardDOM };
};