import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const FeatureFilm = () => {
  const featureFilmProjects = projects.filter(
    (project) => project.service === "feature film"
  );
  return (
    <div>
      <ProjectCard projects={featureFilmProjects} />
    </div>
  );
};
export default FeatureFilm;
