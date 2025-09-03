import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="text-center mt-20"
    >
      <div className="italic font-medium text-black dark:text-white">
        Still brewing...Anticipate.
      </div>
    </motion.div>
  );
};
export default ComingSoon;
