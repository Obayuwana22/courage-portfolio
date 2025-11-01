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
import Colorist from "./pages/Colorist";
import DP from "./pages/DP";
import PhotoOp from "./pages/PhotoOp";
import Landing from "./pages/Landing";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        // errorElement: <Error />,
      },
      {
        path: "colorist",
        element: <Colorist />,
        children: [
          {
            index: true,
            element: <Work />,
          },
          {
            path: "/colorist/work",
            element: <Work />,
          },
          {
            path: "/colorist/music-video",
            element: <MusicVideo />,
          },
          {
            path: "/colorist/commercial",
            element: <Commercial />,
          },
          {
            path: "/colorist/short-film",
            element: <ShortFilm />,
          },
          {
            path: "/colorist/documentary",
            element: <Documentary />,
          },
          {
            path: "/colorist/feature-film",
            element: <FeatureFilm />,
          },
          {
            path: "/colorist/contact",
            element: <Contact />,
          },
          {
            path: "/colorist/project/:projectTitle",
            element: <ProjectDetails />,
          },
        ],
      },
      {
        path: "DP",
        element: <DP />,
        errorElement: <Error />,
      },
      {
        path: "photo-op",
        element: <PhotoOp />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "*",
    errorElement: <Error />,
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
