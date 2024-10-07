import { motion } from "framer-motion";  
const MiniSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-5 md:p-10 space-y-6 md:space-y-0 md:space-x-6">
          <motion.div
    whileInView={{opacity: 1, x: 1}}
    initial={{ opacity:0, x: 100}}
    transition={{duration: 0.5,}}
      className="text-center flex-1">
        <div></div>
        <div>
          <h1 className="text-xl font-bold">Header Text</h1>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consec<br />
            tetur adipisicing elit. Rem sequi natus<br />
            similique pariatur molestiae quibusdam tempora.
          </p>
        </div>
      </motion.div>

      <motion.div
    whileInView={{opacity: 1, x: 1}}
    initial={{ opacity:0, x: 100}}
    transition={{duration: 0.9,}}
      className="text-center flex-1">
        <div></div>
        <div>
          <h1 className="text-xl font-bold">Header Text</h1>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consec<br />
            tetur adipisicing elit. Rem sequi natus<br />
            similique pariatur molestiae quibusdam tempora.
          </p>
        </div>
      </motion.div>

      <motion.div
    whileInView={{opacity: 1, x: 1}}
    initial={{ opacity:0, x: 100}}
    transition={{duration: 1.0,}}
      className="text-center flex-1">
        <div></div>
        <div>
          <h1 className="text-xl font-bold">Header Text</h1>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consec<br />
            tetur adipisicing elit. Rem sequi natus<br />
            similique pariatur molestiae quibusdam tempora.
          </p>
        </div>
      </motion.div>

    </div>
  );
}

export default MiniSection;