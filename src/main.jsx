import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import './index.css'
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movie/:id" element={<MovieDetail />}/>
    </Routes>
  </BrowserRouter>
);
