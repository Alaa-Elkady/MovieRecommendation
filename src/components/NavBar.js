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
       <Link to="/trending"> <li> Trending</li></Link>
        
      </ul>
    
      
      
    </nav>
  );
}
