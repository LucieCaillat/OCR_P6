/* global DOM, FISHEYE*/

function displayModal(modal) {
	modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    DOM.withoutModals.setAttribute("aria-hidden", "true");
    DOM.withoutModals.classList.add("no-scroll");     
}

function closeModal(modal) {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    DOM.withoutModals.setAttribute("aria-hidden", "false");
    DOM.withoutModals.classList.remove("no-scroll");  
}

/* eslint-disable no-unused-vars */
function openContactForm() {
    displayModal(DOM.contactModal);
    DOM.closeContactModalButton.focus();
}

function closeContactForm(){
    closeModal(DOM.contactModal);
    const openContactButton = document.querySelector("#open-form-button");
    openContactButton.focus(); 
}

/* eslint-disable no-unused-vars */
function contactForm (){
    DOM.titleContactModal.innerHTML = `Contactez-moi<br/>${FISHEYE.photographer.name}`;
    
    DOM.form.addEventListener("submit", function (event) {
        event.preventDefault();
        const myFormData = new FormData(DOM.form);
        const name = myFormData.get("name");
        const firstName = myFormData.get("first-name");
        const email = myFormData.get("email");
        const message = myFormData.get("message");
        console.log("/////////////////////////////////")
        console.log(`Vous avez reçu un message de ${firstName} ${name}`);
        console.log(`Adresse email:  ${email}`);
        console.log(`Message : ${message}`);
        console.log("/////////////////////////////////")
        closeContactForm();
        DOM.form.reset();
    })  
}
