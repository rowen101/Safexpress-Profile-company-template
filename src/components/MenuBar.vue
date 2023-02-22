<template><!-- ======= Header ======= -->
  <header id="header" class=" bg-custom d-flex align-items-center ">
    <div class="container d-flex align-items-center justify-content-between ">

      <h1 class="logo"><a href="#"><img :src="logo"/></a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt=""></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <li><router-link class="nav-link scrollto" active-class="active" to="/">Home</router-link></li>
          <li><router-link class="nav-link scrollto" active-class="active" to="/about">About</router-link></li>
          <li><router-link class="nav-link scrollto" active-class="active" to="/services">Sevices</router-link></li>
          <li><router-link class="nav-link scrollto" active-class="active" to="/faq">FAQ</router-link></li>
          <li><router-link class="nav-link scrollto" active-class="active" to="/contact">Contact</router-link></li>

        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
<!-- End Header --></template>

<script>
export default {
  data() {
    return {
      logo:require('@/assets/safexpress.png')
    }
  }
}

</script>
  