import { Link } from "react-router-dom";
import { projects } from "../data";

const ProjectCard = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-20">
        {projects.map((project) => {
          const { id, img, title, service } = project;
          return (
            <div key={id} className="relative group transition duration-500">
              <Link to={`/project/${title}`}>
                <img
                  src={img}
                  alt={title}
                  className="my-5 lg:my-0 lg:hover:opacity-50 transition duration-700
           h-[300px] w-full object-cover
                  "
                />
              </Link>

              <div className="text-center uppercase text-sm lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:opacity-0 lg:group-hover:opacity-100 lg:transition lg:duration-700">
                <span className="text-red-500 font-medium">{title}</span>
                <h3 className=" lg:text-red-500 dark:text-white">{service}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectCard;
