import { createRoot } from "react-dom/client";
import Home from "./views/home";
import Dashboard from "./views/dashboard";
import About from "./views/about";
import Contact from "./views/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home/>,
    },
    {
        path : "/dashboard",
        element: <Dashboard/>,
    },
    {
        path: "/about",
        element : <About />,
    },
    {
        path :  "/contact",
        element: <Contact />,
    }
])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={router} />);