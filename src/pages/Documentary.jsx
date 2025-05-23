import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Documentary = () => {
  const documentaryProjects = projects.filter(
    (project) => project.genre === "documentary"
  );
  return (
    <div>
      <ProjectCard projects={documentaryProjects} />
    </div>
  );
};
export default Documentary;
