import "../sass/style.scss";

import Swiper from "swiper";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

try {
  const swiper = new Swiper(".promo__swiper", {
    // configure Swiper to use modules
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} catch (e) {}
