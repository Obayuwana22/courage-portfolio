import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const FeatureFilm = () => {
  const { pathname } = useLocation();
  const section = pathname.toLowerCase().startsWith("/dp") ? "dp" : "colorist";

  const featureFilmProjects = projects.filter(
    (project) =>
      project.genre === "feature film" && project.roles?.includes(section),
  );
  return (
    <div>
      <ProjectCard projects={featureFilmProjects} />
    </div>
  );
};
export default FeatureFilm;
