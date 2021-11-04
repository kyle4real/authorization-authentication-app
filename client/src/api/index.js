import axios from "axios";
import store from "../app/store";

const API = axios.create({ baseURL: "http://localhost:5000", withCredentials: true });

const api = "/api";

// AUTH
const authRoute = `${api}/auth`;
export const login = (form) => API.post(`${authRoute}/login`, form);
export const register = (form) => API.post(`${authRoute}/register`, form);
export const refresh = () => API.post(`${authRoute}/refresh_token`);

// PRODUCTS
const productsRoute = `${api}/products`;
export const getProducts = () => API.get(`${productsRoute}/`);

// CUSTOMERS
const customersRoute = `${api}/customers`;
export const getCustomers = () => API.get(`${customersRoute}/`);

// SALES
const salesRoute = `${api}/sales`;
export const getSales = () => API.get(`${salesRoute}/`);
