import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import ComingSoon from "../components/ComingSoon";

const Documentary = () => {
  const { pathname } = useLocation();
  const section = pathname.toLowerCase().startsWith("/dp") ? "dp" : "colorist";

  const documentaryProjects = projects.filter(
    (project) =>
      project.genre === "documentary" && project.roles?.includes(section),
  );

  if (documentaryProjects.length === 0) {
    return <ComingSoon />;
  }
  return (
    <div>
      <ProjectCard projects={documentaryProjects} />
    </div>
  );
};
export default Documentary;
