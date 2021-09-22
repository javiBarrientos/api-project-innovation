import axios from "axios";

const API_URL = "https://swapi.dev/api/people/";

class PeopleDataService {
    getAll() {
        return axios.get(API_URL);
    }
}

export default new PeopleDataService;