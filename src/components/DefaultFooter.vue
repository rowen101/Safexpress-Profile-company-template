<template>
    <!-- ======= Footer ======= -->
  <footer id="footer">



<div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-3 col-md-6 footer-contact">
        <h3>SafeXpress<span>.</span></h3>
        <p>
          
          <strong>Phone:</strong> <br>
          <strong>Email:</strong> <br>
        </p>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul v-for="(service, index) in services" :key="index">
          <li><i class="bx bx-chevron-right"></i> <a :href="service.link">{{ service.ourservice}}</a></li>
        
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Social Networks</h4>
        
        <div class="social-links mt-3">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div class="container py-4">
  <div class="copyright">
    &copy; Copyright <strong><span>Safexpress</span></strong>. All Rights Reserved
  </div>
 
</div>
</footer><!-- End Footer -->
</template>

<script>
export default{
    data(){
      return{
        services:[
          {
            ourservice: 'OUR MISSION',
            link:'/our-mission'
          },
          {
            ourservice: 'OUR VISION',
            link:'/our-vission'
          },
          {
            ourservice: 'CORPORATE VALUES',
            link:'/corporatevalue'
          },
          {
            ourservice: 'OUR TEAM',
            link:'/team'
          },
          {
            ourservice: 'OUR JOURNEY',
            link:'/our-journey'
          },
          {
            ourservice: 'CORPORATE STRATEGY',
            link:'/corp-strategy'
          }
        ]
      }
    },
    methods:{

    }
}
</script>