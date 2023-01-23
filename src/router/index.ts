import { createRouter, createWebHistory } from "vue-router";
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Counter from '../components/Counter/index.vue'
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
    }
  ],
});

export default router;