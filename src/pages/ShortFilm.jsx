import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const ShortFilm = () => {
  const shortFilmProjects = projects.filter(
    (project) => project.service === "short film"
  );
  return (
    <div>
      <ProjectCard projects={shortFilmProjects} />
    </div>
  );
};
export default ShortFilm;
