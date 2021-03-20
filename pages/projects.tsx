import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { projects as projectsData} from "../data";
import { Category } from "../types";
import {motion} from 'framer-motion'
import { fadeInUp, routeFade, stagger } from "../animations";

const project = () => {
  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState("All")

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData)
      setActive(category)
      return
    }

    const newArray = projectsData.filter((project) => 
      project.category.includes(category)
    )

    setProjects(newArray)
    setActive(category)
  }
    return (
        <motion.div 
          variants={routeFade}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>
        <ProjectNavbar handleFilterCategory={handleFilterCategory}
        active={active}/>
        
        <motion.div 
          className="relative grid grid-cols-12 gap-4 my-3"
          variants={stagger}
          initial="initial"
          animate="animate"
          
        >
          {/* <AnimatePresence> */}
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 sm:col-span-6 lg:col-span-4"
              variants={fadeInUp}
              key={project.id}
            >
              <ProjectCard project={project}  />
            </motion.div>
          ))}
          {/* </AnimatePresence> */}
        </motion.div>
      </motion.div>
    )
}

export default project
