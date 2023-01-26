import { createRouter, createWebHistory } from "vue-router";
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Counter from '../components/Counter/index.vue'
import Contact from "../views/Contact.vue";
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: "/about",
      name: 'About',
      component: About
    },
    {
        path: "/counter",
        name: 'Counter',
        component: Counter
    },
    {
      path: "/contact",
      name: 'Contact',
      component: Contact
  }
  ],
});

export default router;