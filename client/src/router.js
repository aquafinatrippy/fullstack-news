import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "@/views/Login";
import { TokenService } from "@/services/storage.service";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(
    record => record.meta.onlyWhenLoggedOut
  );
  const loggedIn = !!TokenService.getToken();
  if (!isPublic && !loggedIn) {
    return next({
      path: "/login",
      query: { redirect: to.fullPath }
    });
  }
  if (loggedIn && onlyWhenLoggedOut) {
    return next("/");
  }
  next();
});

export default router;
