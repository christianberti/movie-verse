import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
  const [favoritos, setFavoritos] = useState(() => {
    const favs = localStorage.getItem("peliculasFavoritas");
    return favs ? JSON.parse(favs) : []; // Si hay datos úsalos, si no, array vacío.
  });

  useEffect(() => {
    localStorage.setItem("peliculasFavoritas", JSON.stringify(favoritos));
  }, [favoritos]);

  const agregarFavorito = (pelicula) => {
    const existe = favoritos.some((f) => f.id === pelicula.id);
    if (!existe) {
      setFavoritos([...favoritos, pelicula]);
    }
  };

  const eliminarFavorito = (id) => {
    setFavoritos((prev) => prev.filter((f) => f.id !== id));
  };

  const esFavorito = (id) => {
    return favoritos.some((fav) => fav.id === id);
  };

  return (
    <FavoritesContext.Provider value={{favoritos, agregarFavorito, eliminarFavorito, esFavorito}}>
      {children}
    </FavoritesContext.Provider>
  );
};
