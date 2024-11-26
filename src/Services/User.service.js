import axios from "axios";
import { authHeader } from "./Auth.service";

const API_URL = 'https://tpo-back.onrender.com/';

class UserService {
    postCheckout(content) {
        return axios.post(API_URL + 'User/checkout',content, { headers: authHeader() });
    }
}

export default new UserService();
