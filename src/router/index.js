import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import("../views/Admin.vue")
  },
  {
    path: "/admin/student",
    name: "Adminstd",
    component: () =>
      import("../components/Adminstd.vue")
  },
  {
    path: "/admin/teacher",
    name: "Admintch",
    component: () =>
      import("../components/Admintch.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
