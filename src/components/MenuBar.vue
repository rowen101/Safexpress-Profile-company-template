<template>
  <!-- ======= Header ======= -->
  <header id="header" class=" bg-custom d-flex align-items-center ">
    <div class="container d-flex align-items-center justify-content-between ">

      <h1 class="logo"><a href="#"><img :src="logo" /></a></h1>



      <nav id="navbar" :class="navOpen">
        <ul>
          <!-- <li><router-link class="nav-link scrollto" active-class="active" to="/">Home</router-link></li> -->
          <li><a class="nav-link scrollto" href="/">Home</a></li>
          <li><a class="nav-link scrollto" href="/about">About</a></li>
          <li><a class="nav-link scrollto" href="/services">Service</a></li>
          <li><a class="nav-link scrollto" href="/faq">FAQ</a></li>
          <li><a class="nav-link scrollto" href="/contact">Contact</a></li>

        </ul>
        <i :class="iclass" @click="toggleNav()"></i>
      </nav>

      <!-- .navbar -->

    </div>
  </header>
  <!-- End Header -->
</template>

<script>

export default {

  data() {

    const logo = require('@/assets/safexpress.png')
    return {
      logo,
      navOpen: 'navbar',
      iclass: 'bi bi-list mobile-nav-toggle'
    }
  },
  methods: {
    toggleNav() {
      if (this.navOpen == 'navbar') {
        this.navOpen = 'navbar-mobile'
        this.iclass = 'bi mobile-nav-toggle bi-x'
        console.log(this.navOpen)
      }
      else {
        this.navOpen = 'navbar'
        this.iclass = 'bi bi-list mobile-nav-toggle'
        console.log(this.navOpen)
      }
    },

  }
}

</script>
  