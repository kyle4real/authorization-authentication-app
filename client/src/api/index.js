import axios from "axios";
import { authActions } from "../app/slices/auth-slice";
import store from "../app/store";
import { isTokenValid } from "../utils/accessToken";
import { createBrowserHistory } from "history";

const API = axios.create({ baseURL: "http://localhost:5000", withCredentials: true });

const getAccessToken = () => {
    const state = store.getState();
    const accessToken = state.auth.accessToken;
    return accessToken;
};

API.interceptors.request.use((req) => {
    const token = getAccessToken();
    req.headers.Authorization = `Bearer ${token || ""}`;
    return req;
});

const pushLogin = () => {
    if (window.location.pathname === "/login") return;
    createBrowserHistory().push("/login");
    window.location.reload();
};

API.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        if (err.response) {
            if (
                err.response.data.error === "No refresh token detected" ||
                err.response.data.error === "Invalid refresh token"
            ) {
                pushLogin();
                return Promise.reject(err);
            }
            if (err.response.data.error === "jwt expired") {
                pushLogin();
                return Promise.reject(err);
            }
            if (err.response.status === 401) {
                try {
                    const { data } = await API.post(`${authRoute}/refresh_token`);
                    store.dispatch(authActions.replaceAccessToken({ data }));

                    return API(err.config);
                } catch (error) {
                    // throw new Error(error);
                    return Promise.reject(error);
                }
            }
        }

        return Promise.reject(err);
    }
);

const api = "/api";

// AUTH
const authRoute = `${api}/auth`;
export const login = (form) => API.post(`${authRoute}/login`, form);
export const register = (form) => API.post(`${authRoute}/register`, form);
export const refresh = () => API.post(`${authRoute}/refresh_token`);
export const logout = () => API.get(`${authRoute}/logout`);
// USER
export const me = () => API.get(`${authRoute}/me`);

// PRODUCTS
const productsRoute = `${api}/products`;
export const getProducts = () => API.get(`${productsRoute}/`);
export const createProduct = (form) => API.post(`${productsRoute}/`, form);
// PRODUCT
export const getProduct = (productId) => API.get(`${productsRoute}/${productId}`);

// CUSTOMERS
const customersRoute = `${api}/customers`;
export const getCustomers = () => API.get(`${customersRoute}/`);
export const createCustomer = (form) => API.post(`${customersRoute}/`, form);

// SALES
const salesRoute = `${api}/sales`;
export const getSales = () => API.get(`${salesRoute}/`);
