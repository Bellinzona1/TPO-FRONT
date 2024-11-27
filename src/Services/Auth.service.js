// auth.js
import axios from "axios";
import { setUser } from "../Redux/userActions"; // Asegúrate de importar las acciones
import { store } from "../Redux/store"; // Asegúrate de importar el store

const API_URL = 'https://tpo-back.onrender.com/';

function authHeader() {
    const token = localStorage.getItem('accessToken');
    return { Authorization: 'Bearer ' + token };
}

function registerHeader() {
    return { "Content-Type": "application/json" };
}

function login(DataUser) {
    console.log(DataUser);
    return axios.post(API_URL + "User/login", DataUser)
        .then(response => {
            const accessToken = response.data.token;
            const userAplication = response.data.username;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("userAplication", userAplication);

            store.dispatch(setUser(userAplication));

            console.log(response.data.token);
            console.log(response.data.username);
            return response;
        });
}

function register(data) {
    return axios.post(API_URL + "User/Register", data, { headers: registerHeader() });
}

function logOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userAplication');
    store.dispatch(clearUser()); // Limpiar el usuario en Redux
}

async function CurrentUser() {
    const userAplication = localStorage.getItem('userAplication');
    const response = await axios.get(API_URL + "User/username/" + userAplication, { headers: authHeader() });
    console.log(response);
    return response;
}

export { authHeader, registerHeader, login, register, logOut, CurrentUser };
