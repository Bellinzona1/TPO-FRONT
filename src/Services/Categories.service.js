import axios from "axios";
import { authHeader } from "./Auth.service";
const API_URL = 'http://localhost:8080/';

class CategoriesService {
    getCategories() {
        return axios.get(API_URL + 'categories/',{ headers: authHeader() });
    }
}

export default new CategoriesService();
