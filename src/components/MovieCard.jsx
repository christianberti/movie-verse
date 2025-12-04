import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = ({movie}) => {

    const {poster_path, title, id} = movie

    const image = `https://image.tmdb.org/t/p/w500${poster_path}`

  return (
    <Link to={`/movie/${id}`} className='card-container'>
        <img src={image} alt={title} className='poster'/>
        <h3>{title}</h3>
    </Link>
  )
}

export default MovieCard