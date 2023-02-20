<template>
  <div >
  
 <MenuBar/>
  <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-view></router-view>
    <footer class="bg-gray-900 text-gray-400 py-4">
  <div class="container mx-auto flex justify-between items-center">
    <div>
      <p class="font-semibold">Contact Us:</p>
      <p>123 Main St</p>
      <p>Anytown, USA 12345</p>
      <p>Phone: (555) 555-5555</p>
      <p>Email: info@example.com</p>
    </div>
    <div>
      <p>&copy; Your Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
export default {
  name: 'App',
  components: {
    MenuBar
  }
}
</script>


