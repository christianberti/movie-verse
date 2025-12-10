import { createRoot } from "react-dom/client";
import "./index.css";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
);
