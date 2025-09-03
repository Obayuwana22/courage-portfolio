import { Link } from "react-router-dom";
import { projects as allProjects } from "../data";
import { motion } from "framer-motion";

const ProjectCard = ({ projects = allProjects }) => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 mb-20">
        {projects.map((project) => {
          const { id, img, title, genre } = project;
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                ease: "easeIn",
              }}
              key={id}
              className="relative group transition duration-500"
            >
              <Link to={`/project/${title}`}>
                <img
                  src={img}
                  alt={title}
                  className="my-5 lg:my-0 lg:hover:opacity-50 transition duration-700
        aspect-[16/9] object-cover
                  "
                  loading="lazy"
                />
              </Link>

              <div className="text-center uppercase text-sm lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:opacity-0 lg:group-hover:opacity-100 lg:transition lg:duration-700">
                <span className="text-[#ff4500] font-medium">{title}</span>
                <h3 className=" lg:text-[#ff4500] dark:text-white">{genre}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectCard;
