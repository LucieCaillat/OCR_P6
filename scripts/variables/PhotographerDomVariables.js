/* eslint-disable no-unused-vars */
const DOM = {
// Header and Main
  withoutModals: document.querySelector("#without-modals"),
// Header
  header: document.querySelector("header"),
// Main
  main: document.querySelector("main"),
// Filter
  filterButton: document.querySelector(".filter_button"),

  filterModal: document.querySelector(".filter_modal"),
  closeFilterModal: document.querySelector(".filter_modal i"),

  filterPopularity: document.querySelector("#popularity"),
  filterDate : document.querySelector("#date"),
  filterTitle: document.querySelector("#title"),

//Photo- gallery
  photoGallery: document.querySelector(".photo-gallery"),

//lightbox Modal
  lightboxModal: document.querySelector("#lightbox_modal"),
  closeLightboxButton: document.querySelector("#lightbox_modal .fa-xmark"),
  rightButton: document.querySelector("#lightbox_modal .fa-chevron-right"),
  leftButton: document.querySelector("#lightbox_modal .fa-chevron-left"),

//Contact Modal
  contactModal: document.getElementById("contact_modal"),
  titleContactModal: document.getElementById("title-contact-modal"),
  firstInput: document.querySelector("input"),
  form: document.querySelector(".modal form")
}
