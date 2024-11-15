const images = [
  {thumbnail: "assets/images/thumbnail1.jpg", image: "assets/images/image1.jpg", caption: "Caption for Image 1"},
  {thumbnail: "assets/images/thumbnail2.jpg", image: "assets/images/image2.jpg", caption: "Caption for Image 2"},
  {thumbnail: "assets/images/thumbnail3.jpg", image: "assets/images/image3.jpg", caption: "Caption for Image 3"},
  {thumbnail: "assets/images/thumbnail4.jpg", image: "assets/images/image4.jpg", caption: "Caption for Image 4"},
  {thumbnail: "assets/images/thumbnail5.jpg", image: "assets/images/image5.jpg", caption: "Caption for Image 5"},
  {thumbnail: "assets/images/thumbnail6.jpg", image: "assets/images/image6.jpg", caption: "Caption for Image 6"},
  {thumbnail: "assets/images/thumbnail7.jpg", image: "assets/images/image7.jpg", caption: "Caption for Image 7"},
  {thumbnail: "assets/images/thumbnail8.jpg", image: "assets/images/image8.jpg", caption: "Caption for Image 8"},
  {thumbnail: "assets/images/thumbnail9.jpg", image: "assets/images/image9.jpg", caption: "Caption for Image 9"},
  {thumbnail: "assets/images/thumbnail10.jpg", image: "assets/images/image10.jpg", caption: "Caption for Image 10"},
  {thumbnail: "assets/images/thumbnail11.jpg", image: "assets/images/image11.jpg", caption: "Caption for Image 11"},
  {thumbnail: "assets/images/thumbnail12.jpg", image: "assets/images/image12.jpg", caption: "Caption for Image 12"},
  {thumbnail: "assets/images/thumbnail13.jpg", image: "assets/images/image13.jpg", caption: "Caption for Image 13"},
  {thumbnail: "assets/images/thumbnail14.jpg", image: "assets/images/image14.jpg", caption: "Caption for Image 14"},
  {thumbnail: "assets/images/thumbnail15.jpg", image: "assets/images/image15.jpg", caption: "Caption for Image 15"},
  {thumbnail: "assets/images/thumbnail16.jpg", image: "assets/images/image16.jpg", caption: "Caption for Image 16"},
];


let currentImageIndex = 0;
let modalImageIndex = 0;

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("caption");
const scrollButtons = document.querySelector(".scroll-btns");

function displaySkeletons() {
  gallery.innerHTML = ""; 
  for (let i = 0; i < 9; i++) {
    const skeleton = document.createElement("div");
    skeleton.className = "skeleton";
    gallery.appendChild(skeleton);
  }
}

function displayGallery() {
  displaySkeletons();

  setTimeout(() => {
    gallery.innerHTML = "";
    for (let i = currentImageIndex; i < currentImageIndex + 9 && i < images.length; i++) {
      const img = document.createElement("img");
      img.onclick = () => openModal(i);
      img.src = images[i].thumbnail;
      img.alt = "thumbnail";
      gallery.appendChild(img);
    }
  }, 400); 
}

function scrollGallery(direction) {
  if (direction === 1) {
    if (currentImageIndex + 9 >= images.length) return;
    currentImageIndex += 9;
  } else {
    if (currentImageIndex === 0) return;
    currentImageIndex -= 9;
  }
  displayGallery(); 
}


function openModal(index) {
  scrollButtons.style.opacity = 0;
  modalImage.src = images[index].image;
  modalCaption.innerHTML = images[index].caption;
  modal.style.display = "flex";
  modalImageIndex = index;
}

function closeModal() {
  modal.style.display = "none";
  scrollButtons.style.opacity = 1;
}

function changeImage(direction) {
  modalImageIndex += direction;
  if (modalImageIndex < 0) modalImageIndex = images.length - 1;
  if (modalImageIndex >= images.length) modalImageIndex = 0;
  modalImage.src = images[modalImageIndex].image;
  modalCaption.innerHTML = images[modalImageIndex].caption;
}

window.onclick = function(event) {
  if (event.target === modal) closeModal();
};

displayGallery();




