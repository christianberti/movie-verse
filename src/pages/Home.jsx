import { useEffect, useState } from "react";
import tmdbApi from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import './Home.css'

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        // 1. USAMOS la instancia para pedir datos a una ruta específica
        const respuesta = await tmdbApi.get("/movie/popular");

        // 2. Guardamos SOLO los resultados (la lista de pelis)
        // Axios devuelve todo en .data, y TMDB pone la lista en .results
        setMovies(respuesta.data.results);
      } catch (error) {
        console.error("Error cargando películas:", error);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <div className="grilla-peliculas">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
