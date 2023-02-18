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

  <div class="container mx-auto py-8">
  <div class="flex flex-wrap -mx-4">
    <div class="w-full md:w-1/3 px-4 mb-4 animate__animated animate__fadeInUp">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Card 1</h2>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-4 mb-4 animate__animated animate__fadeInUp">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Card 2</h2>
          <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-4 mb-4 animate__animated animate__fadeInUp">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Card 3</h2>
          <p class="card-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  </div>
</div>



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