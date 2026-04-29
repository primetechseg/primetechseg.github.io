document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery-item img, .gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCounter = document.getElementById("lightboxCounter");
  const lightboxThumbs = document.getElementById("lightboxThumbs");
  const closeLightbox = document.getElementById("closeLightbox");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  if (!galleryImages.length || !lightbox) return;

  let currentImageIndex = 0;
  const imageList = Array.from(galleryImages).map(img => img.getAttribute("src"));

  function renderLightbox() {
    lightboxImage.src = imageList[currentImageIndex];
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${imageList.length} fotos`;
    lightboxThumbs.innerHTML = "";

    imageList.forEach((src, index) => {
      const thumb = document.createElement("img");
      thumb.src = src;

      if (index === currentImageIndex) {
        thumb.classList.add("active");
      }

      thumb.addEventListener("click", () => {
        currentImageIndex = index;
        renderLightbox();
      });

      lightboxThumbs.appendChild(thumb);
    });
  }

  function openLightbox(index) {
    currentImageIndex = index;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
    renderLightbox();
  }

  function closeGallery() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageList.length;
    renderLightbox();
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageList.length) % imageList.length;
    renderLightbox();
  }

  galleryImages.forEach((img, index) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => openLightbox(index));
  });

  closeLightbox.addEventListener("click", closeGallery);
  lightboxNext.addEventListener("click", nextImage);
  lightboxPrev.addEventListener("click", prevImage);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeGallery();
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowRight") nextImage();
    if (event.key === "ArrowLeft") prevImage();
  });
});