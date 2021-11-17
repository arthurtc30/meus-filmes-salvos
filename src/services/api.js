import axios from 'axios';

// Base URL -> https://sujeitoprogramador.com/
// Todos os filmes -> r-api/?api=filmes/
// Traz o filme com o id informado -> r-api/?api=filmes/{id}

const api = axios.create({
    baseURL: "https://sujeitoprogramador.com"
});

export default api;
