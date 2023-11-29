import axios from "axios";

export const baseReqSettingsRTQ = {
    baseUrl: import.meta.env.VITE_SERVER_URL,
    headers: {
        'Content-Type': 'application/json'
    },
}

export const axiosClassic = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: {
        'Content-Type': 'application/json'
    },
})