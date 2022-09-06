function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    /*const picture = `assets/photographers/${portrait}`;
    const location = `${city}, ${country}`;
    const pricePerDay =`${price}€/jour`;*/

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        
        /*const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `image de profil de ${name}`);

        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        
        const domLocation = document.createElement( 'p' );
        domLocation.textContent = location;
        domLocation.classList.add("location");

        const domTagline = document.createElement( 'p' );
        domTagline.textContent = tagline;
        domTagline.classList.add("tagline");

        const domPrice = document.createElement( 'p' );
        domPrice.textContent = pricePerDay;
        domPrice.classList.add("price");

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(domLocation);
        article.appendChild(domTagline);
        article.appendChild(domPrice);*/

        article.innerHTML = `<a href = "photographer.html?id=${id}"><img src="assets/photographers/${portrait}" alt="image de profil de ${name}"></a>
        <h2><a href = "photographer.html?id=${id}">${name}</a></h2>
        <p class = "location">${city}, ${country}</p>
        <p class = "tagline">${tagline}</p>
        <p class = "price">${price}€/jour</p>`;

        return (article);
    }
    return { name, portrait, city, country, tagline, price, id, getUserCardDOM };
};
