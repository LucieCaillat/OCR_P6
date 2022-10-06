/* eslint-disable no-unused-vars */
const DOM = {
// Header and Main
  withoutModals: document.querySelector("#without-modals"),
// Filter
  filterButton: document.querySelector(".filter_button"),

  filterModal: document.querySelector(".filter_modal"),
  closeFilterModal: document.querySelector(".filter_modal em"),

  filterPopularity: document.querySelector("#popularity"),
  filterDate : document.querySelector("#date"),
  filterTitle: document.querySelector("#title"),

//Photo- gallery
  photoGallery: document.querySelector(".photo-gallery"),

//lightbox Modal
  lightboxModal: document.querySelector("#lightbox_modal"),
  closeLightboxButton: document.querySelector("#close-lightbox-button"),
  rightButton: document.querySelector("#right-button"),
  leftButton: document.querySelector("#left-button"),

//Contact Modal
  contactModal: document.getElementById("contact_modal"),
  closeContactModalButton : document.getElementById("close-contact-modal-button"),
  titleContactModal: document.getElementById("title-contact-modal"),
  form: document.querySelector(".modal form")
}
