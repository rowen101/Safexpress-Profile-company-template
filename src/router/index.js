import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';
import Contact from '../views/ContactPage.vue';
import Faq from '../views/FaqPage.vue';
import Services from '../views/ServicesPage.vue';
import Mission from '../views/OurMissionPage.vue';
import Vission from '../views/OurVissionPage.vue';
import CorporateValue from '../views/CorporateValuePage.vue';
import Team from '../views/OurTeamPage.vue';
import Journey from '../views/OurJourneyPage.vue';
import CorporateStrategy from '../views/CorporateStrategyPage.vue';

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
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
        path: '/our-mission',
        name: 'mission',
        component: Mission
      },
      {
        path: '/our-vission',
        name: 'vission',
        component: Vission
      },
      {
        path: '/corporatevalue',
        name: 'corporatevalue',
        component: CorporateValue
      },
      {
        path: '/team',
        name: 'team',
        component: Team
      },
      {
        path: '/our-journey',
        name: 'journey',
        component: Journey
      },
      {
        path: '/corp-strategy',
        name: 'Corporate Strategy',
        component: CorporateStrategy
      }
  ]
});

export  default(router)