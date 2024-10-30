const photos = {
  utama: [
    "image/image1.jpg",
    "image/image2.jpg",
    "image/image3.jpg",
    "image/image4.jpg",
    "image/image5.jpg",
    "image/image6.jpg",
    "image/image7.jpg",
    "image/image8.jpg",
    "image/image9.jpg",
    "image/image10.jpg",
  ],
  jambu: [
    "image/image10.jpg",
    "image/image9.jpg",
    "image/image8.jpg",
    "image/image7.jpg",
    "image/image6.jpg",
    "image/image5.jpg",
    "image/image4.jpg",
    "image/image3.jpg",
    "image/image2.jpg",
    "image/image1.jpg",
  ],
  kuda: [
    "image/image1.jpg",
    "image/image2.jpg",
    "image/image3.jpg",
    "image/image4.jpg",
    "image/image5.jpg",
    "image/image6.jpg",
    "image/image7.jpg",
    "image/image8.jpg",
    "image/image9.jpg",
    "image/image10.jpg",
  ],
  spot: [
    "image/image10.jpg",
    "image/image9.jpg",
    "image/image8.jpg",
    "image/image7.jpg",
    "image/image6.jpg",
    "image/image5.jpg",
    "image/image4.jpg",
    "image/image3.jpg",
    "image/image2.jpg",
    "image/image1.jpg",
  ],
  selengkapnya: [
    "image/image1.jpg",
    "image/image2.jpg",
    "image/image3.jpg",
    "image/image4.jpg",
    "image/image5.jpg",
    "image/image6.jpg",
    "image/image7.jpg",
    "image/image8.jpg",
    "image/image9.jpg",
    "image/image10.jpg",
  ],
};

function showGallery(category) {
  // Sembunyikan semua kategori
  const categories = document.querySelectorAll(".gallery-category");
  categories.forEach((cat) => {
    cat.style.display = "none";
  });

  // Tampilkan kategori yang dipilih
  const selectedCategory = document.getElementById(category);
  selectedCategory.style.display = "grid"; // Ubah ke 'grid' untuk menampilkan kotak
  selectedCategory.innerHTML = ""; // Bersihkan konten sebelumnya

  // Tambahkan foto-foto baru dari kategori yang dipilih
  photos[category].forEach((imgSrc) => {
    const box = document.createElement("div");
    box.className = "gallery-box";

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = `Foto ${category}`;
    img.className = "gallery-image";

    box.appendChild(img);
    selectedCategory.appendChild(box);
  });
}
