import { motion } from 'framer-motion';
import Donate from '../Images/DSC_0387.jpg';
const Fundraisers = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('src/Images/DSC_0387.jpg')" }}>
    <div className="absolute inset-0 bg-green-500 opacity-50"></div>
<div className="relative flex items-center justify-start h-full p-8">
    <div className='flex p-10 gap-32'>

    <div className='flex text-left flex-col'>
        <motion.h2
          className="text-white text-4xl md:text-3xl font-light"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
            FEATURED
        </motion.h2>

        <motion.p
        className="text-white text-4xl md:text-3xl font-bold"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}>

        Far far away, behind the word<br />
        mountains, far from the countries<br />
        Vokalia and Consonantia, there live the<br />
        blind texts.

        </motion.p>

        <motion.p
        className="text-white text-4xl md:text-1xl font-light"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <i>Last donation 1w ago</i>

        </motion.p>
    </div>
    <div className='border-solid border-[18px] border-white'>
        <img width="450px" src={Donate} alt="" />
    </div>
    </div>

</div>
</div>
  )
}

export default Fundraisers