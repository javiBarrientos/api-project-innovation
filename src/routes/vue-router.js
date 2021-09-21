import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import People from "../views/People";
import PersonalData from "../views/PersonalData";

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
        path: "/data",
        component: PersonalData
    }]
})

export default router;