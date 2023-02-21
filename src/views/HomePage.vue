<template>
  
  <div class="mb-2">
    <!-- <swiper
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
  </swiper> -->
 
  </div>
  


</template>
<script>
// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

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
      //Swiper,
      //SwiperSlide,
  },
  setup() {
      return {
          modules: [Autoplay, Pagination, Navigation],
      };
  },
};
</script>