import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Header from './components/Header'
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
