import axios from "axios";

const API_URL = "https://swapi.dev/api/people/";

class PeopleDataService {
    getAll() {
        return axios.get(API_URL);
    }

    getPersonal(id) {
        return axios.get(`${id}`);
    }
}

export default new PeopleDataService;