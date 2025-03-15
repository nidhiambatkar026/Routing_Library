import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="nav">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
            <Link to="/dashboard" className="nav-item">Dashboard</Link>
        </div>
    )
}