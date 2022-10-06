/* eslint-disable no-unused-vars */
function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;


// Display the data of each photographer on the index page
    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        article.innerHTML = `
        <h2><a href = "photographer.html?id=${id}" aria-label="${name} - page du photographe"><img src="assets/photographers/${portrait}" alt="">${name}</a></h2>
        <p class="location">${city}, ${country}</p>
        <p class="tagline">${tagline}</p>
        <p class="price" >
        <span aria-hidden="true">${price}€/jour</span>
        <span class="visuallyhidden">Le tarif de ${name} est de ${price}€ par jour</span>
        </p>
        `;

        return (article);
    }

// Display the photographer's data on their personal page 
    function getPhotographerHeaderDOM() {
        const photographHeader = document.createElement( 'div' );
        photographHeader.classList.add("photograph-header"); 
        photographHeader.innerHTML = 
        `<div>
            <h1>${name}</h2>
            <p class="location">${city}, ${country}</p>
            <p class="tagline">${tagline}</p>
        </div>
        <button id="open-form-button" class="contact_button" onclick="openContactForm()">Contactez-moi</button>
        <img src="assets/photographers/${portrait}" alt="${name}">
        <div class="fix-box">
            <p class="total_likes"> <i class="fa-solid fa-heart"  aria-hidden="true"></i></p>
            <p class="price" >
                <span aria-hidden="true">${price}€/jour</span>
                <span class="visuallyhidden">Le tarif de ${name} est de ${price}€ par jour</span>
            </p>
        </div>`;

        return (photographHeader);
    }

    return { name, portrait, city, country, tagline, price, id, getUserCardDOM, getPhotographerHeaderDOM };
}
