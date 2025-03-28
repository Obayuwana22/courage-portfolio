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
]);

function App() {
  return (
    <div className="mt-10 mb-5 mx-5 2xl:mx-0">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
