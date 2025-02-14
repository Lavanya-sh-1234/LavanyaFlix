import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact, contactData } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMoviesDetails } from "./api/GetMovieDetails";
import { Loading } from "./components/layout/Loading";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
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
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider
        router={router}
        fallbackElement={
          <div>
            <Loading />
          </div>
        }
      />
    </>
  );
};

export default App;
