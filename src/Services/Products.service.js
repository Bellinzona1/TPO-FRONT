import axios from "axios";
import { authHeader } from "./Auth.service";

const API_URL = 'http://localhost:8080/';

class ArticleService {
    getArticle() {
        return axios.get(API_URL + 'Article/',{ headers: authHeader() });
    }


    getArticleById(id) {
        return axios.get(API_URL + 'Article/' + id, { headers: authHeader() });
    }
}

export default new ArticleService();
