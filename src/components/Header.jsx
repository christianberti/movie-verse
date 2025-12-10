import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [input, setInput] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    navigate(`/?query=${input}`);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="header-container">
      <Link to={"/"}>MovieVerse</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar peliculas..."
          value={input}
          onChange={handleChange}
        />
      </form>
      <Link to={"/favorites"}>Favoritas</Link>
    </div>
  );
};

export default Header;
