import food1 from "../img/food1.jpg";
import food2 from "../img/food2.jpg";
import food3 from "../img/food3.jpg";
document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded correctly");

  const changeThemeButton = document.getElementById("changeTheme");
  if (changeThemeButton) {
    changeThemeButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }

  const changeLanguageButton = document.getElementById("changeLanguage");
  if (changeLanguageButton) {
    changeLanguageButton.addEventListener("click", () => {
      document.documentElement.lang =
        document.documentElement.lang === "es" ? "en" : "es";
    });
  }

  // Menu toggle
  const menuToggle = document.querySelector(".menuToggle");
  const menu = document.getElementById("menu");
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  // Carousel
  const images = [
    "food1.1599379e.jpg",
    "food2.56d2901a.jpg",
    "food3.ab8b773a.jpg",
  ];

  let currentIndex = 0;
  const carouselImage = document.getElementById("carouselImage");
  const prevButton = document.getElementById("prevImage");
  const nextButton = document.getElementById("nextImage");

  if (carouselImage && prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      carouselImage.src = images[currentIndex];
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      carouselImage.src = images[currentIndex];
    });
  }

  // Reservation form
  const reservationForm = document.getElementById("reservationForm");
  if (reservationForm) {
    reservationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Reserva realizada con éxito");
    });
  }
});
