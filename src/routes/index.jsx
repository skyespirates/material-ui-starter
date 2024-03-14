import Layout from "@components/Layout";
import Dashboard from "@pages/Dashboard";
import Movies from "@pages/Movies";
import Movie from "@pages/Movie";
import Games from "@pages/Games";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "movies/:movieId",
        element: <Movie />,
      },
      {
        path: "games",
        element: <Games />,
      },
    ],
  },
]);

export default router;
