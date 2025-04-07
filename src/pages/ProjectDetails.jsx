import { useParams } from "react-router-dom";
import { projects } from "../data";

const ProjectDetails = () => {
  const { projectTitle } = useParams();

  const project = projects.filter(
    (p) => p.title.toLowerCase() === projectTitle.toLowerCase()
  );
  return (
    <div>
      <div>
        {project.map((project) => (
          <div key={project.id} className="flex flex-col gap-10">
            {project.video ? (
              <video controls>
                <source src={project.video} type="video/mp4" />
              </video>
            ) : (
              <iframe
                className="h-[200px] md:h-[500px] lg:h-screen"
                src={project.youTubeLink}
                title="IBRAHIM | Short Film | 2023"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )}

            <div className="text-xl font-bold uppercase">{project.title}</div>
            <div>
              <div className="text-lg font-medium mb-2">
                Project Information
              </div>
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
              <div className="text-lg font-medium mb-2">
                Contact Information
              </div>
              <div>
                <span>Contact Details: </span>
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
                  <img src={img} alt="porfolio images" className="" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectDetails;
