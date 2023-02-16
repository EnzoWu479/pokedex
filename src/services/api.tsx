/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
// api.interceptors.request.use(
//   async (config: any) => {
//     const accessToken = localStorage.getItem(
//       `@${import.meta.env.VITE_API_PROJECT_NAME}: accessToken`
//     );
//     if (accessToken) {
//       config.headers!.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error: any) => {
//     Promise.reject(error);
//   }
// );
export default api;
