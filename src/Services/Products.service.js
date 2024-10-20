import axios from "axios";
import { authHeader } from "./Auth.service";

const API_URL = 'https://tpo-back.onrender.com/';

class ArticleService {
    getArticle() {
        return axios.get(API_URL + 'Article/',{ headers: authHeader() });
    }


    getArticleById(id) {
        return axios.get(API_URL + 'Article/' + id, { headers: authHeader() });
    }
}

export default new ArticleService();
