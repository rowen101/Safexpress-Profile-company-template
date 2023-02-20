import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomePage from './views/HomePage.vue';
import About from './views/AboutPage.vue';
import Contact from './views/ContactPage.vue';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: HomePage,
      
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
