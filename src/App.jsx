import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
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
  Documentary,
  FeatureFilm,
} from "./pages";
import { ThemeProvider } from "./components/ThemeProvider";
import ColorWork from "./pages/ColorWork";
import DOP from "./pages/DOP";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/color-work" replace/>,
      },
      {
        path: "color-work",
        element: <ColorWork />,
        children: [
          {
            index: true,
            element: <Work />,
          },
          {
            path: "/color-work/work",
            element: <Work />,
          },
          {
            path: "/color-work/music-video",
            element: <MusicVideo />,
          },
          {
            path: "/color-work/commercial",
            element: <Commercial />,
          },
          {
            path: "/color-work/short-film",
            element: <ShortFilm />,
          },
          {
            path: "/color-work/documentary",
            element: <Documentary />,
          },
          {
            path: "/color-work/feature-film",
            element: <FeatureFilm />,
          },
          {
            path: "/color-work/contact",
            element: <Contact />,
          },
          {
            path: "/color-work/project/:projectTitle",
            element: <ProjectDetails />,
          },
        ],
      },
      {
        path: "dop",
        element: <DOP />,
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
