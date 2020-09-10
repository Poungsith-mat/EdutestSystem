import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/admin/student",
    name: "Adminstd",
    component: () =>
      import("../views/Adminstd.vue")
  },
  {
    path: "/admin/teacher",
    name: "Admintch",
    component: () =>
      import("../views/Admintch.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
