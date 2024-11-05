// components/BookHeader.js
import { Link } from "react-router-dom";

export default function BookHeader() {
    return (
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">BookList</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/bookadd" className="nav-link">Add Book</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/bookview/:id" className="nav-link">View Book</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/bookedit/:id" className="nav-link">Edit Book</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
