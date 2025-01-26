import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://mz-boss-restaurant-server.vercel.app",
});

const usePublicAxios = () => {
  return axiosPublic;
};

export { usePublicAxios };