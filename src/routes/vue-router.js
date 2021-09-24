import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import People from "../views/People.vue";
import Starships from "../views/Starships.vue";
import Planets from "../views/Planets.vue";
import PersonalData from "../views/PersonalData.vue";
import StarShipData from "../views/StarshipData.vue"
import PlanetData from "../views/PlanetData.vue";

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
        path: "/starships",
        component: Starships
    },
    {
        path: "/planets",
        component: Planets
    },
    {
        path: "/data/character",
        name: "personal",
        component: PersonalData
    },
    {
        path: "/data/starship",
        name: "starship",
        component: StarShipData
    },
    {
        path: "/data/planet",
        name: "planet",
        component: PlanetData
    },],
});

export default router;