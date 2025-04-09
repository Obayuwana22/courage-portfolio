import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import {
  HomeLayout,
  Commercial,
  Contact,
  MusicVideo,
  ShortFilm,
  Work,
  ProjectDetails,
  // FeatureFilm,
  Documentary,
} from "./pages";
import { ThemeProvider } from "./components/ThemeProvider";

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
      // {
      //   path: "/feature-film",
      //   element: <FeatureFilm />,
      // },
      {
        path: "/documentary",
        element: <Documentary />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/project/:projectTitle",
        element: <ProjectDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <div className="font-quicksand  bg-white dark:bg-black">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
