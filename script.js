//
// Creating the Modal
var hempModal = document.getElementById("hempModal");
var recycledpolyesterModal = document.getElementById("recycledpolyesterModal");
var linenModal = document.getElementById("linenModal");
var pinatexModal = document.getElementById("pinatexModal");

// Get the image and insert it inside the modal 
var hempImg = document.getElementById("hemp");
var recycledpolyesterImg = document.getElementById("recycledpolyester");
var linenImg = document.getElementById("linen");
var pinatexImg = document.getElementById("pinatex");

// Get the <span> element that closes the modal
const span = Array.from(document.getElementsByClassName("close")).forEach(clicked);/* When the user clicks on the image, open the modal */
hempImg.onclick = function() {
  hempModal.style.display = "block";
}
recycledpolyesterImg.onclick = function() {
  recycledpolyesterModal.style.display = "block";
}
linenImg.onclick = function() {
  linenModal.style.display = "block";
}
pinatexImg.onclick= function() {
  pinatexModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function clicked(activeSpan) {
  activeSpan.addEventListener("click", closeModal);
}
function closeModal() {
  hempModal.style.display = "none";
  recycledpolyesterModal.style.display = "none";
  linenModal.style.display = "none"; pinatexModal.style.display = "none"; }
window.onclick = function(event) {
  if ((event.target == hempModal) || (event.target == recycledpolyesterModal) || (event.target == linenModal) || (event.target == pinatexModal)) {
    console.log("clicked on");
    hempModal.style.display = "none";
    recycledpolyesterModal.style.display = "none";
    linenModal.style.display = "none";
    pinatexModal.style.display = "none";
  }
}

// Creating the slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//
// =======================
// MODALS
// =======================

// Get modals
const hempModal = document.getElementById("hempModal");
const recycledpolyesterModal = document.getElementById("recycledpolyesterModal");
const linenModal = document.getElementById("linenModal");
const pinatexModal = document.getElementById("pinatexModal");

// Helper function to safely attach modal openers
function attachModal(imgId, modal) {
  const img = document.getElementById(imgId);
  if (img && modal) {
    img.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }
}

attachModal("hemp", hempModal);
attachModal("recycledpolyester", recycledpolyesterModal);
attachModal("linen", linenModal);
attachModal("pinatex", pinatexModal);

// Close modals when clicking X
const closeButtons = document.getElementsByClassName("close");
Array.from(closeButtons).forEach(btn => {
  btn.addEventListener("click", closeAllModals);
});

// Close modals when clicking outside
window.addEventListener("click", event => {
  const modals = [
    hempModal,
    recycledpolyesterModal,
    linenModal,
    pinatexModal
  ];

  modals.forEach(modal => {
    if (modal && event.target === modal) {
      closeAllModals();
    }
  });
});

// Close all modals safely
function closeAllModals() {
  if (hempModal) hempModal.style.display = "none";
  if (recycledpolyesterModal) recycledpolyesterModal.style.display = "none";
  if (linenModal) linenModal.style.display = "none";
  if (pinatexModal) pinatexModal.style.display = "none";
}

// =======================
// SLIDESHOW
// =======================

let slideIndex = 1;

// Only initialize slideshow if slides exist
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

if (slides.length > 0 && dots.length > 0) {
  showSlides(slideIndex);
}

// Next / previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (slides.length === 0 || dots.length === 0) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
