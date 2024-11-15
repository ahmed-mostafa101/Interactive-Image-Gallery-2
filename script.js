const images = [
  {thumbnail: "assets/images/thumbnail1.jpg", image: "assets/images/image1.jpg"},
  {thumbnail: "assets/images/thumbnail2.jpg", image: "assets/images/image2.jpg"},
  {thumbnail: "assets/images/thumbnail3.jpg", image: "assets/images/image3.jpg"},
  {thumbnail: "assets/images/thumbnail4.jpg", image: "assets/images/image4.jpg"},
  {thumbnail: "assets/images/thumbnail5.jpg", image: "assets/images/image5.jpg"},
  {thumbnail: "assets/images/thumbnail6.jpg", image: "assets/images/image6.jpg"},
  {thumbnail: "assets/images/thumbnail7.jpg", image: "assets/images/image7.jpg"},
  {thumbnail: "assets/images/thumbnail8.jpg", image: "assets/images/image8.jpg"},
  {thumbnail: "assets/images/thumbnail9.jpg", image: "assets/images/image9.jpg"},
  {thumbnail: "assets/images/thumbnail10.jpg", image: "assets/images/image10.jpg"},
  {thumbnail: "assets/images/thumbnail11.jpg", image: "assets/images/image11.jpg"},
  {thumbnail: "assets/images/thumbnail12.jpg", image: "assets/images/image12.jpg"},
  {thumbnail: "assets/images/thumbnail13.jpg", image: "assets/images/image13.jpg"},
  {thumbnail: "assets/images/thumbnail14.jpg", image: "assets/images/image14.jpg"},
  {thumbnail: "assets/images/thumbnail15.jpg", image: "assets/images/image15.jpg"},
  {thumbnail: "assets/images/thumbnail16.jpg", image: "assets/images/image16.jpg"},
];

let currentImageIndex = 0;
let modalImageIndex = 0;

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");

function displayGallery() {
  gallery.innerHTML = "";
  for (let i=currentImageIndex; i<currentImageIndex+9 && i<images.length; i++) {
      const img = document.createElement("img");
      img.onclick = () => openModal(i);
      img.src = images[i].thumbnail;
      img.alt = "thumbnail";
      gallery.appendChild(img);
  }
}

function scrollGallery(direction) {
  if (direction == 1) {
    if (currentImageIndex+9 >= images.length) return;
    currentImageIndex += 9; 
  } else {
    if (!currentImageIndex) return;
    currentImageIndex -= 9;
  }
  displayGallery();
}

function openModal(index) {
  modal.style.display = "flex";
  modalImage.src = images[index].image;
  modalImageIndex = index;
}

function closeModal() {
  modal.style.display = "none";
}

function changeImage(direction) {
  modalImageIndex += direction;
  if (modalImageIndex < 0) modalImageIndex = images.length - 1;
  if (modalImageIndex >= images.length) modalImageIndex = 0;
  modalImage.src = images[modalImageIndex].image;
}

window.onclick = function(event) {
  if (event.target === modal) closeModal();
};

displayGallery();




