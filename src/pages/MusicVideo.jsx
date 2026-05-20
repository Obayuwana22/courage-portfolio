import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const MusicVideo = () => {
  const { pathname } = useLocation();
  const section = pathname.toLowerCase().startsWith("/dp") ? "dp" : "colorist";

  const musicVideoProjects = projects.filter(
    (project) =>
      project.genre === "music video" && project.roles?.includes(section),
  );
  return (
    <div>
      <ProjectCard projects={musicVideoProjects} />
    </div>
  );
};
export default MusicVideo;
