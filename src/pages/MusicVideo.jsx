import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const MusicVideo = () => {
  const musicVideoProjects = projects.filter(
    (project) => project.genre === "music video"
  );
  return (
    <div>
      <ProjectCard projects={musicVideoProjects} />
    </div>
  );
};
export default MusicVideo;
