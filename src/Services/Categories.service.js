import axios from "axios";
import { authHeader } from "./Auth.service";
const API_URL = 'https://tpo-back.onrender.com/';

class CategoriesService {
    getCategories() {
        return axios.get(API_URL + 'categories/',{ headers: authHeader() });
    }
}

export default new CategoriesService();
