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
    </swiper>

  </div> -->

    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
      <div class="container" data-aos="zoom-out" data-aos-delay="100">
        <h1>Welcome to <span>SafeXpress</span></h1>
        <h2>Logistics</h2>
        <div class="d-flex">
          <a href="/about" class="btn-get-started scrollto">Get Started</a>
          <a href="#" class="glightbox btn-watch-video"><i
              class="bi bi-play-circle"></i><span>Watch Video</span></a>
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
                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
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
                  <p>{{ boardofderictors.firstName +" "+ boardofderictors.lastName }}</p>
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
            <h2>Services</h2>
            <h3>Check our <span>Services</span></h3>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae
              autem.</p>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon-box">
                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                <h4><a href="">Lorem Ipsum</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon-box">
                <div class="icon"><i class="bx bx-file"></i></div>
                <h4><a href="">Sed ut perspiciatis</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon-box">
                <div class="icon"><i class="bx bx-tachometer"></i></div>
                <h4><a href="">Magni Dolores</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon-box">
                <div class="icon"><i class="bx bx-world"></i></div>
                <h4><a href="">Nemo Enim</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon-box">
                <div class="icon"><i class="bx bx-slideshow"></i></div>
                <h4><a href="">Dele cardo</a></h4>
                <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon-box">
                <div class="icon"><i class="bx bx-arch"></i></div>
                <h4><a href="">Divera don</a></h4>
                <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
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
            v-for="(client,index) in clients" :key="index">
              <img :src="client" class="img-fluid" alt="">
            </div>
          </div>

        </div>
      </section><!-- End Clients Section -->
      <!-- ======= Testimonials Section ======= -->
      <section id="testimonials" class="testimonials">
        <div class="container" data-aos="zoom-in">

          <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper-wrapper">

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                    quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div><!-- End testimonial item -->

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                    quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div><!-- End testimonial item -->

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor
                    labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div><!-- End testimonial item -->

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim
                    dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div><!-- End testimonial item -->

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                    labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div><!-- End testimonial item -->

            </div>
            <div class="swiper-pagination"></div>
          </div>

        </div>
      </section><!-- End Testimonials Section -->



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
      clients:[
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
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>