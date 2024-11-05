import { Link } from "react-router-dom";
export default function Headerapp() {
    return (
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            EcomList
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/fake-api" className="nav-link">
                            JsonPlaceholder
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/todo" className="nav-link">
                            TodoList
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/training-Http" className="nav-link">
                        Training
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
