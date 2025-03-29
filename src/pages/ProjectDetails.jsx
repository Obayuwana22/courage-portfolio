import { useParams } from "react-router-dom";
import { projects } from "../data";

const ProjectDetails = () => {
  const { projectTitle } = useParams();

  const project = projects.find((p) => p.title === projectTitle);
  return (
    <div>
      <div className="flex flex-col gap-10">
        <video controls>
          <source src={project.video} video="video/mp4" />
        </video>
        <div className="text-xl font-bold uppercase">{project.title}</div>

        <div>
          <div className="text-lg font-medium mb-2">Project Information</div>
          <div>
            <span>Title: </span>
            <span>{project.projectInformation.title}</span>
          </div>
          <div>
            <span>Client Name: </span>
            <span>{project.projectInformation.clientName}</span>
          </div>
          <div>
            <span>Director / DP Name: </span>
            <span>{project.projectInformation.directorDPName}</span>
          </div>
        </div>

        <div>
          <div className="text-lg font-medium mb-2">Your Role</div>
          <div>
            <span>Color Grading Style: </span>
            <span>{project.yourRole.colorGradingStyle}</span>
          </div>
          <div>
            <span>Software Used: </span>
            <span>{project.yourRole.softwareUsed}</span>
          </div>
          <div>
            <span>Special Techniques: </span>
            <span>{project.yourRole.specialTechniques}</span>
          </div>
        </div>

        <div>
          <div className="text-lg font-medium mb-2">Contact Information</div>
          <div>
            <span>Contact Details: </span>
            <span>{project.callToAction.contactDetails}</span>
          </div>
          <div>
            <span>Social Media Links: </span>
            <span>{project.callToAction.socialMediaLinks}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
