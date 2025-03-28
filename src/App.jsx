import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {
  HomeLayout,
  Commercial,
  Contact,
  FashionFilm,
  MusicVideo,
  ShortFilm,
  ShowReel,
  Work,
  ProjectDetails,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Work />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/music-video",
        element: <MusicVideo />,
      },
      {
        path: "/commercial",
        element: <Commercial />,
      },

      {
        path: "/short-film",
        element: <ShortFilm />,
      },
      {
        path: "/fashion-film",
        element: <FashionFilm />,
      },
      {
        path: "/show-reel",
        element: <ShowReel />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/project-details",
    element: <ProjectDetails />,
  },
]);

function App() {
  return (
    <div className="mt-10 mb-5 mx-5">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
