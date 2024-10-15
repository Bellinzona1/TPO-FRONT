import axios from "axios";

const API_URL = 'http://localhost:8080/';

class ArticleService {
    getArticle() {
        return axios.get(API_URL + 'Article/', {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9udWxsIiwic3ViIjoiTWF0ZSIsImlhdCI6MTcyOTAyMzMyOSwiZXhwIjoxNzI5NjI4MTI5fQ.0xLmY2-YJKi1WH1ypeMCwMSpB_QN8ZuClPyqPpaMgY8`
            }
        });
    }
}

export default new ArticleService();
