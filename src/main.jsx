import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";
import Home from "./App";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog"
 // Import your main site component
// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />, // Main component
  },
  {
    path: "/blog",
    element: <Blog />, // Main component
  },
  {
    path: "/contact",
    element: <Contact />, // Main component
  },
  {
    path: "/gallery",
    element: <Gallery />, // Main component
  },
  {
    path: "/about",
    element: <About />, // Main component
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
