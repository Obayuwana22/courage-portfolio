import { useParams } from "react-router-dom";
import { projects } from "../data";
import ComingSoon from "../components/ComingSoon";

const ProjectDetails = () => {
  const { projectTitle } = useParams();

  const project = projects.find(
    (p) => p.title.toLowerCase() === projectTitle.toLowerCase()
  );

  if (!project || !project.projectInformation) {
    return <ComingSoon />;
  }
  return (
    <div>
      <div className="text-black dark:text-white">
        {project.video ? (
          <video controls className="w-full h-[200px] md:h-[500px] lg:h-screen">
            <source src={project.video} type="video/mp4" />
          </video>
        ) : project.youTubeLink ? (
          <iframe
            className="w-full h-[200px] md:h-[500px] lg:h-screen"
            src={project.youTubeLink}
            title="IBRAHIM | Short Film | 2023"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ) : (
          <img
            src={project.img}
            alt="Fallback for missing video content"
            className="h-[200px] md:h-[500px] lg:h-screen object-cover"
          />
        )}

        <div className="text-xl font-bold uppercase">{project.title}</div>
        <div>
          <div className="text-lg font-semibold mb-2">Project Information</div>
          <div>
            <span className="font-medium">Title: </span>
            <span>{project.projectInformation.title}</span>
          </div>
          <div>
            <span className="font-medium">Client: </span>
            <span>{project.projectInformation.clientName}</span>
          </div>
          <div>
            <span className="font-medium">Director: </span>
            <span>{project.projectInformation.directorName}</span>
          </div>
          <div>
            <span className="font-medium">Director of Photography: </span>
            <span>{project.projectInformation.directorOfPhotographyName}</span>
          </div>
        </div>

        <div>
          <div className="text-lg font-medium mb-2">Contact Information</div>
          <div>
            <span className="font-medium">Contact Details: </span>
            <span>{project.callToAction.contactDetails}</span>
          </div>
          {/* <div>
                <span>Social Media Links: </span>
                <span>{project.callToAction.socialMediaLinks}</span>
              </div> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(project.gallery).map((img, index) => (
            <div key={index} className="m-1">
              <img src={img} alt="porfolio images" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
