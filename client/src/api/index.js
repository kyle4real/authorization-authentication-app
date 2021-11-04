import axios from "axios";
import { authActions } from "../app/slices/auth-slice";
import store from "../app/store";

const API = axios.create({ baseURL: "http://localhost:5000", withCredentials: true });

const getAccessToken = () => {
    const state = store.getState();
    const accessToken = state.auth.accessToken;
    return accessToken;
};

API.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${getAccessToken() || ""}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;

        if (err.response) {
            // Access Token Expired
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;

                try {
                    const { data } = await refresh();
                    const { accessToken } = data.data;
                    API.defaults.headers.Authorization = accessToken;
                    store.dispatch(authActions.replaceAccessToken({ data }));
                    return API(originalConfig);
                } catch (error) {
                    if (error.response && error.response.data) {
                        return Promise.reject(error.response.data);
                    }

                    return Promise.reject(error);
                }
            }

            if (err.response.status === 403 && err.response.data) {
                return Promise.reject(err.response.data);
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

// PRODUCTS
const productsRoute = `${api}/products`;
export const getProducts = () => API.get(`${productsRoute}/`);
export const createProduct = (form) => API.post(`${productsRoute}/`, form);

// CUSTOMERS
const customersRoute = `${api}/customers`;
export const getCustomers = () => API.get(`${customersRoute}/`);
export const createCustomer = (form) => API.post(`${customersRoute}/`, form);

// SALES
const salesRoute = `${api}/sales`;
export const getSales = () => API.get(`${salesRoute}/`);
