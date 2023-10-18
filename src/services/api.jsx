import axios from "axios";

// Chave de API: 603a46083ce79cb27f37e4bf6d6f7b76
// Base da Url:https://api.themoviedb.org/3/
//Url da api:https://api.themoviedb.org/3/movie/550?api_key=603a46083ce79cb27f37e4bf6d6f7b76

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});


export default api;