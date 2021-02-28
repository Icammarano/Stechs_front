import axios from "axios";
// console.log("URL------------", process.env.URL_HOST);
const instance = axios.create({
    // baseURL: process.env.URL_HOST,
    baseURL: "http://localhost:8001",
});

// Add a response interceptor
instance.interceptors.response.use(
    (response) => {
        const { data } = response;
        if (!data) {
            console.log("Sin datos");
        }

        return response;
    },
    (error) => {
        // console.log("ERRRRORRR:", error);
        return Promise.reject(error.response);
    }
);

export default instance;
