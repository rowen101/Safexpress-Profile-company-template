<template>
  <div >
 
 <MenuBar/>

    <router-view></router-view>
    <FooterCom/>
</div>
</template>
<script>
import MenuBar from './components/MenuBar.vue';
import FooterCom from './components/FooterCom.vue'

export default {
  name: 'App',
  components: {
    MenuBar,
    FooterCom,

  },

}
</script>
<style>


   /* Vendor CSS Files  */
   @import url('assets/vendor/aos/aos.css');
   @import url('assets/vendor/bootstrap/css/bootstrap.min.css');
   @import url('assets/vendor/bootstrap-icons/bootstrap-icons.css');
   @import url('assets/vendor/boxicons/css/boxicons.min.css');
   @import url('assets/vendor/glightbox/css/glightbox.min.css');
   @import url('assets/vendor/swiper/swiper-bundle.min.css');
  
   @import url('assets/css/style.css');
</style>


