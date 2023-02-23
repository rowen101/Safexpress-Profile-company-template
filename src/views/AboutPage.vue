<template><!-- ======= About Section ======= -->
  <section id="about" class="about section-bg">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
          <!-- <img src="assets/img/about.jpg" class="img-fluid" alt=""> -->
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up"
          data-aos-delay="100">
          <h3>We at Safexpress Logistics Inc. uphold our good reputation as one of the best logistics company
            in the Philippines.</h3>
          <p class="fst-italic">
            We're dedicated to providing our clients the very best of Supply Chain
            Solutions, with an emphasis on our companies mission, vision & core values.
          </p>
          <ul>
            <li>
              <i class="bx bx-store-alt"></i>
              <div>

                <p>Safexpress Logistics Inc.continues its mission in providing outstanding
                  delivery and warehouse solutions to our existing cients.</p>
              </div>
            </li>
            <li>
              <i class="bx bx-images"></i>
              <div>

                <p>We aspire to be the creative and innovative leader in the industry
                  anticipating the market needs and steering our company towards long-
                  term success and growth.</p>
              </div>
            </li>
          </ul>

        </div>
      </div>

    </div>
  </section>
<!-- End About Section --></template>
<script>
export default {
  data() {
    return {
      about: require('@/assets/img/about.png')
    }
  },
  methods:{
    forcePageReload() {
          window.location.reload();
        }
  },
  watch: function() {
    this.forcePageReload();
  }
}
</script>