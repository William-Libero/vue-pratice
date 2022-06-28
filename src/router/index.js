import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from "vue-router";

Vue.use(VueRouter)

const routes = [];

routes.push({
  path: "*",
  redirect: "/home"
});
routes.push({
  path: "/home",
  name: "home",
  meta: { layout: 'default' }, component: () => import("../views/Home/Home")
});

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router
