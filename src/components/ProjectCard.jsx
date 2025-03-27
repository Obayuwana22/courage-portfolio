import { projectCard } from "../data";

const ProjectCard = () => {
  return (
    <div>
      <div className="">
        {projectCard.map((card) => {
          const { id, img, title, service } = card;
          return (
            <div key={id}>
              <div className="my-5">
                <img src={img} alt={title} />
              </div>
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
