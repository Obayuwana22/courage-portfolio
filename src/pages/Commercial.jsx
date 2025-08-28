import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Commercial = () => {
  const commercialProjects = projects.filter(
    (project) => project.genre === "commercial"
  );
  return (
    <div>
      <ProjectCard projects={commercialProjects} />
    </div>
  );
};
export default Commercial;
