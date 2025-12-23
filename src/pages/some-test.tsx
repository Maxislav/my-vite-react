import {Outlet} from "react-router-dom";

export  function Somedd() {
    return (
        <div>
            <nav> {/* Your Navbar */} </nav>
            <main>
                {/* WITHOUT THIS, /about WILL NOT SHOW ANYTHING */}
                <Outlet />
            </main>
        </div>
    );
}