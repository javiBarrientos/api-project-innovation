import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import People from "../views/People.vue";
import PersonalData from "../views/PersonalData.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [{
        path: "/",
        component: Home
    },
    {
        path: "/people",
        component: People
    },
    {
        path: "/data/:id",
        component: PersonalData
    }],
});

export default router;