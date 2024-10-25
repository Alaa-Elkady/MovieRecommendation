import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="fChar">Movie</span>
        <span className="lChar">S</span>
      </div>
      <ul className="nav-links">
       <Link to="/"> <li>Home</li></Link>
        <Link to="/movies"><li>Movies</li></Link>
        <li> Series</li>
        <li>Trending</li>
      </ul>
      <div className="search-container">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="search-input"
        />
        <a href="#" className="search-btn">
          <i className="fas fa-search"></i>
        </a>
      </div>
    </nav>
  );
}
