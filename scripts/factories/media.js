function picturesFactory(data) {
  const { title, image, photographerId, likes } = data;

  function getImageCardDOM() {
      const article = document.createElement( 'article' );

      article.innerHTML = 
      `<img src="assets/${photographerId}/${image}" alt="photo ${title}">
      <div>
        <h2>${title}</h2>
        <p class = "like">${likes}</p>
      </div>`;

      return (article);
  }


  return { title, image, photographerId, likes, getImageCardDOM };
};

function moviesFactory(data) {
  const { title, video, photographerId, likes } = data;

  function getVideoCardDOM() {
      const article = document.createElement( 'article' );

      article.innerHTML = 
      `<video src="assets/${photographerId}/${video}" controls></video>
      <div>
        <h2>${title}</h2>
        <p class = "like">${likes}</p>
      </div>`;

      return (article);
  }


  return { title, video, photographerId, likes, getVideoCardDOM };
};