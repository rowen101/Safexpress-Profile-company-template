<template><!-- <div class="mb-2">
    <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" :pagination="{
  clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">

      <swiper-slide v-for="(imagePath, index) in imagePaths" :key="index">
        <img className="object-fill w-full h-96" :src='imagePath' alt="image slide 3" />
      </swiper-slide>
    </swiper>-->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container" data-aos="zoom-out" data-aos-delay="100">
      <h1>Welcome to <span>SafeXpress</span></h1>
      <h2>Logistics</h2>
      <div class="d-flex">
        <a href="/about" class="btn-get-started scrollto">Get Started</a>
        <a href="#" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
  </section>
  <main id="main">

    <!-- ======= Featured Services Section ======= -->
    <section id="featured-services" class="featured-services">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <!-- <div class="icon"><i class="bx bxl-dribbble"></i></div> -->
              <h4 class="title"><a href="">Vision</a></h4>
              <p class="description">To be recognized in the industry as the
                Preferred Supply Chain enabling our
                partners to achieve market leadership
                through customer-centric solutions.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Featured Services Section -->

    <!-- ======= Counts Section ======= -->
    <section id="counts" class="counts">
      <div class="container" data-aos="fade-up">

        <div class="row">

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0" v-for="(boardofderictors, index) in boardofderictor" :key="index">
            <div class="count-box">
              <img :src='boardofderictors.img' :alt="boardofderictors.firstName" />
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                class="purecounter"></span>
              <p>{{ boardofderictors.firstName + " " + boardofderictors.lastName }}</p>
              <p>{{ boardofderictors.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Counts Section -->



    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">

        <div class="section-title">

          <h3>Warehouse <span>MGMT.</span></h3>

        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100"
            v-for="(warehousemgmts, index) in warehousemgmt" :key="index">
            <div class="icon-box">
              <img :src="warehousemgmts.thumb" alt="" height="200" width="300" />

            </div>
          </div>


        </div>

      </div>
    </section><!-- End Services Section -->
    <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients section-bg">
      <div class="section-title">

        <h3>Check our <span>Clients</span></h3>

      </div>
      <div class="container" data-aos="zoom-in">

        <div class="row">

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
            v-for="(client, index) in clients" :key="index">
            <img :src="client" class="img-fluid" alt="">
          </div>
        </div>

      </div>
    </section><!-- End Clients Section -->




    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <h3>Our Hardworking <span>Team</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae
            autem.</p>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100"
            v-for="(employee, index) in employees" :key="index">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>{{ employee.firstName }}</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Team Section -->



  </main>
<!-- End #main --><!-- End Hero --></template>
<script>
// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {

  data() {
    return {
      imagePaths: [
        require('@/assets/img/warehouse slx.png'),
        require('@/assets/img/warehouse slx.png'),
        require('@/assets/img/warehouse slx.png')
      ],
      boardofderictor: [
        {
          "firstName": "EDEN S.",
          "lastName": "SATINITIGAN",
          "position": "President/CEO",
          "img": require('@/assets/img/team/Eden S. Satinitigan.png')
        },
        {
          "firstName": "JOHN ANGELO",
          "lastName": "CRUZ",
          "position": "Director",
          "img": require('@/assets/img/team/john angelo cruz.png')
        },
        {
          "firstName": "DARLYN",
          "lastName": "ALEJANDRO",
          "position": "COO/CFO",
          "img": require('@/assets/img/team/darlyn_alejandro.png')
        },
        {
          "firstName": "Atty. JULIUS VINCENT",
          "lastName": "LIBANG",
          "position": "Corporate Secretary/Legal",
          "img": require('@/assets/img/team/atty.julius_vincent_libang.png')
        }
      ],
      warehousemgmt: [
        {
          thumb: require('@/assets/img/luzon_operation.png'),
          src: require('@/assets/img/luzon_operation.png'),
          caption: '<h4>Luzon Operation</h4>'
        },
        {
          thumb: require('@/assets/img/vizayas_operation.png'),
          src: require('@/assets/img/vizayas_operation.png'),
          caption: '<h4>Visayas Operation</h4>'
        },
        {
          thumb: require('@/assets/img/mindanao_operation.png'),
          src: require('@/assets/img/mindanao_operation.png'),
          caption: '<h4>Mindanao Operation</h4>'
        }
        ,
      ],
      clients: [
        require('@/assets/img/clients/client-1.png'),
        require('@/assets/img/clients/client-2.png'),
        require('@/assets/img/clients/client-3.png'),
        require('@/assets/img/clients/client-4.png'),
        require('@/assets/img/clients/client-5.png'),
        require('@/assets/img/clients/client-6.png'),
        require('@/assets/img/clients/client-7.png'),
        require('@/assets/img/clients/client-8.png'),
        require('@/assets/img/clients/client-9.png'),
        require('@/assets/img/clients/client-10.png'),
        require('@/assets/img/clients/client-11.png'),
        require('@/assets/img/clients/client-12.png'),
        require('@/assets/img/clients/client-13.png'),
        require('@/assets/img/clients/client-14.png'),
        require('@/assets/img/clients/client-15.png'),
        require('@/assets/img/clients/client-16.png'),
        require('@/assets/img/clients/client-17.png'),
        require('@/assets/img/clients/client-18.png'),
        require('@/assets/img/clients/client-19.png'),
        require('@/assets/img/clients/client-20.png'),
        require('@/assets/img/clients/client-21.png'),
        require('@/assets/img/clients/client-22.png'),
        require('@/assets/img/clients/client-23.png'),
        require('@/assets/img/clients/client-24.png'),
      ]

    }
  },
  components: {
    // Swiper,
    // SwiperSlide,
  },
  methods: {
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },

}
</script>