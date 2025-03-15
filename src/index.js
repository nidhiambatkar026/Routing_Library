import { createRoot } from "react-dom/client";
import Home from "./views/home";
import Dashboard from "./views/dashboard";
import Navbar from "./components/navbar";
import About from "./views/about";
import Contact from "./views/contact";

function App(){
    const path = window.location.pathname;
    console.log(path);

    if(path == "/"){
        root.render(<Home />)
    }
    else if(path == "/navbar"){
        root.render(<Navbar />)
    }
    else if (path == "/dashboard")
    {
        root.render(<Dashboard />)
    }
    else if (path == "/about"){
        root.render(<About />)
    }
    else if (path == "/contact"){
        root.render(<Contact />)
    }
    else{
        root.render(<h1>404 Page not found</h1>)
    }
}

const root = createRoot(document.getElementById("root"));
root.render(
    <>
    <App/>
    </>
);