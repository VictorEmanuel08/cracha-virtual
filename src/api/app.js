import axios from "axios";

export const app = axios.create({
    baseURL: "https://crachavirtual.herokuapp.com"
})
