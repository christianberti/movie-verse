import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import MovieCard from '../components/MovieCard'

const Favorites = () => {

    const { favoritos } = useContext(FavoritesContext)

  return (
    <div className="container">
      <h1>Peliculas favoritas</h1>
      
      <div className="grilla-peliculas">
        {favoritos.map((movie) => (
           <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Favorites