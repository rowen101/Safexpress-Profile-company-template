<template>
  
  <div class="mb-2">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
      }"
      :pagination="{
          clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
  >
  
      <swiper-slide v-for="(imagePath, index) in imagePaths" :key="index">    
        <img
              className="object-fill w-full h-96"
              :src='imagePath'
              alt="image slide 3"
          />
      </swiper-slide> 
  </swiper>
 
  </div>
   <!-- ======= Top Bar ======= -->
   <section id="topbar" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
        <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </section>
<!-- ======= Hero Section ======= -->
<section id="hero" class="d-flex align-items-center">
    <div class="container" data-aos="zoom-out" data-aos-delay="100">
      <h1>Welcome to <span>BizLand</span></h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <div class="d-flex">
        <a href="#about" class="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
  </section><!-- End Hero -->


</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  data(){
    return{

      imagePaths: [
        require('@/assets/img/warehouse slx.png'),
        require('@/assets/img/warehouse slx.png'),
        require('@/assets/img/warehouse slx.png')
    ]
    }
  },
  components: {
      Swiper,
      SwiperSlide,
  },
  setup() {
      return {
          modules: [Autoplay, Pagination, Navigation],
      };
  },
};
</script>