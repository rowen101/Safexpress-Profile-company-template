<template>
  <!-- ======= Header ======= -->
  <header id="header" class=" bg-custom d-flex align-items-center ">
    <div class="container d-flex align-items-center justify-content-between ">

      <h1 class="logo"><a href="#"><img :src="logo" /></a></h1>



      <nav id="navbar" :class="navOpen">
        <ul>

            <li v-for="(item, index) in menuItems" :key="index" :class="{'dropdown' : item.submenu}">
              <a :href="item.url">{{ item.label }} <i :class="{'bi bi-chevron-down' :item.submenu}" @click="toggledropdown"></i></a>
              <ul v-if="item.submenu" :class="dropactive">      
                  <li v-for="(subitem,index) in item.submenu" :key="index">
                    <a :href="subitem.url">{{ subitem.label }} </a>
                  </li>
              </ul>
            </li>
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
    
    const menuItems =[
      { id:1, label: 'Home',url:'/'},
      { id:1, label: 'About',url:'#',submenu:[
        {id:4 , label:'Our Mission', url:'/'},
        {id:5 , label:'Our Vission', url:'/'},
        {id:6 , label:'Corporate Values', url:'/'},
      ]},
      { id:7, label: 'Services',url:'/services'},
      { id:8, label: 'FAQ',url:'/faq'},
      { id:9, label: 'Contact',url:'/contact'},
    ]
    return {
      menuItems,
      logo,
      navOpen: 'navbar',
      dropactive: 'dropdown',
      iclass: 'bi bi-list mobile-nav-toggle'
    }
  },
  methods: {
    toggleNav() {
      if (this.navOpen == 'navbar') {
        this.navOpen = 'navbar navbar-mobile'
        this.iclass = 'bi mobile-nav-toggle bi-x'
      
      }
      else {
        this.navOpen = 'navbar'
        this.iclass = 'bi bi-list mobile-nav-toggle'
      
      }
    },
    toggledropdown(){
      if(this.dropactive == "dropdown"){
        this.dropactive = 'dropdown-active'
        console.log(this.dropactive)
      }
      else if(this.dropactive == "dropdown-active"){
        this.dropactive == "dropdown"
        console.log(this.dropactive)
      }
    }
  }
}

</script>
  