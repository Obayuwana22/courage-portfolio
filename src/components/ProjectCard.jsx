import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ projects = [] }) => {
  const { pathname } = useLocation();

  const basePath = pathname.toLowerCase().startsWith("/dp") ? "/DP" : "/colorist";

  if (!Array.isArray(projects) || projects.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20 gap-4 lg:gap-6">
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
              className="relative group transition duration-500 w-full"
            >
              <Link to={`${basePath}/project/${title}`} className="block w-full relative overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-auto aspect-[16/9] object-cover lg:hover:opacity-50 transition duration-700 block"
                  loading="lazy"
                />
                <div className="text-center uppercase text-sm lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:opacity-0 lg:group-hover:opacity-100 lg:transition lg:duration-700">
                  <span className="text-[#ff4500] font-medium">{title}</span>
                  <h3 className=" lg:text-[#ff4500] dark:text-white">
                    {genre}
                  </h3>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectCard;
