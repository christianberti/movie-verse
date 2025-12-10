import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../api/tmdb";
import "./MovieDetail.css";
import { FavoritesContext } from "../context/FavoritesContext";

const MovieDetail = () => {
  const { id } = useParams();

  const { agregarFavorito, eliminarFavorito, esFavorito } =
    useContext(FavoritesContext);

  const handleToggleFavorite = () => {
    if (esFavorito(movie.id)) {
      eliminarFavorito(movie.id);
    } else {
      agregarFavorito(movie);
    }
  };

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const respuesta = await tmdbApi.get(`/movie/${id}`);
        setMovie(respuesta.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar la pelicula", error);
      }
    };

    getMovie();
  }, [id]);

  if (loading)
    return (
      <div className="spinner-container">
        <div className="spinner"></div>;
      </div>
    );

  const isFav = esFavorito(movie.id);

  return (
    <div className="movie-detail">
      {movie && (
        <div className="banner">
          <img
            src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
            alt={movie.title}
            className="banner-img"
          />
        </div>
      )}

      <div className="container">
        <div className="content">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title}
            className="poster"
          />

          <div className="text-info">
            <h2>{movie.title}</h2>

            {movie.tagline && <p className="tagline">{movie.tagline}</p>}

            <p className="overview">{movie.overview}</p>

            <div className="genres">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="genre-pill">
                  {genre.name}
                </span>
              ))}
            </div>
            <button
              onClick={handleToggleFavorite}
              className={`fav-btn ${isFav ? "remove" : "add"}`}
            >
              {isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
