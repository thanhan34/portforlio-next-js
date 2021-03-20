import { FunctionComponent } from 'react'
import {motion} from 'framer-motion'
import { ISkill } from '../types'


const Bar: FunctionComponent<{ value: ISkill }> = ({
   value: { Icon, level, name },
}) => {
   const bar_width = `${level}%`
   const barVariants = {
      hidden: {
         width: 0,
      },
      visible: {
         width: bar_width,
         transition: {            
            duration: 0.4,
            type:"spring",
            damping: 10,
            stiffness: 100,
         }
      }
   }
   return (
      <div className='my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300'>
         <motion.div
            className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300'
            variants={barVariants}
            initial="hidden"
            animate="visible"            
            >
            <Icon className='mr-3' /> {name}
         </motion.div>
      </div>
   )
}
export default Bar