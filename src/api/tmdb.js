import axios from 'axios';

const tmdbApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    language: 'es-ES'
  }
});

// Interceptamos la petición para saber qué tipo de clave usó el usuario
tmdbApi.interceptors.request.use((config) => {
  const apiKeyOrToken = import.meta.env.VITE_API_KEY;
  if (apiKeyOrToken) {
    // Si la clave es muy larga (JWT), es un "API Read Access Token" (v4)
    if (apiKeyOrToken.length > 50) {
      config.headers['Authorization'] = `Bearer ${apiKeyOrToken}`;
    } else {
      // Si es la corta, es un "API Key" (v3)
      config.params = config.params || {};
      config.params.api_key = apiKeyOrToken;
    }
  }
  return config;
});

export default tmdbApi;