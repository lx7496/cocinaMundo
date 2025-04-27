import food1Desktop from "../img/web/food1.jpg?url";
import food1Tablet from "../img/tablet/food1.jpg?url";
import food1Mobile from "../img/mobile/food1.jpg?url";

import food2Desktop from "../img/web/food2.jpg?url";
import food2Tablet from "../img/tablet/food2.jpg?url";
import food2Mobile from "../img/mobile/food2.jpg?url";

import food3Desktop from "../img/web/food3.jpg?url";
import food3Tablet from "../img/tablet/food3.jpg?url";
import food3Mobile from "../img/mobile/food3.jpg?url";

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
    {
      desktop: "food1.2af74394.jpg",
      tablet: "food1.03c048fb.jpg",
      mobile: "food1.9b1f0e3c.jpg",
      alt: "Plato internacional 1",
    },
    {
      desktop: "food2.b9cc44e9.jpg",
      tablet: "food2.bf934ef7.jpg",
      mobile: "food2.48e7b797.jpg",
      alt: "Plato internacional 2",
    },
    {
      desktop: "food3.13730377.jpg",
      tablet: "food3.de0e1dd4.jpg",
      mobile: "food3.9bc939cc.jpg",
      alt: "Plato internacional 3",
    },
  ];
  console.log("Ruta de imagen:", food1Desktop);
  let currentIndex = 0;

  const sourceDesktop = document.getElementById("carouselSourceDesktop");
  const sourceTablet = document.getElementById("carouselSourceTablet");
  const sourceMobile = document.getElementById("carouselSourceMobile");
  const prevButton = document.getElementById("prevImage");
  const nextButton = document.getElementById("nextImage");

  function getPath(imageObj) {
    // Parcel a veces devuelve un objeto con .default
    return typeof imageObj === "object" ? imageObj.default : imageObj;
  }

  function updateCarousel(index) {
    const image = images[index];
    if (sourceDesktop && sourceTablet && carouselImage) {
      sourceDesktop.srcset = getPath(image.desktop);
      sourceTablet.srcset = getPath(image.tablet);
      sourceMobile.srcset = getPath(image.mobile);
      carouselImage.alt = image.alt;
    }
  }

  prevButton?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(currentIndex);
  });

  nextButton?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel(currentIndex);
  });

  updateCarousel(currentIndex);

  // Reservation form
  const reservationForm = document.getElementById("reservationForm");
  if (reservationForm) {
    reservationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Reserva realizada con éxito");
    });
  }
});
