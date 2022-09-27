function displayModal(modal) {
	modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    withoutModals.setAttribute("aria-hidden", "true");
    withoutModals.classList.add("no-scroll");     
}

function closeModal(modal) {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    header.setAttribute("aria-hidden", "false");
    withoutModals.setAttribute("aria-hidden", "false");
    withoutModals.classList.remove("no-scroll");  
}

function openContactForm() {
    displayModal(contactModal);
    firstInput.focus();
}
let e = 0;
function contactForm (){
    titleContactModal.innerHTML = `Contactez-moi<br/>${FISHEYE.photographer.name}`;
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        myFormData = new FormData(form);
        const name = myFormData.get("name");
        const firstName = myFormData.get("first-name");
        const email = myFormData.get("email");
        const message = myFormData.get("message");
        console.log("/////////////////////////////////")
        console.log(`Vous avez reçu un message de ${firstName} ${name}`);
        console.log(`Adresse email:  ${email}`);
        console.log(`Message : ${message}`);
        console.log("/////////////////////////////////")
        closeModal(contactModal);
        form.reset();
    })  
}
