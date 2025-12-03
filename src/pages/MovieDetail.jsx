import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../api/tmdb";

const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const respuesta = await tmdbApi.get(`/movie/${id}`);
        setMovie(respuesta.data);
      } catch (error) {
        console.error("Error al cargar la pelicula", error);
      }
    };

    getMovie();
  }, [id]);

  console.log(movie)

  return (
    <div>
      {movie && (
        <div>
          <img
            src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
            alt={movie.title}
          />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
