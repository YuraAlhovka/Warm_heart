import "../sass/style.scss";

import Swiper from "swiper";
import { Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
});
