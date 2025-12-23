import {Link, Outlet} from "react-router-dom";

export  function Layout() {
    return (
        <div className="app-container">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <hr />

            {/* Сюда будут рендериться Home, About и т.д. */}
            <Outlet />
        </div>
    );
}