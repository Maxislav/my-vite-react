import {Link, Outlet} from "react-router-dom";

export  function Layout() {
    return (
        <div className="app-container">


            {/* Сюда будут рендериться Home, About и т.д. */}
            <Outlet />
        </div>
    );
}