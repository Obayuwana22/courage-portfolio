import { Link } from "react-router-dom";
import { projectCard } from "../data";

const ProjectCard = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {projectCard.map((card) => {
          const { id, img, title, service } = card;
          return (
            <div key={id} className="flex flex-col">
              <Link to="/project-details">
                <img src={img} alt={title} className="my-5 w-full" />
              </Link>
              <div className="text-center uppercase text-sm">
                <span className="text-red-500 font-medium">{title}</span>
                <h3>{service}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectCard;
