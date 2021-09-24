import axios from "axios";

const API_URL = "https://swapi.dev/api/starships/";

class StarshipsDataService {
    getAll() {
        return axios.get(API_URL);
    }
}

export default new StarshipsDataService;