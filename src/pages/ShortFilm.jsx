import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const ShortFilm = () => {
  const { pathname } = useLocation();
  const section = pathname.toLowerCase().startsWith("/dp") ? "dp" : "colorist";

  const shortFilmProjects = projects.filter(
    (project) =>
      project.genre === "short film" && project.roles?.includes(section),
  );
  return (
    <div>
      <ProjectCard projects={shortFilmProjects} />
    </div>
  );
};
export default ShortFilm;
