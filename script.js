const images = document.querySelectorAll(".card img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// open lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    lightbox.style.display = "flex";
    updateImage();
  });
});

function updateImage(){
  lightboxImg.src = images[currentIndex].src;
}

// next
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// prev
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

// close
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// click outside
lightbox.addEventListener("click", (e) => {
  if(e.target === lightbox){
    lightbox.style.display = "none";
  }
});