import { useLocation } from "react-router-dom";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  const { pathname } = useLocation();
  const section = pathname.toLowerCase().startsWith("/dp") ? "dp" : "colorist";

  const filtered = projects.filter((p) => p.roles?.includes(section));

  return (
    <div>
      <ProjectCard projects={filtered} />
    </div>
  );
};

export default Work;
