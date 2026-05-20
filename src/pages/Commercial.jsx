import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Commercial = () => {
  const { pathname } = useLocation();
  const section = pathname.toLowerCase().startsWith("/dp") ? "dp" : "colorist";

  const commercialProjects = projects.filter(
    (project) =>
      project.genre === "commercial" && project.roles?.includes(section),
  );
  return (
    <div>
      <ProjectCard projects={commercialProjects} />
    </div>
  );
};
export default Commercial;
