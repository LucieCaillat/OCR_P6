// Header and Main
const withoutModals = document.querySelector("#without-modals");
// Header
const header = document.querySelector("header");
// Main
const main = document.querySelector("main");
// Filter
const filterButton = document.querySelector(".filter_button");

const filterModal = document.querySelector(".filter_modal");
const closeFilterModal = document.querySelector(".filter_modal i");

const filterPopularity = document.querySelector("#popularity");
const filterDate  =document.querySelector("#date");
const filterTitle = document.querySelector("#title");

//Photo- gallery
const photoGallery = document.querySelector(".photo-gallery");

//lightbox Modal
const lightboxModal = document.querySelector("#lightbox_modal");
const closeLightboxButton = document.querySelector("#lightbox_modal .fa-xmark");
const rightButton = document.querySelector("#lightbox_modal .fa-chevron-right");
const leftButton = document.querySelector("#lightbox_modal .fa-chevron-left");

//Contact Modal
const contactModal = document.getElementById("contact_modal");
const titleContactModal = document.getElementById("title-contact-modal");
const firstInput = document.querySelector("input");
const form = document.querySelector(".modal form");