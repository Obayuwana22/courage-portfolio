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
import ColorWorks from "./pages/ColorWorks";
import DOP from "./pages/DOP";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/color-works" replace/>,
      },
      {
        path: "color-works",
        element: <ColorWorks />,
        children: [
          {
            index: true,
            element: <Work />,
          },
          {
            path: "/color-works/work",
            element: <Work />,
          },
          {
            path: "/color-works/music-video",
            element: <MusicVideo />,
          },
          {
            path: "/color-works/commercial",
            element: <Commercial />,
          },
          {
            path: "/color-works/short-film",
            element: <ShortFilm />,
          },
          {
            path: "/color-works/documentary",
            element: <Documentary />,
          },
          {
            path: "/color-works/feature-film",
            element: <FeatureFilm />,
          },
          {
            path: "/color-works/contact",
            element: <Contact />,
          },
          {
            path: "/color-works/project/:projectTitle",
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
