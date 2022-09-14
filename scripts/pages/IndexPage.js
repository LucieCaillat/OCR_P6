    async function getPhotographers() {
        const photographers = fetch("data/photographers.json")
            .then(function(res) {
                return res.json();
            })
            .then(function(value) {
                return value; 
            });
        return photographers
    }

    function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Recovers data from photographers
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    