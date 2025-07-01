import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"blog/:id",
          element:<BlogDetail/>
        }
      ],

    },
    {
      path:"*",
      element:<NotFound/>
    }
  ])
  return <RouterProvider router={router}/>;
}

export default App;
