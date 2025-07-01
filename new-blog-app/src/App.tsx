import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NotFound from "./components/notFound/NotFound";
import Contact from "./components/contact/Contact";
import BlogDetail from "./blogs/blogDetails/BlogDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
          {
          path: "blog/:id",
          element: <BlogDetail/>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
