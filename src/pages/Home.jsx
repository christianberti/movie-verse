import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"; // <--- Importamos esto
import tmdbApi from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const query = searchParams.get("query");
  

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchMovies = async () => {
      try {
        let response;
        if (query) {
          response = await tmdbApi.get("/search/movie", {
            params: { query: query, page: page },
          });
        } else {
          response = await tmdbApi.get("/movie/popular", {
            params: { page: page },
          });
        }
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMovies();
  }, [query, page]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (loading)
    return (
      <div className="spinner-container">
        <div className="spinner"></div>;
      </div>
    );

  return (
    <div className="home-container">
      <h1>{query ? `Resultados para: ${query}` : "Películas Populares"}</h1>

      <div className="grilla-peliculas">
        
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="pagination">
        <button disabled={page === 1} onClick={handlePrev}>
          Anterior
        </button>
        <button disabled={page === totalPages} onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
};

export default Home;
