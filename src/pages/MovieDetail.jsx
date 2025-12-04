import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../api/tmdb";
import './MovieDetail.css'

const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getMovie = async () => {
      try {
        const respuesta = await tmdbApi.get(`/movie/${id}`);
        setMovie(respuesta.data);
        setLoading(false)
      } catch (error) {
        console.error("Error al cargar la pelicula", error);
      }
    };

    getMovie();
  }, [id]);

  if (loading) return <h3>Cargando...</h3>;

  return (
    <div className="movie-detail">
      
      {movie && (
        <div className="banner">
          <img 
            src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}
            alt={movie.title}
            className="banner-img"
          />
        </div>
      )}

      <div className="container">
        <div className="content">
          
          <img 
            src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} 
            alt={movie.title} 
            className="poster"
          />

          <div className="text-info">
            <h1>{movie.title}</h1>
            
            {movie.tagline && <p className="tagline">{movie.tagline}</p>}
            
            <p className="overview">{movie.overview}</p>

            <div className="genres">
              {movie.genres.map(genre => (
                <span key={genre.id} className="genre-pill">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
