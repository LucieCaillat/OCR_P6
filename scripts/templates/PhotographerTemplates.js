function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;


// Affichage des donnés de chaque photographe sur la page index
    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        article.innerHTML = `<a href = "photographer.html?id=${id}"><img src="assets/photographers/${portrait}" alt="image de profil de ${name}"></a>
        <h2><a href = "photographer.html?id=${id}">${name}</a></h2>
        <p class = "location">${city}, ${country}</p>
        <p class = "tagline">${tagline}</p>
        <p class = "price">${price}€/jour</p>`;

        return (article);
    }

// Affichage des donnés du photographe sur leur page personnel 
    function getPhotographerHeaderDOM() {
        const photographHeader = document.createElement( 'div' );
        photographHeader.classList.add("photograph-header"); 
        

        photographHeader.innerHTML = 
        `<div>
            <h1>${name}</h2>
            <p class = "location">${city}, ${country}</p>
            <p class = "tagline">${tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <img src="assets/photographers/${portrait}" alt="image de profil de ${name}">
        <div class = "fix-box">
            <p>nbr of like <i class="fa-solid fa-heart"></i></p>
            <p class = "price">${price}€/jour</p>
        </div>`;

        return (photographHeader);
    }

    return { name, portrait, city, country, tagline, price, id, getUserCardDOM, getPhotographerHeaderDOM };
};