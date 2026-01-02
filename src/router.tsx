import {createBrowserRouter, type RouteObject} from "react-router-dom";
// import App from "./App.tsx";
import {About} from "./pages/about.tsx";
import {Home} from "./pages/home.tsx";
import {Somedd} from "./pages/some-test.tsx";
import {ErrorPage} from "./pages/errr-page.tsx";
import App from "./App.tsx";
import {Layout} from "./pages/layout.tsx";
import {English} from "./pages/english/english.tsx";



export const routesConfig: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, // This is the default route for "/"
                element: <Home />,
            },
            {
                path: 'eng',
                    element: <English/>
            },

            {
                path: "about",
                element: <About />,
            },
        ],
    },
];

//export const router = createBrowserRouter(routesConfig);