import { axiosInstance } from './index';
const weatherApi = {
    async searchLocation(name) {
        const res = await axiosInstance.get(`https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1`);
        return res.data.results;
    },
    async fetchWeather(params) {
        const res = await axiosInstance.get('https://api.open-meteo.com/v1/forecast', { params });
        return res.data;
    },
    async fetchFavorites() {
        const res = await axiosInstance.get('http://localhost:3000/api/favorites');
        return res.data;
    },
    async addFavorite(location) {
        const res = await axiosInstance.post('http://localhost:3000/api/favorites', location);
        return res.data;
    },
    async deleteFavorite(location) {
        const res = await axiosInstance.delete(`http://localhost:3000/api/favorites/${location}`);
        return res.data;
    }
};
export default weatherApi;
