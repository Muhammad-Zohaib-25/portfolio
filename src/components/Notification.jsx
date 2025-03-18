import { motion, AnimatePresence } from "framer-motion";

const Notification = ({ message, bgColor, textColor, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ y: 50, opacity: 0 }} // Start from below
          animate={{ y: 0, opacity: 1 }} // Slide in
          exit={{ y: 50, opacity: 0 }} // Slide out
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-center ${bgColor} ${textColor}`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
