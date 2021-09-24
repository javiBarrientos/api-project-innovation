import axios from "axios";

const API_URL = "https://swapi.dev/api/planets/";

class PlanetsDataService {
    getAll() {
        return axios.get(API_URL);
    }
}

export default new PlanetsDataService;