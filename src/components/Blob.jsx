import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Blob = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      d: [
        "M401.5,317Q327,384,229,420.5Q131,457,104,353.5Q77,250,122,178Q167,106,257,94Q347,82,411.5,166Q476,250,401.5,317Z",
        "M389,315.5Q322,381,235,408Q148,435,103.5,349Q59,263,104,181.5Q149,100,251.5,91Q354,82,398.5,166Q443,250,389,315.5Z",
        "M380,312.5Q318,375,233,403.5Q148,432,106,341Q64,250,102.5,175.5Q141,101,243,93.5Q345,86,390,168Q435,250,380,312.5Z",
      ],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
      },
    });
  }, [controls]);

  return (
    <svg
      className="w-[350px] md:w-[440px] lg:w-[540px]"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{
          d: "M401.5,317Q327,384,229,420.5Q131,457,104,353.5Q77,250,122,178Q167,106,257,94Q347,82,411.5,166Q476,250,401.5,317Z",
        }} // ✅ Initial value
        animate={controls}
        fill="#32F900"
      />
    </svg>
  );
};

export default Blob;
