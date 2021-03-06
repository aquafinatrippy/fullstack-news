import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "@/views/Login";
import secure from "@/views/secure";
import Register from "@/views/Register";
import NewNews from "@/views/NewNews";
import NewsPage from "@/views/NewsPage";
import Profile from '@/views/Profile'
import store from "@/store";

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
            component: Login
        },
        {
            path: "/register",
            name: "Register",
            component: Register
        },
        {
            path: "/secure",
            name: "secure",
            component: secure,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/add",
            name: "add",
            component: NewNews,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/news/:news",
            name: "viewNews",
            component: NewsPage
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router;
